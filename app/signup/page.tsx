"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/BackButton";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Logo } from "@/components/Logo";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const AGE_GATE_VERSION = "2026-07-07";

function isAdult(dateOfBirth: string) {
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);
  if (Number.isNaN(birthDate.getTime())) {
    return false;
  }

  const today = new Date();
  const eighteenthBirthday = new Date(birthDate);
  eighteenthBirthday.setFullYear(birthDate.getFullYear() + 18);

  return eighteenthBirthday <= today;
}

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "");
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    const dateOfBirth = String(form.get("dateOfBirth") ?? "");
    const acceptsAgeGate = form.get("ageGate") === "on";
    const supabase = getSupabaseBrowserClient();

    if (!isAdult(dateOfBirth) || !acceptsAgeGate) {
      setError("EVOLVE AI is currently available only for users who confirm they are 18+.");
      return;
    }

    setLoading(true);

    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            date_of_birth: dateOfBirth,
            age_gate_confirmed: true,
            age_gate_version: AGE_GATE_VERSION
          }
        }
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        const { error: profileError } = await supabase.from("profiles").upsert({
          id: data.user.id,
          full_name: fullName,
          email,
          date_of_birth: dateOfBirth,
          age_verified_at: new Date().toISOString(),
          age_gate_version: AGE_GATE_VERSION
        });

        if (profileError) {
          setError(profileError.message);
          setLoading(false);
          return;
        }
      }
    }

    window.localStorage.setItem("evolve_session", "active");
    window.localStorage.setItem("evolve_role", "user");
    window.localStorage.setItem("evolve_age_gate", AGE_GATE_VERSION);
    router.replace("/assessment");
  }

  return (
    <main className="min-h-screen bg-paper px-4 py-5 dark:bg-[#090b10]">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3"><BackButton /><Logo /></div>
        <LanguageSelector />
      </header>
      <div className="grid min-h-[calc(100vh-80px)] place-items-center">
        <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
          <Logo />
          <h1 className="mt-8 text-3xl font-black">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Start your EVOLVE AI transformation with a clean private profile.</p>
          <form onSubmit={createAccount} className="mt-6 space-y-4">
            <input className="field" name="fullName" placeholder="Full Name" type="text" required />
            <input className="field" name="email" placeholder="Gmail / Email ID" type="email" required />
            <input className="field" name="password" placeholder="Password" type="password" required />
            <label className="block text-sm font-bold text-slate-600 dark:text-slate-300" htmlFor="dateOfBirth">
              Date of birth
            </label>
            <input className="field" id="dateOfBirth" name="dateOfBirth" type="date" required />
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <input className="mt-1 h-4 w-4 rounded border-slate-300 text-electric focus:ring-electric" name="ageGate" type="checkbox" required />
              <span>I confirm I am 18+ and agree to use EVOLVE AI responsibly.</span>
            </label>
            {error ? <p className="rounded-2xl bg-coral/10 px-4 py-3 text-sm font-bold text-coral">{error}</p> : null}
            <button type="submit" className="primary-btn w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"} <ArrowRight size={18} />
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-slate-500">Already have an account? <Link className="font-bold text-electric" href="/login">Login</Link></p>
        </section>
      </div>
    </main>
  );
}
