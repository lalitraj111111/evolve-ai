import { Share2, Trophy } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const wins = ["Top Transformations", "Best Fitness Progress", "Best Confidence Growth", "Best Style Upgrade"];

export default function SuccessWallPage() {
  return (
    <AppShell title="Success Wall">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {wins.map((win) => <div key={win} className="glass-panel rounded-3xl p-5"><Trophy className="text-electric" /><h2 className="mt-4 font-black">{win}</h2><p className="mt-2 text-sm text-slate-500">Achievement sharing and ranking placeholder.</p><button className="secondary-btn mt-4"><Share2 size={18} /> Share</button></div>)}
      </section>
    </AppShell>
  );
}
