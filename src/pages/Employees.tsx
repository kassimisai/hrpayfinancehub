
import { useState } from "react";
import { Search, Filter, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Employee } from "@/types/employee";
import { AddEmployeeDialog } from "@/components/employees/AddEmployeeDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Badge,
  BadgeProps,
} from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";

const getStatusColor = (status: string): BadgeProps["variant"] => {
  switch (status) {
    case 'ACTIVE':
      return "success";
    case 'INACTIVE':
      return "destructive";
    case 'ON_LEAVE':
      return "warning";
    default:
      return "default";
  }
};

const EmployeesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const { user, userRole } = useAuth();

  const { data: employees, isLoading, error } = useQuery({
    queryKey: ['employees'],
    queryFn: async () => {
      console.log('Fetching employees with user role:', userRole);
      const { data, error } = await supabase
        .from('employees')
        .select(`
          *,
          departments (
            name
          )
        `);

      if (error) {
        console.error('Error fetching employees:', error);
        throw new Error('You don\'t have permission to view employees data');
      }

      return data as (Employee & { departments: { name: string } | null })[];
    },
  });

  const filteredEmployees = employees?.filter((employee) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      employee.first_name.toLowerCase().includes(searchTerm) ||
      employee.last_name.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.job_title.toLowerCase().includes(searchTerm)
    );
  });

  if (error) {
    return (
      <div className="p-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {error instanceof Error ? error.message : 'An error occurred while fetching employees data'}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const canAddEmployee = userRole === 'HR' || userRole === 'ADMIN';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-secondary">Employees</h1>
          <p className="text-muted-foreground">Manage your organization's employees</p>
        </div>
        {canAddEmployee && <AddEmployeeDialog />}
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-280px)]">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Hire Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees?.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    {employee.first_name} {employee.last_name}
                  </TableCell>
                  <TableCell>{employee.job_title}</TableCell>
                  <TableCell>{employee.departments?.name || 'N/A'}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(employee.employment_status)}>
                      {employee.employment_status}
                    </Badge>
                  </TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{new Date(employee.hire_date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ScrollArea>
    </div>
  );
};

export default EmployeesPage;
