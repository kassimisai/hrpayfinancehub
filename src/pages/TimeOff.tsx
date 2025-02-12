
import { useState } from "react";
import { Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { TimeOffRequest, NewTimeOffRequest } from "@/types/timeOff";
import { TimeOffStats } from "@/components/time-off/TimeOffStats";
import { TimeOffRequestForm } from "@/components/time-off/TimeOffRequestForm";
import { TimeOffRequestTable } from "@/components/time-off/TimeOffRequestTable";

const TimeOffPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

  const getFilteredRequests = (status?: TimeOffRequest['status'] | 'all') => {
    if (!timeOffRequests) return [];
    if (!status || status === 'all') return timeOffRequests;
    return timeOffRequests.filter(request => request.status === status);
  };

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
            <TimeOffRequestForm 
              onSubmit={createTimeOffRequest.mutate} 
              isSubmitting={createTimeOffRequest.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <TimeOffStats timeOffRequests={timeOffRequests} />

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
          <TimeOffRequestTable
            requests={getFilteredRequests()}
            isLoading={isLoading}
          />
        </TabsContent>
        
        <TabsContent value="PENDING" className="mt-0">
          <TimeOffRequestTable
            requests={getFilteredRequests('PENDING')}
            isLoading={isLoading}
          />
        </TabsContent>
        
        <TabsContent value="APPROVED" className="mt-0">
          <TimeOffRequestTable
            requests={getFilteredRequests('APPROVED')}
            isLoading={isLoading}
          />
        </TabsContent>
        
        <TabsContent value="REJECTED" className="mt-0">
          <TimeOffRequestTable
            requests={getFilteredRequests('REJECTED')}
            isLoading={isLoading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimeOffPage;
