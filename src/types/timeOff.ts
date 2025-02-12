
export type TimeOffStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface TimeOffRequest {
  id: string;
  employee_id: string;
  start_date: string;
  end_date: string;
  request_type: string;
  reason?: string;
  status: TimeOffStatus;
  approved_by?: string;
  created_at?: string;
  updated_at?: string;
}
