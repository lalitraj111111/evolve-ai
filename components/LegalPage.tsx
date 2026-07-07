import Link from "next/link";
import type { ReactNode } from "react";
import { BackButton } from "./BackButton";
import { LanguageSelector } from "./LanguageSelector";
import { Logo } from "./Logo";

export function LegalPage({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-paper px-4 py-5 text-ink dark:bg-[#090b10] dark:text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3"><BackButton /><Logo /></div>
        <LanguageSelector />
      </header>
      <section className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3 text-electric">{icon}<h1 className="text-3xl font-black text-ink dark:text-white">{title}</h1></div>
        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{children}</div>
        <Link href="/" className="secondary-btn mt-6">Back to EVOLVE AI</Link>
      </section>
    </main>
  );
}
