/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_KEY: string;
  // Add other VITE_ prefixed environment variables here as you introduce them
  // For example:
  // readonly VITE_ANOTHER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}