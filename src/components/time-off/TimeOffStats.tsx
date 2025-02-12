
import { Calendar } from "lucide-react";
import type { TimeOffRequest } from "@/types/timeOff";

interface TimeOffStatsProps {
  timeOffRequests?: TimeOffRequest[];
}

export function TimeOffStats({ timeOffRequests }: TimeOffStatsProps) {
  return (
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
  );
}
