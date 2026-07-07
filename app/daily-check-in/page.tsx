import { Activity, Battery, Brain, Moon, Smile } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const checkIns = [
  ["Mood", "Good", Smile],
  ["Stress", "Medium", Brain],
  ["Energy", "High", Battery],
  ["Sleep", "7.5h", Moon],
  ["Confidence", "78/100", Activity]
];

export default function DailyCheckInPage() {
  return (
    <AppShell title="Daily Check-In">
      <section className="grid gap-4 md:grid-cols-5">
        {checkIns.map(([label, value, Icon]) => <div key={label as string} className="glass-panel rounded-3xl p-5"><Icon className="text-electric" /><p className="mt-3 text-sm text-slate-500">{label as string}</p><p className="text-2xl font-black">{value as string}</p></div>)}
      </section>
      <section className="glass-panel mt-6 rounded-3xl p-5"><h2 className="text-xl font-black">Weekly trends</h2><div className="mt-5 flex h-48 items-end gap-3">{[42, 55, 61, 72, 69, 80, 86].map((value, index) => <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-electric to-[#7c3aed]" style={{ height: `${value}%` }} />)}</div></section>
    </AppShell>
  );
}
