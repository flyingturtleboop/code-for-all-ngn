import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Minimal no-op function to satisfy build. Does nothing and returns OK.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  return new Response(
    JSON.stringify({ status: "ok" }),
    { headers: { "Content-Type": "application/json", ...corsHeaders } }
  );
});
