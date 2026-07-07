import { BrainCircuit, Handshake, HeartHandshake, MessageCircle, Network, Send, Sparkles, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const prompts = ["How can I improve my confidence?", "What should I wear?", "Which hairstyle suits me?", "How can I improve my body?", "Give me today's challenge.", "Make my 30-day improvement plan."];
const socialModules = [
  { title: "Conversation Practice", icon: MessageCircle },
  { title: "Dating Confidence", icon: HeartHandshake },
  { title: "Social Confidence", icon: Users },
  { title: "Networking Skills", icon: Network },
  { title: "Respectful communication guidance", icon: Handshake }
];

export default function AiCoachPage() {
  return (
    <AppShell title="AI Personal Coach">
      <section className="mx-auto max-w-4xl glass-panel rounded-3xl p-5">
        <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-[#7c3aed] text-white"><BrainCircuit /></span>
          <div>
            <h2 className="text-xl font-black">Coach trained on your profile</h2>
            <p className="text-sm text-slate-500">Dummy responses now. API integration comes after the frontend is ready.</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="rounded-3xl bg-white p-4 dark:bg-white/10">Based on your goals, start today with one confidence task, one posture workout, and one clean outfit photo.</div>
          <div className="ml-auto max-w-xl rounded-3xl bg-electric p-4 text-white">Make my 30-day improvement plan.</div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {prompts.map((prompt) => <button key={prompt} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold dark:bg-white/10"><Sparkles size={14} className="mr-1 inline" />{prompt}</button>)}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {socialModules.map((module) => { const Icon = module.icon; return <button key={module.title} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-left font-bold dark:bg-white/10"><Icon className="text-electric" size={18} /> {module.title}</button>; })}
        </div>
        <div className="mt-5 flex gap-2">
          <input className="field" placeholder="Ask EVOLVE AI..." />
          <button className="primary-btn px-4"><Send size={18} /></button>
        </div>
      </section>
    </AppShell>
  );
}
