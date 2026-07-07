"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Role = "user" | "admin";

export function AuthGuard({ children, onRoleChange }: { children: ReactNode; onRoleChange?: (role: Role | null) => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      const role = window.localStorage.getItem("evolve_role") as Role | null;
      const normalizedRole = role === "admin" ? "admin" : role === "user" ? "user" : null;
      const supabase = getSupabaseBrowserClient();
      const { data } = supabase ? await supabase.auth.getSession() : { data: { session: null } };
      const loggedIn = window.localStorage.getItem("evolve_session") === "active" || Boolean(data.session);

      onRoleChange?.(loggedIn ? normalizedRole : null);

      if (!loggedIn) {
        router.replace("/login");
        return;
      }

      if (pathname.startsWith("/admin") && normalizedRole !== "admin") {
        router.replace("/login");
        return;
      }

      setReady(true);
    }

    checkAccess();
  }, [onRoleChange, pathname, router]);

  if (!ready) {
    return (
      <div className="grid min-h-screen place-items-center bg-paper text-ink dark:bg-[#090b10] dark:text-white">
        <div className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold shadow-soft backdrop-blur-xl">Checking access...</div>
      </div>
    );
  }

  return <>{children}</>;
}
