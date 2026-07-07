import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Logo } from "@/components/Logo";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-paper px-4 text-ink dark:bg-[#090b10] dark:text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <Logo />
        <LanguageSelector />
      </header>
      <div className="grid min-h-[calc(100vh-96px)] place-items-center">
      <section className="w-full max-w-2xl text-center">
        <h1 className="mt-10 text-4xl font-black leading-tight sm:text-6xl">Upgrade your confidence, body, style, and personality with AI.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
          EVOLVE AI gives you daily coaching, challenges, progress tracking, and a mobile-first improvement system.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/login" className="primary-btn">
            Start Free <ArrowRight size={18} />
          </Link>
          <Link href="/login" className="secondary-btn">Login</Link>
        </div>
      </section>
      </div>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 pb-6">
        <Link href="/collaboration" className="secondary-btn"><Handshake size={18} /> Partner with EVOLVE AI</Link>
        <Link href="/privacy-policy" className="text-sm font-bold text-slate-500 hover:text-electric">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="text-sm font-bold text-slate-500 hover:text-electric">Terms</Link>
        <Link href="/refund-policy" className="text-sm font-bold text-slate-500 hover:text-electric">Refund Policy</Link>
        <Link href="/contact-us" className="text-sm font-bold text-slate-500 hover:text-electric">Contact</Link>
        <Link href="/about" className="text-sm font-bold text-slate-500 hover:text-electric">About</Link>
      </footer>
    </main>
  );
}
