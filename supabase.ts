import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type College = {
  id: string;
  name: string;
  category: string;
  state: string;
  city: string;
  address: string;
  description: string;
  image_url: string;
  website: string;
  phone: string;
  email: string;
  ranking: number | null;
  established: number | null;
  created_at: string;
};
