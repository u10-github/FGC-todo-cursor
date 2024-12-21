export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          description: string | null
          x_account: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          description?: string | null
          x_account?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          description?: string | null
          x_account?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_games: {
        Row: {
          id: string
          user_id: string
          game_title: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          game_title: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          game_title?: string
          created_at?: string
        }
      }
      task_lists: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          is_public: boolean
          likes_count: number
          deleted_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          is_public?: boolean
          likes_count?: number
          deleted_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          is_public?: boolean
          likes_count?: number
          deleted_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          user_id: string
          task_list_id: string | null
          title: string
          description: string | null
          completion_count: number
          is_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          task_list_id?: string | null
          title: string
          description?: string | null
          completion_count?: number
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          task_list_id?: string | null
          title?: string
          description?: string | null
          completion_count?: number
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          type: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          created_at?: string
        }
      }
      task_list_tags: {
        Row: {
          task_list_id: string
          tag_id: string
          created_at: string
        }
        Insert: {
          task_list_id: string
          tag_id: string
          created_at?: string
        }
        Update: {
          task_list_id?: string
          tag_id?: string
          created_at?: string
        }
      }
      likes: {
        Row: {
          user_id: string
          task_list_id: string
          created_at: string
        }
        Insert: {
          user_id: string
          task_list_id: string
          created_at?: string
        }
        Update: {
          user_id?: string
          task_list_id?: string
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: string
          data: Json
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          data: Json
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          data?: Json
          is_read?: boolean
          created_at?: string
        }
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
  }
} 