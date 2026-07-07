import { ShieldCheck } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" icon={<ShieldCheck size={28} />}>
      <p>EVOLVE AI collects account, profile, progress, challenge, social, payment, and support information needed to operate the app. Phone number and address are private and are not shown publicly.</p>
      <p>We use Supabase for authentication, database, and storage. Payment processing may use Razorpay. Ads and sponsored collaborations may be managed from the admin panel.</p>
      <p>Users can request account support, profile updates, and data deletion by contacting EVOLVE AI support.</p>
    </LegalPage>
  );
}
