import type { ReactNode } from "react";
import { BadgeCheck, CalendarDays, Camera, Crown, Flame, Medal, Target, TrendingUp, Trophy, UploadCloud } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { badges, heartChallenge, leaderboard, user } from "@/lib/data";

const analytics = [
  { label: "Confidence Growth", value: 82 },
  { label: "Fitness Progress", value: 74 },
  { label: "Communication Score", value: 78 },
  { label: "Style Score", value: 88 },
  { label: "Discipline Score", value: 81 }
];

const timeline = [
  ["Day 1", "Uploaded first challenge proof"],
  ["Day 7", "Earned streak badge"],
  ["Day 15", "Uploaded transformation photo"],
  ["Day 30", "Reached confidence level 5"]
];

export default function ProgressPage() {
  const heartProgress = Math.round((heartChallenge.completedDays / heartChallenge.totalDays) * 100);

  return (
    <AppShell title="Transformation Dashboard">
      <section className="mb-6 grid gap-4 lg:grid-cols-[0.35fr_1fr]">
        <div className="glass-panel rounded-3xl p-5">
          <img src={user.avatar} alt="" className="h-20 w-20 rounded-full object-cover ring-2 ring-electric" />
          <h2 className="mt-4 text-2xl font-black">{user.name}</h2>
          <p className="text-sm text-slate-500">{user.memberId} - {user.level} member</p>
          <p className="mt-3 text-sm font-bold text-electric">{user.totalPoints} total points</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-7">
          <Metric icon={<TrendingUp />} label="Daily Score" value={`${user.score}`} />
          <Metric icon={<TrendingUp />} label="Weekly Score" value={`${user.weeklyScore}`} />
          <Metric icon={<Trophy />} label="Total Points" value={`${user.totalPoints}`} />
          <Metric icon={<Flame />} label="Streak" value={`${user.streak}`} />
          <Metric icon={<Target />} label="75 Hard" value={`${heartProgress}%`} />
          <Metric icon={<Medal />} label="Level" value={user.level} />
          <Metric icon={<Crown />} label="Rank" value={user.rank} />
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.42fr]">
        <div className="space-y-5">
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Transformation photos</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Before Photo", "Current Photo", "Target Photo"].map((label, index) => (
                <div key={label} className="overflow-hidden rounded-3xl border border-white/10 bg-white dark:bg-white/5">
                  <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-electric/20 via-coral/20 to-mint/20"><Camera className="text-electric" size={34} /></div>
                  <div className="p-4"><p className="font-black">{label}</p><p className="text-sm text-slate-500">Upload date: Day {index * 15 + 1}</p><p className="text-sm text-slate-500">Progress: {index * 35 + 10}%</p></div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-electric/10 p-4 text-sm leading-6 text-slate-700 dark:text-slate-200">AI insight: posture is cleaner, face framing is stronger, and outfit contrast has improved. Next focus: shoulder mobility and clearer speech pacing.</div>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Glow-Up Score breakdown</h2>
            <div className="mt-5 space-y-4">
              {analytics.map((item) => <Bar key={item.label} label={item.label} value={item.value} />)}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-3"><CalendarDays className="text-electric" /><h2 className="text-xl font-black">Transformation Calendar</h2></div>
            <div className="mt-4 grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }, (_, index) => <div key={index} className={`rounded-xl p-2 text-center text-xs font-black ${index < 19 ? "bg-electric text-white" : "bg-white dark:bg-white/10"}`}>{index + 1}</div>)}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Transformation timeline</h2>
            <div className="mt-5 space-y-4">
              {timeline.map(([day, text]) => <div key={day} className="flex gap-4 rounded-2xl bg-white p-4 dark:bg-white/10"><span className="font-black text-electric">{day}</span><p className="font-semibold">{text}</p></div>)}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Progress rings</h2>
            <div className="mt-5 grid gap-4">
              <Ring label="Daily Goal" value={86} />
              <Ring label="Monthly Goal" value={68} />
              <Ring label="75 Hard Days Challenge" value={heartProgress} />
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Achievements</h2>
            {["First Challenge Completed", "7 Day Streak", "30 Day Streak", "75 Hard Days Finisher"].map((item, index) => <div key={item} className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 dark:bg-white/10">{index < 3 ? <BadgeCheck className="text-mint" /> : <Medal className="text-slate-500" />}<span className="font-bold">{item}</span></div>)}
            <div className="mt-4 flex flex-wrap gap-2">{badges.map((badge) => { const Icon = badge.icon; return <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-2 text-xs font-bold text-electric"><Icon size={15} /> {badge.label}</span>; })}</div>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Leaderboard</h2>
            <p className="mt-2 text-sm text-slate-500">Local Rank: #3 - Global Rank: {user.rank} - Friends Rank: #2 - Hall of Fame Rank: #18</p>
            {leaderboard.slice(0, 3).map((person) => <div key={person.handle} className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">#{person.rank} {person.name}</span><span>{person.points}</span></div>)}
            <div className="mt-4 h-3 rounded-full bg-white/10"><div className="h-full w-[62%] rounded-full bg-gradient-to-r from-electric to-[#7c3aed]" /></div>
            <p className="mt-2 text-sm font-bold">Level progress: Gold to Platinum</p>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Today</h2>
            <p className="mt-3 font-bold">Goal: upload one proof update and complete posture work.</p>
            <p className="mt-2 text-sm text-slate-500">Remaining tasks: 2 - Next reward: Gold discipline medal.</p>
            <p className="mt-4 rounded-2xl bg-coral/10 p-3 text-sm font-bold text-coral">Small daily proof compounds into visible identity.</p>
            <button className="primary-btn mt-4 w-full"><UploadCloud size={18} /> Upload progress</button>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="glass-panel rounded-3xl p-4 transition hover:-translate-y-1">{icon}<p className="mt-3 text-xs text-slate-500">{label}</p><p className="text-2xl font-black">{value}</p></div>;
}

function Bar({ label, value }: { label: string; value: number }) {
  return <div><div className="flex justify-between text-sm font-bold"><span>{label}</span><span>{value}%</span></div><div className="mt-2 h-3 rounded-full bg-slate-200 dark:bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-electric via-coral to-mint" style={{ width: `${value}%` }} /></div></div>;
}

function Ring({ label, value }: { label: string; value: number }) {
  return <div className="flex items-center gap-4"><div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-electric via-coral to-mint p-1"><div className="grid h-full w-full place-items-center rounded-full bg-white text-xl font-black text-ink dark:bg-[#10131a] dark:text-white">{value}%</div></div><div><p className="font-black">{label}</p><p className="text-sm text-slate-500">XP contributes to Bronze, Silver, Gold, Platinum, Diamond, and Legend levels.</p></div></div>;
}
