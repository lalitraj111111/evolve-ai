import type { ReactNode } from "react";
import { Bookmark, Calendar, Download, FileDown, IdCard, Mail, MapPin, Medal, Palette, Pencil, Phone, Share2, ShieldCheck, Trophy, User, UserCircle, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { badges, heartChallenge, posts, user } from "@/lib/data";

const tabs = ["Overview", "Posts", "Challenges", "Membership Card", "Settings"];

export default function ProfilePage() {
  return (
    <AppShell title="Profile">
      <section className="rounded-3xl bg-gradient-to-br from-electric via-coral to-mint p-6 text-white shadow-soft">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <img src={user.avatar} alt="" className="h-28 w-28 rounded-full object-cover ring-4 ring-white/40" />
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-black">{user.name}</h2>
            <p className="font-bold text-white/85">{user.username}</p>
            <p className="mt-3 max-w-2xl text-white/85">{user.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
              <span className="rounded-full bg-white/15 px-3 py-2">{user.level} member</span>
              <span className="rounded-full bg-white/15 px-3 py-2">{user.totalPoints} points</span>
              <span className="rounded-full bg-white/15 px-3 py-2">{user.streak} day streak</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="secondary-btn bg-white text-ink"><Pencil size={18} /> Edit Profile</button>
          </div>
        </div>
      </section>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => <button key={tab} className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm dark:bg-white/10">{tab}</button>)}
      </div>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.48fr]">
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <ProfileStat icon={<UserCircle />} label="Posts" value={`${user.postsCount}`} />
            <ProfileStat icon={<Users />} label="Supporters" value={`${user.followers}`} />
            <ProfileStat icon={<Users />} label="Network" value={`${user.following}`} />
            <ProfileStat icon={<Trophy />} label="Likes received" value={`${user.likesReceived}`} />
            <ProfileStat icon={<Bookmark />} label="Saved posts" value={`${user.savedPosts}`} />
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Private personal details</h2>
            <p className="mt-1 text-sm text-slate-500">Visible only to the profile owner and verified admin accounts.</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Detail icon={<User />} label="Full Name" value={user.name} />
              <Detail icon={<Mail />} label="Email" value={user.email} />
              <Detail icon={<Phone />} label="Phone Number" value={user.phone} />
              <Detail icon={<MapPin />} label="Address" value={user.address} />
              <Detail icon={<User />} label="Gender" value={user.gender} />
              <Detail icon={<Calendar />} label="Date of Birth" value={user.dateOfBirth} />
              <Detail icon={<Calendar />} label="Join Date" value={user.joinDate} />
              <Detail icon={<ShieldCheck />} label="Verification" value="Verified EVOLVE AI Member" />
              <Detail icon={<Trophy />} label="VIP Level" value="Bronze, Silver, Gold, Platinum, Diamond, Legend" />
              <Detail icon={<ShieldCheck />} label="Creator Rank" value="#0 Growth Creator" />
              <Detail icon={<Share2 />} label="Referral Code" value="EVOLVE-LALITRAJ100" />
              <Detail icon={<Palette />} label="Profile Theme" value="Electric Graphite" />
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Accountability Partner</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Add partner", "Compare streak", "Send reminder"].map((action) => <button key={action} className="secondary-btn">{action}</button>)}
            </div>
            <p className="mt-3 text-sm text-slate-500">Partner progress will appear after you add an accountability partner.</p>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Social profile</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {posts.slice(0, 2).map((post) => <img key={post.id} src={post.media} alt="" className="aspect-square rounded-3xl object-cover" />)}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#11131a] via-[#20233a] to-[#0f766e] p-5 text-white shadow-soft">
            <div className="flex items-center justify-between"><IdCard size={28} /><span className="text-xs font-black tracking-[0.24em]">EVOLVE AI</span></div>
            <div className="mt-6 flex items-center gap-4">
              <img src={user.avatar} alt="" className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/40" />
              <div><h2 className="text-2xl font-black">{user.name}</h2><p className="text-white/75">{user.memberId}</p></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <CardLine label="Level" value={user.level} />
              <CardLine label="Points" value={`${user.totalPoints}`} />
              <CardLine label="Join Date" value={user.joinDate} />
              <CardLine label="Badge" value="Verified" />
            </div>
            <div className="mt-6 grid h-24 w-24 place-items-center rounded-2xl bg-white text-xs font-black text-ink">QR</div>
            <p className="mt-4 flex items-center gap-2 font-black"><ShieldCheck size={18} /> Verified EVOLVE AI Member</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="secondary-btn bg-white text-ink"><Download size={18} /> PNG</button>
              <button className="secondary-btn bg-white text-ink"><FileDown size={18} /> PDF</button>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <h2 className="text-xl font-black">Progress summary</h2>
            <Detail icon={<Trophy />} label="Daily score" value={`${user.score}`} />
            <Detail icon={<Trophy />} label="Weekly score" value={`${user.weeklyScore}`} />
            <Detail icon={<Medal />} label="75 Hard progress" value={`${heartChallenge.completedDays}/${heartChallenge.totalDays}`} />
            <Detail icon={<Trophy />} label="Rank" value={user.rank} />
            <Detail icon={<Medal />} label="XP level" value={user.level} />
            <div className="mt-4 flex flex-wrap gap-2">{badges.slice(0, 4).map((badge) => { const Icon = badge.icon; return <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-2 text-xs font-bold text-electric"><Icon size={15} /> {badge.label}</span>; })}</div>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}

function ProfileStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="glass-panel rounded-3xl p-5">{icon}<p className="mt-3 text-sm text-slate-500">{label}</p><p className="text-2xl font-black">{value}</p></div>;
}

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 dark:bg-white/10"><span className="text-electric">{icon}</span><div><p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p><p className="font-bold">{value}</p></div></div>;
}

function CardLine({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-white/10 p-3"><p className="text-xs text-white/60">{label}</p><p className="font-black">{value}</p></div>;
}
