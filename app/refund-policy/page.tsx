import { CreditCard } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" icon={<CreditCard size={28} />}>
      <p>Subscription and payment refunds depend on the plan, payment status, and applicable Razorpay records. Users should contact support with payment ID and account email.</p>
      <p>Approved refunds are processed through the original payment method where possible. Promotional, trial, or consumed digital services may be non-refundable unless required by law.</p>
    </LegalPage>
  );
}
