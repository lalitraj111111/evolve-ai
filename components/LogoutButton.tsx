"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function LogoutButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    window.localStorage.removeItem("evolve_session");
    window.localStorage.removeItem("evolve_role");
    window.localStorage.setItem("evolve_logout_message", "Logged out successfully");
    router.replace("/login");
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={compact ? "grid h-10 w-10 place-items-center rounded-full bg-coral/15 text-coral transition hover:bg-coral hover:text-white" : "flex w-full items-center justify-center gap-2 rounded-2xl bg-coral/15 px-4 py-3 text-sm font-black text-coral transition hover:bg-coral hover:text-white"}>
        <LogOut size={18} /> {compact ? null : "Logout"}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#10131a] p-5 text-white shadow-soft">
            <h2 className="text-xl font-black">Are you sure you want to logout?</h2>
            <p className="mt-2 text-sm text-slate-300">This clears your user session and admin access from this device.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" className="secondary-btn border-white/10 bg-white/10 text-white" onClick={() => setOpen(false)}>Cancel</button>
              <button type="button" className="primary-btn bg-coral text-white" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
