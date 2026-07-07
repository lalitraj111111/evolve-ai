import { Calendar, CheckCircle, Handshake, Megaphone, Pencil, XCircle } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const requests = ["FitFuel Labs", "Urban Groom Co", "Campus Wear Studio"];

export default function AdminCollaborationsPage() {
  return (
    <AppShell title="Collaborations">
      <section className="grid gap-5 xl:grid-cols-[1fr_0.45fr]">
        <div className="glass-panel rounded-3xl p-5">
          <div className="flex items-center gap-3"><Handshake className="text-electric" /><h2 className="text-xl font-black">Collaboration requests</h2></div>
          <div className="mt-5 space-y-3">
            {requests.map((name) => <div key={name} className="rounded-2xl bg-white p-4 dark:bg-white/10"><p className="font-black">{name}</p><p className="text-sm text-slate-500">Brand promotion - Social Media feed placement</p><div className="mt-3 flex flex-wrap gap-2"><button className="secondary-btn px-3 py-2"><CheckCircle size={17} /> Approve</button><button className="secondary-btn px-3 py-2"><XCircle size={17} /> Reject</button><button className="secondary-btn px-3 py-2"><Pencil size={17} /> Notes</button></div></div>)}
          </div>
        </div>
        <aside className="glass-panel rounded-3xl p-5">
          <Megaphone className="text-electric" />
          <h2 className="mt-3 text-xl font-black">Sponsored campaign</h2>
          <input className="field mt-4" placeholder="Campaign name" />
          <input className="field mt-3" placeholder="Start date" />
          <input className="field mt-3" placeholder="End date" />
          <select className="field mt-3"><option>Social Media feed</option><option>Dashboard</option><option>Challenge page</option><option>Landing page</option></select>
          <button className="primary-btn mt-4 w-full"><Calendar size={18} /> Create campaign</button>
        </aside>
      </section>
    </AppShell>
  );
}
