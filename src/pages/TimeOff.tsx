
import { useState } from "react";
import { Calendar, Clock, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { TimeOffRequest, NewTimeOffRequest } from "@/types/timeOff";
import { format } from "date-fns";

const TimeOffPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch time off requests
  const { data: timeOffRequests, isLoading } = useQuery({
    queryKey: ['timeOffRequests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('time_off_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as TimeOffRequest[];
    },
  });

  // Create time off request mutation
  const createTimeOffRequest = useMutation({
    mutationFn: async (newRequest: NewTimeOffRequest) => {
      const { data, error } = await supabase
        .from('time_off_requests')
        .insert(newRequest)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timeOffRequests'] });
      setIsDialogOpen(false);
      toast({
        title: "Success",
        description: "Time off request submitted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const newRequest: NewTimeOffRequest = {
      start_date: formData.get('startDate') as string,
      end_date: formData.get('endDate') as string,
      request_type: formData.get('type') as string,
      reason: formData.get('reason') as string,
    };

    createTimeOffRequest.mutate(newRequest);
  };

  const getFilteredRequests = (status?: TimeOffRequest['status']) => {
    if (!timeOffRequests) return [];
    if (!status || status === 'all') return timeOffRequests;
    return timeOffRequests.filter(request => request.status === status);
  };

  const renderRequestTable = (requests: TimeOffRequest[]) => (
    <div className="rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted text-secondary">
          <tr>
            <th className="text-left p-4">Start Date</th>
            <th className="text-left p-4">End Date</th>
            <th className="text-left p-4">Type</th>
            <th className="text-left p-4">Reason</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4 text-muted-foreground">
                No requests found
              </td>
            </tr>
          ) : requests.map((request) => (
            <tr key={request.id} className="border-t hover:bg-muted/50">
              <td className="p-4">{format(new Date(request.start_date), 'MMM dd, yyyy')}</td>
              <td className="p-4">{format(new Date(request.end_date), 'MMM dd, yyyy')}</td>
              <td className="p-4">{request.request_type}</td>
              <td className="p-4">{request.reason || '-'}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  request.status === "PENDING" ? "bg-warning/20 text-warning-foreground" :
                  request.status === "APPROVED" ? "bg-primary/10 text-primary" :
                  "bg-destructive/10 text-destructive-foreground"
                }`}>
                  {request.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-secondary">Time Off</h1>
          <p className="text-muted-foreground">Manage employee time off requests</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Request Time Off
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request Time Off</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select name="type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VACATION">Vacation</SelectItem>
                    <SelectItem value="SICK">Sick Leave</SelectItem>
                    <SelectItem value="PERSONAL">Personal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason (Optional)</Label>
                <Input
                  id="reason"
                  name="reason"
                  placeholder="Enter reason"
                />
              </div>
              <Button type="submit" className="w-full" disabled={createTimeOffRequest.isPending}>
                {createTimeOffRequest.isPending ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">
            {timeOffRequests?.filter(r => r.status === 'PENDING').length || 0}
          </div>
          <div className="stat-label">Pending Requests</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">
            {timeOffRequests?.filter(r => r.status === 'APPROVED').length || 0}
          </div>
          <div className="stat-label">Approved Requests</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">45</div>
          <div className="stat-label">Available Days</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">
            {timeOffRequests?.filter(r => 
              r.status === 'APPROVED' && 
              new Date(r.start_date) > new Date()
            ).length || 0}
          </div>
          <div className="stat-label">Upcoming Leaves</div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="PENDING">Pending</TabsTrigger>
            <TabsTrigger value="APPROVED">Approved</TabsTrigger>
            <TabsTrigger value="REJECTED">Rejected</TabsTrigger>
          </TabsList>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          {isLoading ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            renderRequestTable(getFilteredRequests())
          )}
        </TabsContent>
        
        <TabsContent value="PENDING" className="mt-0">
          {isLoading ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            renderRequestTable(getFilteredRequests('PENDING'))
          )}
        </TabsContent>
        
        <TabsContent value="APPROVED" className="mt-0">
          {isLoading ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            renderRequestTable(getFilteredRequests('APPROVED'))
          )}
        </TabsContent>
        
        <TabsContent value="REJECTED" className="mt-0">
          {isLoading ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            renderRequestTable(getFilteredRequests('REJECTED'))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimeOffPage;
