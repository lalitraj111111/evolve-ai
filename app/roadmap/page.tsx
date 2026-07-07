import { CalendarDays, CheckCircle, Target } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const phases = [
  ["Day 1-30 Foundation", "Build confidence basics, clean routine, posture, grooming, and daily check-ins."],
  ["Day 31-60 Growth", "Increase social proof, weekly goals, and mentor feedback."],
  ["Day 61-90 Transformation", "Lock identity, competition entries, advanced AI coaching, and progress showcase."]
];

export default function RoadmapPage() {
  return (
    <AppShell title="90-Day AI Roadmap">
      <section className="grid gap-5 lg:grid-cols-3">
        {phases.map(([title, text]) => <div key={title} className="glass-panel rounded-3xl p-5"><CalendarDays className="text-electric" /><h2 className="mt-4 text-xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p><div className="mt-4 space-y-2">{["Daily tasks", "Weekly goals", "Progress tracking"].map((item) => <p key={item} className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="text-mint" size={17} /> {item}</p>)}</div></div>)}
      </section>
      <section className="glass-panel mt-6 rounded-3xl p-5"><Target className="text-electric" /><h2 className="mt-3 text-xl font-black">Your 90-Day Transformation Journey</h2><div className="mt-4 h-3 rounded-full bg-white/10"><div className="h-full w-[31%] rounded-full bg-gradient-to-r from-electric to-[#7c3aed]" /></div></section>
    </AppShell>
  );
}
