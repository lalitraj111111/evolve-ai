import type { ReactNode } from "react";
import { CheckCircle, Crown, Flame, HeartHandshake, Medal, Share2, Trophy, UploadCloud } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { heartChallenge, leaderboard } from "@/lib/data";

export default function HeartChallengePage() {
  const progress = Math.round((heartChallenge.completedDays / heartChallenge.totalDays) * 100);

  return (
    <AppShell title="75 Hard Days Challenge">
      <section className="rounded-3xl bg-gradient-to-br from-coral via-electric to-mint p-6 text-white shadow-soft">
        <div className="flex items-center gap-3"><HeartHandshake size={30} /><h2 className="text-3xl font-black">{heartChallenge.name}</h2></div>
        <p className="mt-3 max-w-3xl text-white/85">Complete one daily self-improvement task for 75 days. Add proof to earn extra points and build a transformation record.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <Stat icon={<CheckCircle size={20} />} label="Completed" value={`${heartChallenge.completedDays}/${heartChallenge.totalDays}`} />
          <Stat icon={<Trophy size={20} />} label="Total points" value={`${heartChallenge.totalPoints}`} />
          <Stat icon={<Flame size={20} />} label="Streak" value={`${heartChallenge.streak} days`} />
          <Stat icon={<Medal size={20} />} label="Progress" value={`${progress}%`} />
        </div>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.38fr]">
        <div className="glass-panel rounded-3xl p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-black">Day 1 to Day 75 tracker</h2>
            <button className="primary-btn px-4 py-2"><Share2 size={18} /> Share achievement</button>
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10 lg:grid-cols-[repeat(15,minmax(0,1fr))]">
            {heartChallenge.days.map((day) => (
              <div key={day.day} className={`rounded-2xl p-3 text-center text-sm font-black ${day.completed ? "bg-electric text-white" : "bg-white text-slate-500 dark:bg-white/10"}`}>
                {day.day}
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Point rules</h2>
            {["+10 daily completion", "+20 proof upload", "+50 every 7-day streak", "+1000 full completion"].map((rule) => <p key={rule} className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold dark:bg-white/10">{rule}</p>)}
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2"><Crown className="text-coral" size={20} /><h2 className="font-black">Leaderboard</h2></div>
            {leaderboard.map((person) => <div key={person.handle} className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">#{person.rank} {person.name}</span><span>{person.points}</span></div>)}
          </div>
          <button className="secondary-btn w-full"><UploadCloud size={18} /> Upload proof</button>
        </aside>
      </section>
    </AppShell>
  );
}

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">{icon}<p className="mt-2 text-sm text-white/75">{label}</p><p className="text-2xl font-black">{value}</p></div>;
}
