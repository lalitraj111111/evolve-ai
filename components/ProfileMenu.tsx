"use client";

import Link from "next/link";
import { ChevronDown, ShieldCheck, UserCircle } from "lucide-react";
import { useState } from "react";
import { LogoutButton } from "./LogoutButton";

export function ProfileMenu({ role }: { role: "user" | "admin" | null }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} className="secondary-btn px-3 py-3">
        <UserCircle size={18} /><ChevronDown size={14} />
      </button>
      {open ? (
        <div className="absolute right-0 top-14 z-40 w-64 rounded-3xl border border-white/10 bg-[#10131a] p-3 text-white shadow-soft">
          <Link href="/profile" className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold hover:bg-white/10"><UserCircle size={18} /> Profile</Link>
          {role === "admin" ? <Link href="/admin" className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold hover:bg-white/10"><ShieldCheck size={18} /> Admin Panel</Link> : null}
          <div className="mt-2"><LogoutButton /></div>
        </div>
      ) : null}
    </div>
  );
}
