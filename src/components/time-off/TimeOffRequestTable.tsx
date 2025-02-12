
import { format } from "date-fns";
import type { TimeOffRequest } from "@/types/timeOff";

interface TimeOffRequestTableProps {
  requests: TimeOffRequest[];
  isLoading: boolean;
}

export function TimeOffRequestTable({ requests, isLoading }: TimeOffRequestTableProps) {
  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
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
}
