
import { Calendar, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const timeOffRequests = [
  { id: 1, employee: "Sarah Johnson", type: "Vacation", startDate: "Feb 15, 2024", endDate: "Feb 20, 2024", status: "Pending", days: 5 },
  { id: 2, employee: "Michael Chen", type: "Sick Leave", startDate: "Feb 10, 2024", endDate: "Feb 11, 2024", status: "Approved", days: 2 },
  // Add more time off requests as needed
];

const TimeOffPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-secondary">Time Off</h1>
          <p className="text-muted-foreground">Manage employee time off requests</p>
        </div>
        <Button>
          <Clock className="mr-2 h-4 w-4" />
          Request Time Off
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">15</div>
          <div className="stat-label">Pending Requests</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">120</div>
          <div className="stat-label">Approved Days</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">45</div>
          <div className="stat-label">Available Days</div>
        </div>
        <div className="stat-card">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="stat-value">8</div>
          <div className="stat-label">Upcoming Leaves</div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="rounded-lg border">
            <table className="w-full">
              <thead className="bg-muted text-secondary">
                <tr>
                  <th className="text-left p-4">Employee</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Start Date</th>
                  <th className="text-left p-4">End Date</th>
                  <th className="text-left p-4">Days</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {timeOffRequests.map((request) => (
                  <tr key={request.id} className="border-t hover:bg-muted/50">
                    <td className="p-4">{request.employee}</td>
                    <td className="p-4">{request.type}</td>
                    <td className="p-4">{request.startDate}</td>
                    <td className="p-4">{request.endDate}</td>
                    <td className="p-4">{request.days}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        request.status === "Pending" ? "bg-warning/20 text-warning-foreground" :
                        request.status === "Approved" ? "bg-primary/10 text-primary" :
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimeOffPage;
