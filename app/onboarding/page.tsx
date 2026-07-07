import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

const groups = [
  { title: "Are you male or female?", options: ["Male", "Female", "Prefer not to say"] },
  { title: "What is your age?", options: ["13-17", "18-24", "25-34", "35+"] },
  { title: "What do you want to improve?", options: ["Confidence", "Body", "Style", "Communication", "Discipline"] },
  { title: "Body goal", options: ["Fat loss", "Muscle gain", "Posture", "Fitness"] },
  { title: "Style goal", options: ["Casual", "College", "Office", "Party", "Premium"] },
  { title: "Hair goal", options: ["Modern", "Clean", "Professional", "Trendy"] },
  { title: "Confidence level", options: ["Low", "Medium", "High"] }
];

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-paper px-4 py-8 dark:bg-[#090b10]">
      <div className="mx-auto max-w-5xl">
        <Logo />
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-mint text-white"><Sparkles /></span>
            <div>
              <h1 className="text-3xl font-black">Build your personal AI improvement plan</h1>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Choose dummy answers now. Later this will generate a real plan using your profile and goals.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="font-black">{group.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.options.map((option, index) => (
                    <button key={option} className={`rounded-full border px-4 py-2 text-sm font-bold ${index === 0 ? "border-electric bg-electric text-white" : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"}`}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-gradient-to-r from-electric/15 via-coral/15 to-mint/15 p-5">
            <h3 className="font-black">Generated plan preview</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">30 days of confidence practice, posture workouts, clean casual outfits, grooming reminders, and community progress posts.</p>
          </div>
          <Link href="/dashboard" className="primary-btn mt-6">Generate plan <ArrowRight size={18} /></Link>
        </section>
      </div>
    </main>
  );
}
