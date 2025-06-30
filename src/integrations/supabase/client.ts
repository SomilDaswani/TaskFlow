import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Access Supabase URL and key from environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Ensure that the environment variables are defined.
if (!SUPABASE_URL) {
  throw new Error("VITE_SUPABASE_URL is not defined in your environment variables.");
}
if (!SUPABASE_PUBLISHABLE_KEY) {
  throw new Error("VITE_SUPABASE_KEY is not defined in your environment variables.");
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);