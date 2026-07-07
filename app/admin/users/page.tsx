import { ShieldCheck, UserX } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { leaderboard } from "@/lib/data";

export default function AdminUsersPage() {
  return (
    <AppShell title="Users">
      <section className="glass-panel rounded-3xl p-5">
        <h2 className="text-xl font-black">User management</h2>
        <div className="mt-5 space-y-3">
          {leaderboard.map((person) => <div key={person.handle} className="flex flex-col gap-3 rounded-2xl bg-white p-4 dark:bg-white/10 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-black">{person.name}</p><p className="text-sm text-slate-500">{person.handle} - {person.points} points</p></div><div className="flex gap-2"><button className="secondary-btn px-3 py-2"><ShieldCheck size={17} /> Verify</button><button className="secondary-btn px-3 py-2"><UserX size={17} /> Block</button></div></div>)}
        </div>
      </section>
    </AppShell>
  );
}
