"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";
import { Logo } from "@/components/Logo";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState("");

  async function resetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "");
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase is not configured.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/login` });
    setMessage(error ? error.message : "Password reset email sent.");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-paper px-4 dark:bg-[#090b10]">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3"><BackButton /><Logo /></div>
        <h1 className="mt-8 text-3xl font-black">Reset password</h1>
        <form onSubmit={resetPassword} className="mt-6 space-y-4">
          <input className="field" name="email" placeholder="Email" type="email" required />
          {message ? <p className="rounded-2xl bg-electric/10 px-4 py-3 text-sm font-bold text-electric">{message}</p> : null}
          <button className="primary-btn w-full" type="submit">Send reset link</button>
          <Link href="/login" className="secondary-btn w-full">Back to login</Link>
        </form>
      </section>
    </main>
  );
}
