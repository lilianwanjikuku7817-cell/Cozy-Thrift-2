// 👉 PASTE YOUR SUPABASE CREDENTIALS HERE
const SUPABASE_URL = 'https://jmaqsafwtslyvutzhffr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYXFzYWZ3dHNseXZ1dHpoZmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyMDI1NTksImV4cCI6MjEwOTc3ODU1OX0.P012oAggtJHggzLEIz9-fm_ktRNK4lCpEf0g1R2Cjj0';

let sb = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('YOUR_')) {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn('⚠️ Add your Supabase keys in config.js');
}