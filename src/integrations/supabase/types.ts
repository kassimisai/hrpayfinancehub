export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      departments: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          manager_id: string | null
          name: string
          organization_id: string | null
          parent_department_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          manager_id?: string | null
          name: string
          organization_id?: string | null
          parent_department_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          manager_id?: string | null
          name?: string
          organization_id?: string | null
          parent_department_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_parent_department_id_fkey"
            columns: ["parent_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_benefits: {
        Row: {
          benefit_type: string
          coverage_end_date: string | null
          coverage_start_date: string
          created_at: string | null
          employee_id: string | null
          id: string
          policy_number: string | null
          provider: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          benefit_type: string
          coverage_end_date?: string | null
          coverage_start_date: string
          created_at?: string | null
          employee_id?: string | null
          id?: string
          policy_number?: string | null
          provider?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          benefit_type?: string
          coverage_end_date?: string | null
          coverage_start_date?: string
          created_at?: string | null
          employee_id?: string | null
          id?: string
          policy_number?: string | null
          provider?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_benefits_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_documents: {
        Row: {
          created_at: string | null
          document_name: string
          document_type: string
          employee_id: string | null
          file_path: string
          id: string
          updated_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          document_name: string
          document_type: string
          employee_id?: string | null
          file_path: string
          id?: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          document_name?: string
          document_type?: string
          employee_id?: string | null
          file_path?: string
          id?: string
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          department_id: string | null
          email: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          employee_type: string
          employment_status: string
          first_name: string
          hire_date: string
          id: string
          job_title: string
          last_name: string
          manager_id: string | null
          organization_id: string | null
          phone: string | null
          salary_amount: number | null
          salary_currency: string | null
          tax_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          department_id?: string | null
          email: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_type?: string
          employment_status?: string
          first_name: string
          hire_date: string
          id?: string
          job_title: string
          last_name: string
          manager_id?: string | null
          organization_id?: string | null
          phone?: string | null
          salary_amount?: number | null
          salary_currency?: string | null
          tax_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          department_id?: string | null
          email?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_type?: string
          employment_status?: string
          first_name?: string
          hire_date?: string
          id?: string
          job_title?: string
          last_name?: string
          manager_id?: string | null
          organization_id?: string | null
          phone?: string | null
          salary_amount?: number | null
          salary_currency?: string | null
          tax_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_management"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          address: string | null
          city: string | null
          contact_email: string | null
          country: string | null
          created_at: string | null
          id: string
          name: string
          tax_id: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name: string
          tax_id?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          contact_email?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name?: string
          tax_id?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      payroll_records: {
        Row: {
          base_salary: number
          bonus: number | null
          created_at: string | null
          deductions: number | null
          employee_id: string | null
          id: string
          net_pay: number
          overtime_pay: number | null
          pay_period_end: string
          pay_period_start: string
          payment_date: string | null
          payment_status: string
          tax_withholding: number | null
          updated_at: string | null
        }
        Insert: {
          base_salary: number
          bonus?: number | null
          created_at?: string | null
          deductions?: number | null
          employee_id?: string | null
          id?: string
          net_pay: number
          overtime_pay?: number | null
          pay_period_end: string
          pay_period_start: string
          payment_date?: string | null
          payment_status?: string
          tax_withholding?: number | null
          updated_at?: string | null
        }
        Update: {
          base_salary?: number
          bonus?: number | null
          created_at?: string | null
          deductions?: number | null
          employee_id?: string | null
          id?: string
          net_pay?: number
          overtime_pay?: number | null
          pay_period_end?: string
          pay_period_start?: string
          payment_date?: string | null
          payment_status?: string
          tax_withholding?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_records_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_reviews: {
        Row: {
          comments: string | null
          created_at: string | null
          employee_id: string | null
          id: string
          overall_rating: number | null
          review_period_end: string
          review_period_start: string
          reviewer_id: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          employee_id?: string | null
          id?: string
          overall_rating?: number | null
          review_period_end: string
          review_period_start: string
          reviewer_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          employee_id?: string | null
          id?: string
          overall_rating?: number | null
          review_period_end?: string
          review_period_start?: string
          reviewer_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "performance_reviews_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "performance_reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          created_at: string
          id: string
          permission_id: string | null
          role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          created_at?: string
          id?: string
          permission_id?: string | null
          role: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          created_at?: string
          id?: string
          permission_id?: string | null
          role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      time_off_requests: {
        Row: {
          approved_by: string | null
          created_at: string | null
          employee_id: string | null
          end_date: string
          id: string
          reason: string | null
          request_type: string
          start_date: string
          status: string
          updated_at: string | null
        }
        Insert: {
          approved_by?: string | null
          created_at?: string | null
          employee_id?: string | null
          end_date: string
          id?: string
          reason?: string | null
          request_type: string
          start_date: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          approved_by?: string | null
          created_at?: string | null
          employee_id?: string | null
          end_date?: string
          id?: string
          reason?: string | null
          request_type?: string
          start_date?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_off_requests_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_off_requests_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      trading_signals: {
        Row: {
          analysis_text: string
          breakout_zones: Json | null
          buy_confidence: number | null
          chain_specific_patterns: Json | null
          combined_score: number | null
          confidence_score: number
          confirmation_indicators: Json | null
          contract_risks: string[] | null
          created_at: string | null
          historical_pattern_success: Json | null
          historical_performance: Json | null
          historical_signals: Json | null
          hold_confidence: number | null
          holder_analysis: string | null
          id: string
          inactive_patterns_studied: boolean | null
          key_price_levels: Json | null
          liquidity_depth: Json | null
          liquidity_score: number | null
          liquidity_usd: number | null
          market_cap_usd: number | null
          market_correlation: Json | null
          market_score: number | null
          momentum_divergences: Json | null
          momentum_indicators: Json | null
          order_book_analysis: Json | null
          pair_address: string
          pattern_analysis_depth: number | null
          pattern_breakout_confirmation: Json | null
          pattern_distribution_signs: string[] | null
          pattern_recognition: Json | null
          pattern_recognition_metrics: Json | null
          pattern_reliability_score: number | null
          pattern_study_timestamp: string | null
          pattern_success_rate: number | null
          pattern_timeframe: string | null
          pattern_timeframes: string[] | null
          pattern_training_data: Json | null
          pattern_validation_results: Json | null
          pattern_volume_profile: Json | null
          position_size_recommendation: Json | null
          price_action_signals: Json | null
          price_history: Json | null
          psychology_score: number | null
          risk_reward_ratio: number | null
          security_flags: string[] | null
          security_score: number | null
          sell_confidence: number | null
          sentiment_analysis: Json | null
          signal_strength: string | null
          signal_type: string
          signal_value: string
          similar_patterns: Json | null
          smart_money_flow: Json | null
          stop_loss_suggestions: Json | null
          support_resistance: Json | null
          technical_score: number | null
          token_address: string
          trend_analysis: Json | null
          trend_strength_indicators: Json | null
          updated_at: string | null
          volatility_metrics: Json | null
          volume_24h: number | null
          volume_analysis: string | null
          volume_based_signals: Json | null
          volume_profile: Json | null
          volume_trends: string[] | null
          whale_activity: Json | null
        }
        Insert: {
          analysis_text: string
          breakout_zones?: Json | null
          buy_confidence?: number | null
          chain_specific_patterns?: Json | null
          combined_score?: number | null
          confidence_score: number
          confirmation_indicators?: Json | null
          contract_risks?: string[] | null
          created_at?: string | null
          historical_pattern_success?: Json | null
          historical_performance?: Json | null
          historical_signals?: Json | null
          hold_confidence?: number | null
          holder_analysis?: string | null
          id?: string
          inactive_patterns_studied?: boolean | null
          key_price_levels?: Json | null
          liquidity_depth?: Json | null
          liquidity_score?: number | null
          liquidity_usd?: number | null
          market_cap_usd?: number | null
          market_correlation?: Json | null
          market_score?: number | null
          momentum_divergences?: Json | null
          momentum_indicators?: Json | null
          order_book_analysis?: Json | null
          pair_address: string
          pattern_analysis_depth?: number | null
          pattern_breakout_confirmation?: Json | null
          pattern_distribution_signs?: string[] | null
          pattern_recognition?: Json | null
          pattern_recognition_metrics?: Json | null
          pattern_reliability_score?: number | null
          pattern_study_timestamp?: string | null
          pattern_success_rate?: number | null
          pattern_timeframe?: string | null
          pattern_timeframes?: string[] | null
          pattern_training_data?: Json | null
          pattern_validation_results?: Json | null
          pattern_volume_profile?: Json | null
          position_size_recommendation?: Json | null
          price_action_signals?: Json | null
          price_history?: Json | null
          psychology_score?: number | null
          risk_reward_ratio?: number | null
          security_flags?: string[] | null
          security_score?: number | null
          sell_confidence?: number | null
          sentiment_analysis?: Json | null
          signal_strength?: string | null
          signal_type: string
          signal_value: string
          similar_patterns?: Json | null
          smart_money_flow?: Json | null
          stop_loss_suggestions?: Json | null
          support_resistance?: Json | null
          technical_score?: number | null
          token_address: string
          trend_analysis?: Json | null
          trend_strength_indicators?: Json | null
          updated_at?: string | null
          volatility_metrics?: Json | null
          volume_24h?: number | null
          volume_analysis?: string | null
          volume_based_signals?: Json | null
          volume_profile?: Json | null
          volume_trends?: string[] | null
          whale_activity?: Json | null
        }
        Update: {
          analysis_text?: string
          breakout_zones?: Json | null
          buy_confidence?: number | null
          chain_specific_patterns?: Json | null
          combined_score?: number | null
          confidence_score?: number
          confirmation_indicators?: Json | null
          contract_risks?: string[] | null
          created_at?: string | null
          historical_pattern_success?: Json | null
          historical_performance?: Json | null
          historical_signals?: Json | null
          hold_confidence?: number | null
          holder_analysis?: string | null
          id?: string
          inactive_patterns_studied?: boolean | null
          key_price_levels?: Json | null
          liquidity_depth?: Json | null
          liquidity_score?: number | null
          liquidity_usd?: number | null
          market_cap_usd?: number | null
          market_correlation?: Json | null
          market_score?: number | null
          momentum_divergences?: Json | null
          momentum_indicators?: Json | null
          order_book_analysis?: Json | null
          pair_address?: string
          pattern_analysis_depth?: number | null
          pattern_breakout_confirmation?: Json | null
          pattern_distribution_signs?: string[] | null
          pattern_recognition?: Json | null
          pattern_recognition_metrics?: Json | null
          pattern_reliability_score?: number | null
          pattern_study_timestamp?: string | null
          pattern_success_rate?: number | null
          pattern_timeframe?: string | null
          pattern_timeframes?: string[] | null
          pattern_training_data?: Json | null
          pattern_validation_results?: Json | null
          pattern_volume_profile?: Json | null
          position_size_recommendation?: Json | null
          price_action_signals?: Json | null
          price_history?: Json | null
          psychology_score?: number | null
          risk_reward_ratio?: number | null
          security_flags?: string[] | null
          security_score?: number | null
          sell_confidence?: number | null
          sentiment_analysis?: Json | null
          signal_strength?: string | null
          signal_type?: string
          signal_value?: string
          similar_patterns?: Json | null
          smart_money_flow?: Json | null
          stop_loss_suggestions?: Json | null
          support_resistance?: Json | null
          technical_score?: number | null
          token_address?: string
          trend_analysis?: Json | null
          trend_strength_indicators?: Json | null
          updated_at?: string | null
          volatility_metrics?: Json | null
          volume_24h?: number | null
          volume_analysis?: string | null
          volume_based_signals?: Json | null
          volume_profile?: Json | null
          volume_trends?: string[] | null
          whale_activity?: Json | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_management"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      user_management: {
        Row: {
          email: string | null
          id: string | null
          is_admin: boolean | null
        }
        Insert: {
          email?: string | null
          id?: string | null
          is_admin?: never
        }
        Update: {
          email?: string | null
          id?: string | null
          is_admin?: never
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_permissions: {
        Args: {
          user_id: string
        }
        Returns: {
          permission_name: string
        }[]
      }
      has_hr_permissions: {
        Args: {
          lookup_user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          user_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      toggle_admin_role: {
        Args: {
          target_user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "employee"
      user_role: "ADMIN" | "HR" | "MANAGER" | "EMPLOYEE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
