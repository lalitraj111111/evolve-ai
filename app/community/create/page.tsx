import { Bot, Image as ImageIcon, SquarePen, UploadCloud } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export default function CreatePostPage() {
  return (
    <AppShell title="Create Post">
      <section className="mx-auto max-w-2xl glass-panel rounded-3xl p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-coral text-white"><SquarePen size={22} /></span>
          <div><h2 className="text-xl font-black">Create Social Media post</h2><p className="text-sm text-slate-500">Share a photo, caption, or challenge proof update.</p></div>
        </div>
        <textarea className="field min-h-40" placeholder="Share your daily improvement journey..." />
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <button className="secondary-btn"><ImageIcon size={18} /> Photo Post</button>
          <button className="secondary-btn"><UploadCloud size={18} /> Challenge Proof</button>
          <button className="secondary-btn"><Bot size={18} /> AI caption</button>
        </div>
        <div className="mt-4 rounded-2xl bg-coral/10 p-4 text-sm font-bold text-coral"><UploadCloud className="mr-2 inline" size={18} /> Upload one clear proof image for your challenge update.</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["#Fitness", "#Style", "#Confidence", "#Grooming", "#Discipline", "#Transformation"].map((tag) => <span key={tag} className="rounded-full bg-electric/10 px-3 py-1 text-sm font-bold text-electric">{tag}</span>)}
        </div>
        <button className="primary-btn mt-6 w-full">Publish post</button>
      </section>
    </AppShell>
  );
}
