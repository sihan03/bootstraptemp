import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Define types based on our database schema
export type MediaItem = {
  id: number;
  title: string;
  type: string;
  url: string;
  description: string | null;
  upvotes: number;
  downvotes: number;
  vote_count: number;
  icon: string | null;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  media_item_id: number;
  content: string;
  created_at: string;
  user_id: string | null;
}; 