import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, Bot, CheckCircle, Crown, Flame, HeartHandshake, Trophy, UploadCloud, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { challenges, heartChallenge, leaderboard, pointRules, user } from "@/lib/data";

export default function ChallengesPage() {
  return (
    <AppShell title="Challenges">
      <section className="mb-6 rounded-3xl bg-gradient-to-br from-electric via-coral to-mint p-6 text-white shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3"><HeartHandshake size={30} /><h2 className="text-3xl font-black">{heartChallenge.name}</h2></div>
            <p className="mt-3 max-w-2xl text-white/85">Complete one self-improvement task daily for 75 days. Challenge proof earns extra points.</p>
          </div>
          <Link href="/heart-challenge" className="secondary-btn bg-white text-ink"><Trophy size={18} /> Open tracker</Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <HeroStat icon={<CheckCircle />} label="Completed days" value={`${heartChallenge.completedDays}/75`} />
          <HeroStat icon={<Trophy />} label="Total points" value={`${user.totalPoints}`} />
          <HeroStat icon={<Flame />} label="Current streak" value={`${user.streak} days`} />
          <HeroStat icon={<Crown />} label="Rank" value={user.rank} />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.38fr]">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {["Confidence", "Fitness", "Grooming", "Style", "Communication", "Discipline"].map((tag) => <button key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm dark:bg-white/10">#{tag}</button>)}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <article key={challenge.title} className="glass-panel rounded-3xl p-5 transition hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-coral text-white"><Icon size={22} /></span>
                    <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-black text-electric">{challenge.category}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-black">{challenge.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{challenge.description}</p>
                  <p className="mt-4 text-sm font-bold">Difficulty: {challenge.difficulty} - +{challenge.points} points</p>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button className="primary-btn px-3 py-2"><CheckCircle size={18} /> Complete</button>
                    <button className="secondary-btn px-3 py-2"><UploadCloud size={18} /> Proof</button>
                    <button className="secondary-btn px-3 py-2"><Bot size={18} /> AI</button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Monthly competitions</h2>
            {["Best Transformation", "Best Fitness Progress", "Best Style Upgrade"].map((item) => <div key={item} className="mt-3 rounded-2xl bg-white p-3 font-bold dark:bg-white/10"><Trophy className="mb-2 text-electric" size={18} />{item}</div>)}
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2"><Users className="text-electric" size={20} /><h2 className="font-black">Accountability Partner</h2></div>
            <p className="mt-3 text-sm text-slate-500">Compare streak: You 0 days - Partner 0 days.</p>
            <button className="secondary-btn mt-4 w-full"><Bell size={18} /> Send reminder</button>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Global points system</h2>
            {pointRules.map((rule) => <div key={rule.label} className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">{rule.label}</span><span className="text-coral">{rule.value}</span></div>)}
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2"><Crown className="text-coral" size={20} /><h2 className="font-black">Leaderboard</h2></div>
            {leaderboard.map((person) => <div key={person.handle} className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">#{person.rank} {person.name}</span><span>{person.points}</span></div>)}
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function HeroStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">{icon}<p className="mt-2 text-sm text-white/75">{label}</p><p className="text-2xl font-black">{value}</p></div>;
}
