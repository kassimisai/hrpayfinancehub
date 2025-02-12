
import { BarChart2, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-secondary">Reports</h1>
          <p className="text-muted-foreground">View and analyze organizational data</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card">
          <BarChart2 className="w-5 h-5 text-primary" />
          <div className="stat-value">$1.2M</div>
          <div className="stat-label">Total Payroll</div>
        </div>
        <div className="stat-card">
          <BarChart2 className="w-5 h-5 text-primary" />
          <div className="stat-value">89%</div>
          <div className="stat-label">Attendance Rate</div>
        </div>
        <div className="stat-card">
          <BarChart2 className="w-5 h-5 text-primary" />
          <div className="stat-value">24</div>
          <div className="stat-label">New Hires (YTD)</div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payroll">Payroll</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <TabsContent value="overview" className="mt-0">
          <ScrollArea className="h-[calc(100vh-400px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  Chart Placeholder
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  Chart Placeholder
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Employee Growth</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  Chart Placeholder
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Time Off Trends</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  Chart Placeholder
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsPage;
