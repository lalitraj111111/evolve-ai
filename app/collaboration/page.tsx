import { Handshake, UploadCloud } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Logo } from "@/components/Logo";

const types = ["Sponsorship", "Brand Promotion", "Fitness Product", "Grooming Product", "Clothing / Fashion", "Education / Career", "Event Partnership"];

export default function CollaborationPage() {
  return (
    <main className="min-h-screen bg-paper px-4 py-5 dark:bg-[#090b10]">
      <header className="mx-auto flex max-w-6xl items-center justify-between"><div className="flex items-center gap-3"><BackButton /><Logo /></div><LanguageSelector /></header>
      <section className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3"><Handshake className="text-electric" size={28} /><div><h1 className="text-3xl font-black">Partner with EVOLVE AI</h1><p className="text-sm text-slate-500">Submit a brand collaboration request.</p></div></div>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          {["Company Name", "Contact Person Name", "Email", "Phone", "Brand Website", "Budget Range"].map((field) => <input key={field} className="field" placeholder={field} />)}
          <select className="field sm:col-span-2">{types.map((type) => <option key={type}>{type}</option>)}</select>
          <textarea className="field min-h-32 sm:col-span-2" placeholder="Message" />
          <button type="button" className="secondary-btn sm:col-span-2"><UploadCloud size={18} /> Upload Brand Logo</button>
          <button type="button" className="primary-btn sm:col-span-2">Submit collaboration request</button>
        </form>
      </section>
    </main>
  );
}
