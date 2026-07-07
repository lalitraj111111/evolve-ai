import { Sparkles } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function AboutPage() {
  return (
    <LegalPage title="About EVOLVE AI" icon={<Sparkles size={28} />}>
      <p>EVOLVE AI is a premium self-improvement social platform for confidence, fitness, grooming, style, communication, discipline, habits, and transformation tracking.</p>
      <p>The product combines AI coaching, daily missions, 75 Hard Days Challenge, membership cards, VIP levels, marketplace discovery, and admin moderation inside one installable web app.</p>
    </LegalPage>
  );
}
