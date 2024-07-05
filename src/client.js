import { createClient } from "@supabase/supabase-js";

const URL = "https://pwigdrzreninxmnpknnz.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aWdkcnpyZW5pbnhtbnBrbm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMDM2MTEsImV4cCI6MjAzNDU3OTYxMX0.lXwBAlWcXcNKsVy9O63YZVb_6xEZNa0XbAIW7zgLQT0";

const supabase = createClient(URL, API_KEY);

export default supabase;
