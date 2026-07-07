import Link from "next/link";
import { Bell, Bot, CreditCard, EyeOff, FileText, Flag, Globe2, IdCard, LayoutList, Megaphone, Plus, ShieldCheck, TrendingUp, Trash2, Trophy, Users, Zap } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { challenges, posts, stats } from "@/lib/data";
import { getFeedScore } from "@/lib/algorithm/feedRanking";
import { isReviewRequired } from "@/lib/algorithm/spamDetection";

const adminTools = [
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Posts", href: "/admin", icon: FileText },
  { label: "Reports", href: "/admin", icon: Flag },
  { label: "75 Hard Days Challenge", href: "/heart-challenge", icon: LayoutList },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Membership Cards", href: "/profile", icon: IdCard },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "App Settings", href: "/admin/settings", icon: ShieldCheck },
  { label: "Language Settings", href: "/admin/settings", icon: Globe2 },
  { label: "Ads", href: "/admin/ads", icon: Megaphone },
  { label: "Collaborations", href: "/admin/collaborations", icon: Users },
  { label: "VIP Levels", href: "/admin/settings", icon: Trophy },
  { label: "Points Rules", href: "/admin/settings", icon: TrendingUp },
  { label: "Referrals", href: "/admin/users", icon: Users },
  { label: "Monthly Competitions", href: "/challenges", icon: Trophy },
  { label: "Creator Program", href: "/social-media", icon: ShieldCheck },
  { label: "Hall of Fame", href: "/hall-of-fame", icon: Trophy },
  { label: "AI prompts", href: "/admin", icon: Bot }
];

export default function AdminPage() {
  return (
    <AppShell title="Admin Panel">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat) => <div key={stat.label} className="glass-panel rounded-3xl p-5"><p className="text-sm text-slate-500">{stat.label}</p><p className="mt-2 text-2xl font-black">{stat.value}</p></div>)}
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {adminTools.map((tool) => {
          const Icon = tool.icon;
          return <Link href={tool.href} key={tool.label} className="glass-panel flex items-center gap-3 rounded-3xl p-5 text-left font-black transition hover:-translate-y-1"><Icon className="text-electric" size={20} /> {tool.label}</Link>;
        })}
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          ["Ad revenue", "Rs 42,000"],
          ["Sponsored campaign revenue", "Rs 1.8L"],
          ["Active campaigns", "12"],
          ["Pending collaboration requests", "7"]
        ].map(([label, value]) => <div key={label} className="glass-panel rounded-3xl p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>)}
      </section>
      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.45fr]">
        <div className="glass-panel rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><ShieldCheck className="text-coral" /><h2 className="text-xl font-black">Post moderation and algorithm scores</h2></div>
            <button className="secondary-btn px-3 py-2"><Plus size={17} /> Add challenge</button>
          </div>
          <div className="mt-4 space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="rounded-2xl bg-white p-4 dark:bg-white/10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-black">{post.user} - {post.category}</p>
                    <p className="line-clamp-2 text-sm text-slate-500">{post.caption}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-electric/10 px-3 py-2 text-sm font-black text-electric">Score {getFeedScore(post)}</span>
                    {isReviewRequired(post) ? <span className="rounded-full bg-coral/10 px-3 py-2 text-sm font-black text-coral">Review</span> : null}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="secondary-btn px-3 py-2"><Zap size={17} /> Boost</button>
                  <button className="secondary-btn px-3 py-2"><EyeOff size={17} /> Hide</button>
                  <button className="secondary-btn px-3 py-2"><Trash2 size={17} /> Remove</button>
                  <button className="secondary-btn px-3 py-2"><Flag size={17} /> Reports {post.reports}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-5">
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-3"><TrendingUp className="text-electric" /><h2 className="text-xl font-black">Trending creators</h2></div>
            {posts.map((post) => <div key={post.handle} className="mt-3 flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">{post.user}</span><span>{post.creatorPoints} pts</span></div>)}
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Challenge queue</h2>
            {challenges.slice(0, 4).map((challenge) => <div key={challenge.title} className="mt-3 rounded-2xl bg-white p-3 dark:bg-white/10"><p className="font-bold">{challenge.title}</p><p className="text-sm text-slate-500">{challenge.category} - {challenge.difficulty}</p></div>)}
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
