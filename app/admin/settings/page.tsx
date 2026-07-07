import { Globe2, Settings, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export default function AdminSettingsPage() {
  return (
    <AppShell title="App Settings">
      <section className="grid gap-5 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-5"><Settings className="text-electric" /><h2 className="mt-3 text-xl font-black">App settings</h2><input className="field mt-4" placeholder="App name" /><input className="field mt-3" placeholder="Support email" /><button className="primary-btn mt-4 w-full">Save settings</button></div>
        <div className="glass-panel rounded-3xl p-5"><Globe2 className="text-electric" /><h2 className="mt-3 text-xl font-black">Language content</h2><select className="field mt-4"><option>English</option><option>Hindi</option></select><textarea className="field mt-3 min-h-32" placeholder="Editable app copy" /><button className="primary-btn mt-4 w-full"><ShieldCheck size={18} /> Publish language update</button></div>
      </section>
    </AppShell>
  );
}
