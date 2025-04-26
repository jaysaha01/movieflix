
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// const supabaseUrl = "https://qruxkmojziyqrfovvzbg.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydXhrbW9qeml5cXJmb3Z2emJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzA4MjcsImV4cCI6MjA2MTE0NjgyN30.8xAiD33zpDP7Sm7fj6DN-dZeE2el-JgHsZ9_cW8G3IQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
        