
// ==========================================
// CIDADE COLETIVA — CONEXÃO SUPABASE
// ==========================================

const SUPABASE_URL = "https://jspcgjjsjkemhibynlyb.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_IhY5Km_g-B-URxoYKLRALQ_igCMmKvD";

// Criar conexão
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Conexão com Supabase inicializada.");
