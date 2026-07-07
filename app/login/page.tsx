"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InstallAppButton } from "@/components/InstallAppButton";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Logo } from "@/components/Logo";
import { BackButton } from "@/components/BackButton";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const logoutMessage = window.localStorage.getItem("evolve_logout_message");
    if (logoutMessage) {
      setMessage(logoutMessage);
      window.localStorage.removeItem("evolve_logout_message");
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      if (data.isAdmin) {
        window.localStorage.setItem("evolve_session", "active");
        window.localStorage.setItem("evolve_role", "admin");
        router.replace("/admin");
        return;
      }

      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        window.localStorage.setItem("evolve_session", "active");
        window.localStorage.setItem("evolve_role", "user");
        router.replace("/dashboard");
        return;
      }

      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        throw authError;
      }

      window.localStorage.setItem("evolve_session", "active");
      window.localStorage.setItem("evolve_role", "user");
      router.replace("/dashboard");
    } catch {
      setError("Unable to login. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-paper px-4 dark:bg-[#090b10]">
      <header className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <div className="flex items-center gap-3"><BackButton /><Logo /></div>
        <LanguageSelector />
      </header>
      <div className="grid min-h-[calc(100vh-96px)] place-items-center">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
        <Logo />
        <h1 className="mt-8 text-3xl font-black">Login</h1>
        {message ? <p className="mt-4 rounded-2xl bg-mint/10 px-4 py-3 text-sm font-bold text-mint">{message}</p> : null}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input className="field" placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="field" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {error ? <p className="rounded-2xl bg-coral/10 px-4 py-3 text-sm font-bold text-coral">{error}</p> : null}
          <Link href="/forgot-password" className="block text-sm font-bold text-electric">Forgot password?</Link>
          <button type="submit" className="primary-btn w-full" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
        <div className="mt-4"><InstallAppButton label="Add to Home Screen" /></div>
        <p className="mt-5 text-center text-sm text-slate-500">New here? <Link className="font-bold text-electric" href="/signup">Create account</Link></p>
      </section>
      </div>
    </main>
  );
}
