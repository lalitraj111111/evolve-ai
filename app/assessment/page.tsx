import Link from "next/link";
import { Brain, Dumbbell, MessageCircle, Shirt, Target, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/AppShell";

const assessments = [
  { title: "Confidence Assessment", score: 74, icon: Brain },
  { title: "Fitness Assessment", score: 68, icon: Dumbbell },
  { title: "Communication Assessment", score: 71, icon: MessageCircle },
  { title: "Style Assessment", score: 82, icon: Shirt },
  { title: "Discipline Assessment", score: 64, icon: Target }
];

export default function AssessmentPage() {
  return (
    <AppShell title="Onboarding Assessment">
      <section className="rounded-3xl bg-gradient-to-br from-electric via-[#7c3aed] to-[#11131a] p-6 text-white shadow-soft">
        <h1 className="text-3xl font-black">Your EVOLVE AI baseline</h1>
        <p className="mt-3 max-w-2xl text-white/75">These mock scores are ready to be stored in Supabase profiles and used for your 90-day roadmap.</p>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {assessments.map((item) => {
          const Icon = item.icon;
          return <div key={item.title} className="glass-panel rounded-3xl p-5"><Icon className="text-electric" size={24} /><h2 className="mt-4 font-black">{item.title}</h2><p className="mt-2 text-4xl font-black">{item.score}/100</p></div>;
        })}
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel title="Strengths" items={["Style awareness", "Daily consistency", "Willingness to share proof"]} />
        <Panel title="Weaknesses" items={["Public speaking", "Sleep routine", "Workout intensity"]} />
        <Panel title="Recommended Focus Areas" items={["Confidence drills", "Fitness base", "Discipline streak"]} />
      </section>
      <Link href="/dashboard" className="primary-btn mt-6">Finish assessment</Link>
    </AppShell>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return <div className="glass-panel rounded-3xl p-5"><h2 className="font-black">{title}</h2>{items.map((item) => <p key={item} className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold dark:bg-white/10">{item}</p>)}</div>;
}
