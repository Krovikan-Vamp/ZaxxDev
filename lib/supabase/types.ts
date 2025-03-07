export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined; }
    | Json[];

export type Database = {
    public: {
        Tables: {
            contact_messages: {
                Row: {
                    created_at: string;
                    id: number;
                    message: string | null;
                    user_id: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    message?: string | null;
                    user_id: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    message?: string | null;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "contact_messages_user_id_fkey";
                        columns: ["user_id"];
                        isOneToOne: false;
                        referencedRelation: "profiles";
                        referencedColumns: ["id"];
                    },
                ];
            };
            profiles: {
                Row: {
                    avatar_url: string | null;
                    full_name: string | null;
                    id: string;
                    raw_user_meta_data: Json | null;
                    updated_at: string | null;
                    username: string | null;
                    website: string | null;
                };
                Insert: {
                    avatar_url?: string | null;
                    full_name?: string | null;
                    id: string;
                    raw_user_meta_data?: Json | null;
                    updated_at?: string | null;
                    username?: string | null;
                    website?: string | null;
                };
                Update: {
                    avatar_url?: string | null;
                    full_name?: string | null;
                    id?: string;
                    raw_user_meta_data?: Json | null;
                    updated_at?: string | null;
                    username?: string | null;
                    website?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "profiles_id_fkey";
                        columns: ["id"];
                        isOneToOne: true;
                        referencedRelation: "users";
                        referencedColumns: ["id"];
                    },
                ];
            };
            services: {
                Row: {
                    body_content: string | null;
                    built_with_icons: Json | null;
                    created_at: string;
                    deployed_with_icons: Json | null;
                    id: number;
                    title: string;
                    user_id: string;
                };
                Insert: {
                    body_content?: string | null;
                    built_with_icons?: Json | null;
                    created_at?: string;
                    deployed_with_icons?: Json | null;
                    id?: number;
                    title: string;
                    user_id?: string;
                };
                Update: {
                    body_content?: string | null;
                    built_with_icons?: Json | null;
                    created_at?: string;
                    deployed_with_icons?: Json | null;
                    id?: number;
                    title?: string;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "services_user_id_fkey";
                        columns: ["user_id"];
                        isOneToOne: false;
                        referencedRelation: "profiles";
                        referencedColumns: ["id"];
                    },
                ];
            };
        };
        Views: {
            [_ in never]: never
        };
        Functions: {
            [_ in never]: never
        };
        Enums: {
            [_ in never]: never
        };
        CompositeTypes: {
            [_ in never]: never
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database; },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database; }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database; }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R;
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R;
        }
    ? R
    : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database; },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database; }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database; }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I;
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
    }
    ? I
    : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database; },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database; }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database; }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U;
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
    }
    ? U
    : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database; },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database; }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database; }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
