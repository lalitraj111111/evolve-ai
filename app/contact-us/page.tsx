import { Mail, Send } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function ContactUsPage() {
  return (
    <LegalPage title="Contact Us" icon={<Mail size={28} />}>
      <p>For support, partnerships, payments, privacy, or moderation help, contact the EVOLVE AI team.</p>
      <form className="mt-6 grid gap-4">
        <input className="field" placeholder="Name" />
        <input className="field" placeholder="Email" />
        <textarea className="field min-h-32" placeholder="Message" />
        <button className="primary-btn" type="button"><Send size={18} /> Send message</button>
      </form>
    </LegalPage>
  );
}
