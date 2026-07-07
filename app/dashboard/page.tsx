import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, BrainCircuit, CreditCard, HeartHandshake, IdCard, Search, Settings, ShieldCheck, Target, TrendingUp, Trophy, UserCircle, Users, Flame, Medal } from "lucide-react";
import { AdBanner } from "@/components/ads/AdBanner";
import { AppShell } from "@/components/AppShell";
import { badges, heartChallenge, leaderboard, user } from "@/lib/data";

const shortcuts = [
  { href: "/ai-coach", title: "AI Coach", description: "Relationship, social confidence, style and habit coaching.", progress: 0, icon: BrainCircuit },
  { href: "/social-media", title: "Social Media", description: "Growth Feed, daily updates, achievements and supporters.", progress: 0, icon: Users },
  { href: "/challenges", title: "Challenges", description: "Daily missions, XP rewards and monthly competitions.", progress: 0, icon: Trophy },
  { href: "/progress", title: "Progress", description: "Glow-Up score, transformation calendar and Hall of Fame rank.", progress: 0, icon: TrendingUp },
  { href: "/profile", title: "Profile", description: "VIP level, creator rank, referral code and private details.", progress: 0, icon: UserCircle },
  { href: "/profile", title: "Membership Card", description: "Verified card with member ID, points and downloads.", progress: 0, icon: IdCard },
  { href: "/pricing", title: "Pricing", description: "Upgrade for advanced AI, premium tracking and ad-free app.", progress: 0, icon: CreditCard },
  { href: "/settings", title: "Settings", description: "Privacy, language, referrals and account controls.", progress: 0, icon: Settings }
];

const vipLevels = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Legend"];

export default function DashboardPage() {
  const heartProgress = Math.round((heartChallenge.completedDays / heartChallenge.totalDays) * 100);

  return (
    <AppShell title="Dashboard" action={<Link href="/notifications" className="secondary-btn px-3 py-3"><Bell size={18} /></Link>}>
      <section className="mb-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#10131a] p-4 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-electric" />
          <LogoText />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 lg:max-w-xl">
          <Search className="shrink-0 text-electric" size={20} />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Search missions, creators, challenges..." />
        </div>
        <Link href="/profile" className="secondary-btn px-3 py-3"><UserCircle size={18} /></Link>
      </section>

      <AdBanner placement="Dashboard top banner" />

      <section className="mt-6">
        <h2 className="text-2xl font-black">Quick shortcuts</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {shortcuts.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={item.title} className="glass-panel rounded-3xl p-5 transition hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-[#7c3aed] text-white"><Icon size={22} /></span>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-electric to-[#7c3aed]" style={{ width: `${item.progress}%` }} /></div>
                <span className="primary-btn mt-4 w-full py-2">Open</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.42fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-electric via-[#7c3aed] to-[#11131a] p-6 text-white shadow-soft">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-white/70">Welcome back, {user.name.split(" ")[0]}.</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight lg:text-5xl">Start your first improvement mission today.</h1>
              <p className="mt-4 max-w-2xl text-white/75">Your analytics are fresh. Complete tasks to build score, streak, XP, and VIP progress.</p>
            </div>
            <div className="grid h-44 w-44 place-items-center rounded-full bg-white/15 p-2 backdrop-blur">
              <div className="grid h-full w-full place-items-center rounded-full border-8 border-white/40 bg-[#10131a]/80">
                <div className="text-center"><p className="text-5xl font-black">{user.score}</p><p className="text-xs font-bold text-white/70">Glow-Up Score</p></div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <HeroStat icon={<Medal />} label="Current Level" value={user.level} />
            <HeroStat icon={<Trophy />} label="Today's XP" value="+0" />
            <HeroStat icon={<Flame />} label="Current Streak" value={`${user.streak} days`} />
            <HeroStat icon={<HeartHandshake />} label="75 Hard" value={`${heartProgress}%`} />
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Dopamine progress rings</h2>
            <div className="mt-5 grid gap-4">
              <Ring label="Daily Progress" value={0} />
              <Ring label="Weekly Progress" value={0} />
              <Ring label="75 Hard Days Challenge" value={heartProgress} />
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Motivation engine</h2>
            <p className="mt-3 rounded-2xl bg-electric/10 p-4 font-bold text-electric">Complete your first mission to unlock your first insight.</p>
            <p className="mt-3 rounded-2xl bg-white p-4 font-bold dark:bg-white/10">Start at Bronze and build toward Silver with consistent actions.</p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[0.8fr_0.55fr_0.55fr]">
        <Panel title="Daily Missions">
          {["Complete Challenge", "Upload Proof", "Post Progress Update"].map((task) => <Mission key={task} title={task} done={false} />)}
          <div className="mt-4 h-3 rounded-full bg-white/10"><div className="h-full w-0 rounded-full bg-gradient-to-r from-electric to-[#7c3aed]" /></div>
        </Panel>
        <Panel title="Streak Psychology">
          <Metric icon={<Flame />} label="Current Streak" value={`${user.streak} days`} />
          <Metric icon={<Trophy />} label="Best Streak" value="0 days" />
          <p className="mt-3 rounded-2xl bg-coral/10 p-3 text-sm font-bold text-coral">Complete day 1 to begin your streak.</p>
        </Panel>
        <Panel title="Social Proof">
          <Metric icon={<Users />} label="Members online now" value="0" />
          <Metric icon={<Target />} label="Challenges completed today" value="0" />
        </Panel>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.48fr]">
        <Panel title="Leaderboard">
          <div className="space-y-3">
            {leaderboard.map((person) => <div key={person.handle} className="flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">#{person.rank} {person.name}</span><span>{person.points} XP</span></div>)}
          </div>
          <p className="mt-3 text-sm text-slate-500">Nearby rank will appear after you earn your first points.</p>
        </Panel>
        <Panel title="Transformation">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid aspect-[4/5] place-items-center rounded-3xl bg-white/10">Before</div>
            <div className="grid aspect-[4/5] place-items-center rounded-3xl bg-electric/20">Current</div>
          </div>
          <p className="mt-3 font-bold">Progress: 0%</p>
        </Panel>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[0.55fr_1fr]">
        <Panel title="VIP Level System">
          <div className="grid grid-cols-2 gap-2">
            {vipLevels.map((level) => <div key={level} className={`rounded-2xl p-3 text-center text-sm font-black ${level === user.level ? "bg-electric text-white" : "bg-white dark:bg-white/10"}`}>{level}</div>)}
          </div>
        </Panel>
        <Panel title="Referral System">
          <p className="font-bold">Referral Code: EVOLVE-LALITRAJ100</p>
          <p className="mt-2 text-sm text-slate-500">1 friend invite = 100 points. 10 friends unlocks Premium Badge.</p>
          <div className="mt-4 flex flex-wrap gap-2">{badges.slice(0, 4).map((badge) => { const Icon = badge.icon; return <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-2 text-xs font-bold text-electric"><Icon size={15} /> {badge.label}</span>; })}</div>
        </Panel>
      </section>
    </AppShell>
  );
}

function LogoText() {
  return <div><p className="text-xs font-black uppercase tracking-[0.24em] text-electric">EVOLVE AI</p><p className="text-lg font-black">Home</p></div>;
}

function HeroStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">{icon}<p className="mt-2 text-sm text-white/70">{label}</p><p className="text-2xl font-black">{value}</p></div>;
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return <section className="glass-panel rounded-3xl p-5"><h2 className="text-xl font-black">{title}</h2><div className="mt-4">{children}</div></section>;
}

function Mission({ title, done }: { title: string; done: boolean }) {
  return <div className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">{title}</span><span className={done ? "text-mint" : "text-slate-500"}>{done ? "Done" : "Pending"}</span></div>;
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="flex items-center gap-2 font-bold">{icon}{label}</span><span>{value}</span></div>;
}

function Ring({ label, value }: { label: string; value: number }) {
  return <div className="flex items-center gap-4"><div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-electric to-[#7c3aed] p-1"><div className="grid h-full w-full place-items-center rounded-full bg-[#10131a] text-lg font-black text-white">{value}%</div></div><p className="font-black">{label}</p></div>;
}
