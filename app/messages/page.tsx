import { Send } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export default function MessagesPage() {
  return (
    <AppShell title="Messages">
      <div className="grid min-h-[70vh] gap-4 lg:grid-cols-[0.4fr_1fr]">
        <aside className="glass-panel rounded-3xl p-4">
          {["Meera", "Kabir", "Anaya"].map((name) => <div key={name} className="rounded-2xl p-3 font-bold hover:bg-white/60 dark:hover:bg-white/10">{name}</div>)}
        </aside>
        <section className="glass-panel flex rounded-3xl p-4">
          <div className="flex w-full flex-col justify-between">
            <div className="space-y-3">
              <p className="max-w-md rounded-2xl bg-white p-3 dark:bg-white/10">How did you improve your outfit photos?</p>
              <p className="ml-auto max-w-md rounded-2xl bg-electric p-3 text-white">I used the AI style checklist before posting.</p>
            </div>
            <div className="mt-4 flex gap-2">
              <input className="field" placeholder="Message..." />
              <button className="primary-btn px-4"><Send size={18} /></button>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
