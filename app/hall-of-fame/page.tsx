import { Crown, Dumbbell, HeartHandshake, Sparkles, Trophy, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const winners = [
  { title: "Top Fitness User", name: "Kabir", icon: Dumbbell },
  { title: "Top Confidence User", name: "Meera", icon: HeartHandshake },
  { title: "Top Creator", name: "Anaya", icon: Sparkles },
  { title: "Top 75 Hard Champion", name: "Rohan", icon: Trophy },
  { title: "Top Referral User", name: "LalitRaj", icon: Users }
];

export default function HallOfFamePage() {
  return (
    <AppShell title="Hall of Fame">
      <section className="rounded-3xl bg-gradient-to-br from-electric via-[#7c3aed] to-[#11131a] p-6 text-white shadow-soft">
        <div className="flex items-center gap-3"><Crown size={32} /><h1 className="text-3xl font-black">EVOLVE AI Hall of Fame</h1></div>
        <p className="mt-3 text-white/75">Top members across transformation, confidence, creator value, referrals, and 75 Hard consistency.</p>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {winners.map((winner) => {
          const Icon = winner.icon;
          return <div key={winner.title} className="glass-panel rounded-3xl p-5 text-center"><Icon className="mx-auto text-electric" size={32} /><h2 className="mt-4 font-black">{winner.title}</h2><p className="mt-2 text-2xl font-black">{winner.name}</p></div>;
        })}
      </section>
    </AppShell>
  );
}
