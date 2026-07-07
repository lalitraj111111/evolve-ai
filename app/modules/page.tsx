import { Upload, Wand2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { modules } from "@/lib/data";

const features = ["Daily challenge", "AI feedback", "Photo upload", "Progress score", "Personal routine", "Expert tips"];

export default function ModulesPage() {
  return (
    <AppShell title="AI Modules">
      <div className="grid gap-5 md:grid-cols-2">
        {modules.slice(0, 7).map((module) => {
          const Icon = module.icon;
          return (
            <section key={module.title} className="glass-panel rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-coral text-white"><Icon /></span>
                <button className="secondary-btn px-3 py-2"><Upload size={17} /> Upload</button>
              </div>
              <h2 className="mt-5 text-2xl font-black">{module.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{module.description}</p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {features.map((feature) => <span key={feature} className="rounded-2xl bg-slate-100 px-3 py-2 text-sm font-bold dark:bg-white/10">{feature}</span>)}
              </div>
              <button className="primary-btn mt-5 w-full"><Wand2 size={18} /> Start AI coaching</button>
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}
