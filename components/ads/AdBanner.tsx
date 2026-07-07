import { Megaphone } from "lucide-react";

export function AdBanner({ placement = "Dashboard" }: { placement?: string }) {
  return (
    <section className="rounded-3xl border border-electric/20 bg-gradient-to-r from-electric/15 via-[#7c3aed]/15 to-white/5 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-electric to-[#7c3aed] text-white"><Megaphone size={20} /></span>
        <div><p className="font-black">Sponsored placement preview</p><p className="text-sm text-slate-500 dark:text-slate-300">{placement} ad slot. Hidden for Premium users when enabled by admin.</p></div>
      </div>
    </section>
  );
}
