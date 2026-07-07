import { Star, UserPlus } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const coaches = ["Fitness Coach", "Communication Coach", "Style Expert", "Grooming Expert", "Career Mentor"];

export default function MarketplacePage() {
  return (
    <AppShell title="EVOLVE Marketplace">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {coaches.map((coach, index) => <div key={coach} className="glass-panel rounded-3xl p-5"><Star className="text-electric" /><h2 className="mt-4 font-black">{coach}</h2><p className="mt-2 text-sm text-slate-500">{4.6 + index * 0.1} rating - {3 + index} yrs experience</p><p className="mt-2 font-black">Rs {499 + index * 250}/session</p><button className="primary-btn mt-4 w-full"><UserPlus size={18} /> Contact Request</button></div>)}
      </section>
      <section className="glass-panel mt-6 rounded-3xl p-5"><h2 className="text-xl font-black">Mentor Program</h2><p className="mt-2 text-sm text-slate-500">Top users can become mentors with minimum level, XP, and good reputation score.</p></section>
    </AppShell>
  );
}
