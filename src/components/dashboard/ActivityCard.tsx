
import { Users, Calendar, FileText } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "new_employee",
    title: "New Employee Joined",
    description: "Sarah Johnson joined as Senior Developer",
    icon: Users,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "time_off",
    title: "Time Off Request",
    description: "Mike Smith requested 5 days of vacation",
    icon: Calendar,
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "document",
    title: "Document Updated",
    description: "HR Policy document was updated",
    icon: FileText,
    timestamp: "1 day ago",
  },
];

export const ActivityCard = () => {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex gap-4">
              <div className="p-2 rounded-lg bg-accent h-fit">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-secondary">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
