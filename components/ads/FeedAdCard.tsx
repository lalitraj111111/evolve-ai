import { ExternalLink, Megaphone } from "lucide-react";

export function FeedAdCard() {
  return (
    <article className="glass-panel rounded-3xl p-5">
      <div className="flex items-center gap-3"><Megaphone className="text-electric" size={20} /><span className="text-xs font-black uppercase tracking-[0.2em] text-electric">Sponsored</span></div>
      <h2 className="mt-4 text-xl font-black">Partner brand campaign</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Sponsored challenge or product placement managed from the EVOLVE AI admin panel.</p>
      <button className="secondary-btn mt-4"><ExternalLink size={18} /> Learn more</button>
    </article>
  );
}
