
import { Users, DollarSign, Clock, Briefcase } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-secondary">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Employees"
          value={156}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          icon={DollarSign}
          label="Payroll"
          value="$345,678"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          icon={Clock}
          label="Time Off Requests"
          value={23}
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard
          icon={Briefcase}
          label="Open Positions"
          value={12}
          trend={{ value: 18, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityCard />
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Add Employee", icon: Users },
              { label: "Process Payroll", icon: DollarSign },
              { label: "Review Time Off", icon: Clock },
              { label: "Post Job", icon: Briefcase },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className="p-4 text-sm text-secondary hover:bg-accent rounded-lg border border-border flex flex-col items-center gap-2 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
