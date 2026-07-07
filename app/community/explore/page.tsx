import type { ReactNode } from "react";
import { Compass, HeartHandshake, TrendingUp, UserPlus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/lib/data";
import { rankExplore } from "@/lib/algorithm/trending";

export default function DiscoveryHubPage() {
  const trending = rankExplore(posts);

  return (
    <AppShell title="Discovery Hub">
      <section className="grid gap-4 md:grid-cols-4">
        <ExploreStat icon={<TrendingUp />} label="High engagement" value="61K posts" />
        <ExploreStat icon={<UserPlus />} label="New creators" value="420 rising" />
        <ExploreStat icon={<HeartHandshake />} label="75 Hard proofs" value="0" />
      </section>
      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.4fr]">
        <div className="space-y-6">
          {trending.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
        <aside className="glass-panel h-fit rounded-3xl p-5">
          <div className="flex items-center gap-2"><Compass className="text-electric" /><h2 className="font-black">Discovery ranking</h2></div>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Trending mixes high engagement, new creators, same interest categories, 75 Hard proof posts, and style/fitness transformation content.</p>
        </aside>
      </section>
    </AppShell>
  );
}

function ExploreStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="glass-panel rounded-3xl p-5">{icon}<p className="mt-3 text-sm text-slate-500">{label}</p><p className="text-xl font-black">{value}</p></div>;
}
