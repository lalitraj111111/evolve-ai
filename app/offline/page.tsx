import Link from "next/link";
import { WifiOff } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function OfflinePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-4 text-ink dark:bg-[#090b10] dark:text-white">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft dark:border-white/10 dark:bg-white/5">
        <div className="flex justify-center"><Logo /></div>
        <WifiOff className="mx-auto mt-8 text-electric" size={42} />
        <h1 className="mt-5 text-3xl font-black">You are offline</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">EVOLVE AI is installed-ready and will reconnect when your network is back.</p>
        <Link href="/dashboard" className="primary-btn mt-6 w-full">Return to app</Link>
      </section>
    </main>
  );
}
