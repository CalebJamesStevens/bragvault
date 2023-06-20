export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      brag: {
        Row: {
          action: string
          created_at: string | null
          end_date: string | null
          id: string
          manager: string | null
          position: string
          result: string
          situation: string
          start_date: string | null
          task: string
          team: string[] | null
          title: string
          user: string
        }
        Insert: {
          action: string
          created_at?: string | null
          end_date?: string | null
          id?: string
          manager?: string | null
          position: string
          result: string
          situation: string
          start_date?: string | null
          task: string
          team?: string[] | null
          title: string
          user: string
        }
        Update: {
          action?: string
          created_at?: string | null
          end_date?: string | null
          id?: string
          manager?: string | null
          position?: string
          result?: string
          situation?: string
          start_date?: string | null
          task?: string
          team?: string[] | null
          title?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "brag_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
