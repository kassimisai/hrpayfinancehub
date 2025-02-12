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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
