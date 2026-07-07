import { CheckCircle2, CreditCard } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { plans } from "@/lib/data";

export default function PricingPage() {
  return (
    <AppShell title="Pricing">
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-electric/15 via-coral/15 to-mint/15 p-5">
        <div className="flex items-center gap-3">
          <CreditCard className="text-electric" />
          <p className="font-bold">Razorpay checkout placeholder. Real payment and plan updates will be connected after frontend approval.</p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <article key={plan.name} className="glass-panel rounded-3xl p-6">
              <Icon className="text-coral" size={32} />
              <h2 className="mt-5 text-2xl font-black">{plan.name} Plan</h2>
              <p className="mt-3 text-4xl font-black">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><CheckCircle2 className="shrink-0 text-mint" size={18} /> {feature}</li>)}
              </ul>
              <button className="primary-btn mt-6 w-full">Subscribe</button>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
