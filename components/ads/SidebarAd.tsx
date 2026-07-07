import { Megaphone } from "lucide-react";

export function SidebarAd() {
  return (
    <aside className="glass-panel rounded-3xl p-5">
      <Megaphone className="text-electric" size={22} />
      <h2 className="mt-3 font-black">Sidebar ad</h2>
      <p className="mt-2 text-sm text-slate-500">Admin-controlled collaboration placement.</p>
    </aside>
  );
}
