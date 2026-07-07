import { CreditCard } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export default function AdminPaymentsPage() {
  return (
    <AppShell title="Payments">
      <section className="grid gap-4 md:grid-cols-4">
        {["Paid users", "Revenue", "Pending", "Refund review"].map((label, index) => <div key={label} className="glass-panel rounded-3xl p-5"><CreditCard className="text-electric" /><p className="mt-3 text-sm text-slate-500">{label}</p><p className="text-2xl font-black">{index === 1 ? "Rs 8.7L" : 120 + index}</p></div>)}
      </section>
      <section className="glass-panel mt-6 rounded-3xl p-5"><CreditCard className="text-electric" /><h2 className="mt-3 text-xl font-black">Manage pricing plans</h2><p className="mt-2 text-sm text-slate-500">Free, Pro, Premium plan controls and payment status placeholders.</p></section>
    </AppShell>
  );
}
