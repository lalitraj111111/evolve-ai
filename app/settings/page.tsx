import { Bell, Lock, Share2, UserRound } from "lucide-react";
import { LogoutButton } from "@/components/LogoutButton";
import { AppShell } from "@/components/AppShell";
import { user } from "@/lib/data";

export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <section className="grid gap-5 lg:grid-cols-[0.4fr_1fr]">
        <div className="space-y-5">
          <div className="glass-panel rounded-3xl p-5 text-center">
            <img src={user.avatar} alt="" className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-electric" />
            <h2 className="mt-4 text-2xl font-black">{user.name}</h2>
            <p className="text-slate-500">{user.plan} member - {user.level}</p>
            <button className="secondary-btn mt-5 w-full"><Lock size={18} /> Private profile</button>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <h2 className="font-black">Referral system</h2>
            <p className="mt-2 text-sm text-slate-500">Referral Code: EVOLVE-LALITRAJ100</p>
            <p className="mt-2 text-sm text-slate-500">1 friend invite = 100 points. 10 friends = Premium Badge.</p>
            <button className="secondary-btn mt-4 w-full"><Share2 size={18} /> Share referral</button>
          </div>
          <LogoutButton />
        </div>
        <form className="glass-panel grid gap-4 rounded-3xl p-5 sm:grid-cols-2">
          {["Name", "Email", "Profile Theme", "Privacy Mode", "Notification Preference", "Creator Program", "Accountability Partner", "App Install Status"].map((field) => <input key={field} className="field" placeholder={field} />)}
          <button className="primary-btn sm:col-span-2"><UserRound size={18} /> Save settings</button>
          <button type="button" className="secondary-btn sm:col-span-2"><Bell size={18} /> Test notification</button>
        </form>
      </section>
    </AppShell>
  );
}
