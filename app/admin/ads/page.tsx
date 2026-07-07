import { Eye, Megaphone, ToggleLeft } from "lucide-react";
import { AdBanner } from "@/components/ads/AdBanner";
import { FeedAdCard } from "@/components/ads/FeedAdCard";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { AppShell } from "@/components/AppShell";

export default function AdminAdsPage() {
  return (
    <AppShell title="Ads">
      <section className="grid gap-5 xl:grid-cols-[0.55fr_1fr]">
        <form className="glass-panel space-y-4 rounded-3xl p-5">
          <div className="flex items-center gap-3"><Megaphone className="text-electric" /><h2 className="text-xl font-black">Google AdSense Settings</h2></div>
          <label className="flex items-center justify-between rounded-2xl bg-white p-3 font-bold dark:bg-white/10">Enable ads <ToggleLeft className="text-electric" /></label>
          <input className="field" placeholder="Publisher ID" />
          <input className="field" placeholder="Banner slot ID" />
          <input className="field" placeholder="Feed slot ID" />
          <select className="field"><option>After every 5 posts</option><option>After every 10 posts</option></select>
          <label className="flex items-center justify-between rounded-2xl bg-white p-3 font-bold dark:bg-white/10">Hide ads for Premium users <ToggleLeft className="text-electric" /></label>
          <button className="primary-btn w-full" type="button">Save ad settings</button>
        </form>
        <div className="space-y-4">
          <AdBanner placement="Landing page banner" />
          <FeedAdCard />
          <SidebarAd />
          <div className="glass-panel rounded-3xl p-5"><Eye className="text-electric" /><h2 className="mt-3 font-black">Placements</h2><p className="mt-2 text-sm text-slate-500">Landing, Dashboard, Growth Feed, Progress, Sidebar.</p></div>
        </div>
      </section>
    </AppShell>
  );
}
