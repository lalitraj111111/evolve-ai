import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export function ModuleCard({ title, description, progress, icon: Icon }: { title: string; description: string; progress: number; icon: LucideIcon }) {
  return (
    <article className="glass-panel rounded-3xl p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-mint text-white">
          <Icon size={22} />
        </span>
        <span className="text-sm font-black text-electric">{progress}%</span>
      </div>
      <h3 className="mt-5 text-lg font-black">{title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 h-2 rounded-full bg-slate-200 dark:bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-electric via-coral to-mint" style={{ width: `${progress}%` }} />
      </div>
      <Link href="/modules" className="primary-btn mt-5 w-full py-2.5">
        Start
      </Link>
    </article>
  );
}
