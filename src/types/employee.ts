
export type Employee = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  job_title: string;
  department_id: string | null;
  employment_status: 'ACTIVE' | 'INACTIVE' | 'ON_LEAVE';
  employee_type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
  hire_date: string;
};

export type NewEmployee = Omit<Employee, 'id'>;
