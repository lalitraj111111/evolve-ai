import { FileText } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" icon={<FileText size={28} />}>
      <p>EVOLVE AI provides self-improvement tools, AI coaching UI, challenges, progress tracking, and social features. Users must use the app respectfully and must not upload harmful, misleading, or illegal content.</p>
      <p>AI guidance is informational and does not replace professional medical, legal, fitness, or mental health advice.</p>
      <p>Admin may moderate posts, reports, accounts, and membership verification to protect the platform.</p>
    </LegalPage>
  );
}
