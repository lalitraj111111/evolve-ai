import type { ReactNode } from "react";
import Link from "next/link";
import {
  Bell,
  Bookmark,
  Compass,
  HeartHandshake,
  MessageCircle,
  PlusCircle,
  Search,
  Send,
  ShieldAlert,
  Sprout,
  Target,
  Trophy,
  UserPlus,
  Users
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { PostCard } from "@/components/PostCard";
import { heartChallenge, leaderboard, posts, stories } from "@/lib/data";
import { rankFeed } from "@/lib/algorithm/feedRanking";
import { trendingHashtags } from "@/lib/algorithm/trending";

const tabs = [
  { href: "/social-media", label: "Growth Feed", icon: Sprout },
  { href: "/community/explore", label: "Discovery Hub", icon: Compass },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/messages", label: "Messages", icon: MessageCircle }
];

export function SocialMediaHome() {
  const rankedPosts = rankFeed(posts);
  const hashtags = trendingHashtags(posts);

  return (
    <AppShell title="EVOLVE Social Media" action={<Link href="/community/create" className="primary-btn px-4 py-2"><PlusCircle size={18} /> Share Progress</Link>}>
      <div className="mb-5 grid gap-2 sm:grid-cols-5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return <Link key={tab.href} href={tab.href} className="secondary-btn px-3 py-2"><Icon size={18} /> {tab.label}</Link>;
        })}
      </div>

      <section className="mb-5 glass-panel rounded-3xl p-4">
        <h2 className="mb-3 flex items-center gap-2 font-black"><Target className="text-electric" size={18} /> Daily Updates</h2>
        <div className="flex gap-4 overflow-x-auto pb-1">
          {stories.map((story) => (
            <div key={story.user} className="w-20 shrink-0 text-center">
              <img src={story.avatar} alt="" className="mx-auto h-16 w-16 rounded-full object-cover ring-2 ring-electric" />
              <p className="mt-2 truncate text-xs font-bold">{story.user}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.42fr]">
        <div className="space-y-6">
          <div className="glass-panel flex items-center gap-3 rounded-3xl p-4">
            <Search className="text-electric" size={20} />
            <input className="w-full bg-transparent text-sm outline-none" placeholder="Search users, challenges, hashtags..." />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <SocialMetric icon={<Trophy />} label="Creator Rank" value="#42" />
            <SocialMetric icon={<HeartHandshake />} label="Engagement Score" value="91%" />
            <SocialMetric icon={<Sprout />} label="Support Value" value="High" />
          </div>
          {rankedPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>

        <aside className="space-y-4">
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2"><Users className="text-electric" size={20} /><h2 className="font-black">Supporters to add</h2></div>
            {rankedPosts.map((post) => (
              <div key={post.handle} className="mt-4 flex items-center gap-3">
                <img src={post.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                <div className="min-w-0 flex-1"><p className="truncate font-bold">{post.user}</p><p className="truncate text-xs text-slate-500">{post.handle}</p></div>
                <button className="rounded-full bg-electric/10 p-2 text-electric"><UserPlus size={18} /></button>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Discovery Hub tags</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {hashtags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-2 text-sm font-bold dark:bg-white/10">{tag}</span>)}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Growth Leaderboard</h2>
            <div className="mt-4 space-y-3">
              {leaderboard.slice(0, 3).map((person) => <div key={person.handle} className="flex items-center justify-between rounded-2xl bg-white p-3 dark:bg-white/10"><span className="font-bold">#{person.rank} {person.name}</span><span className="text-sm text-coral">{person.points}</span></div>)}
            </div>
            <p className="mt-3 text-sm text-slate-500">{heartChallenge.completedDays}/{heartChallenge.totalDays} days completed by you.</p>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex items-center gap-2"><ShieldAlert className="text-coral" size={20} /><h2 className="font-black">Safety tools</h2></div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-bold">
              <button className="secondary-btn px-3 py-2"><ShieldAlert size={17} /> Report</button>
              <button className="secondary-btn px-3 py-2"><Bookmark size={17} /> Save</button>
              <button className="secondary-btn px-3 py-2"><HeartHandshake size={17} /> Support</button>
              <button className="secondary-btn px-3 py-2"><Send size={17} /> Share</button>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function SocialMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="glass-panel rounded-3xl p-4">{icon}<p className="mt-2 text-sm text-slate-500">{label}</p><p className="text-xl font-black">{value}</p></div>;
}
