
import { useState } from "react";
import { Users, UserPlus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const employees = [
  { id: 1, name: "Sarah Johnson", role: "Senior Developer", department: "Engineering", status: "Active", email: "sarah.j@company.com", joinDate: "Jan 15, 2023" },
  { id: 2, name: "Michael Chen", role: "Product Manager", department: "Product", status: "Active", email: "michael.c@company.com", joinDate: "Mar 3, 2023" },
  { id: 3, name: "Emily Davis", role: "UX Designer", department: "Design", status: "Active", email: "emily.d@company.com", joinDate: "Apr 22, 2023" },
  // Add more employee data as needed
];

const EmployeesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-secondary">Employees</h1>
          <p className="text-muted-foreground">Manage your organization's employees</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
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
        <div className="rounded-lg border">
          <table className="w-full">
            <thead className="bg-muted text-secondary">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Department</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Join Date</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-t hover:bg-muted/50">
                  <td className="p-4">{employee.name}</td>
                  <td className="p-4">{employee.role}</td>
                  <td className="p-4">{employee.department}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {employee.status}
                    </span>
                  </td>
                  <td className="p-4">{employee.email}</td>
                  <td className="p-4">{employee.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmployeesPage;
