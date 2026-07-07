import { Bookmark, Flag, HeartHandshake, MessageCircle, MoreHorizontal, Send, ShieldCheck, Sparkles, Trophy, UserPlus } from "lucide-react";

type SocialPost = {
  user: string;
  handle: string;
  avatar?: string;
  time: string;
  caption: string;
  media: string;
  mediaType?: string;
  likes: number;
  comments: number;
  shares?: number;
  saves?: number;
  followed?: boolean;
};

export function PostCard({ post, adminScore }: { post: SocialPost; adminScore?: number }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3 p-4">
        <img src={post.avatar} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-electric/40" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-black">{post.user}</p>
          <p className="truncate text-xs text-slate-500">{post.handle} - {post.time}</p>
        </div>
        <button className="secondary-btn px-3 py-2"><UserPlus size={18} /> {post.followed ? "Network" : "Support"}</button>
        <button aria-label="Post options" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <div className="relative">
        <img src={post.media} alt="" className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button aria-label="Support" className="transition hover:scale-110 hover:text-electric"><HeartHandshake size={22} /></button>
            <button aria-label="Respect" className="transition hover:scale-110 hover:text-[#7c3aed]"><ShieldCheck size={22} /></button>
            <button aria-label="Inspire" className="transition hover:scale-110 hover:text-mint"><Sparkles size={22} /></button>
            <button aria-label="Comment" className="transition hover:scale-110 hover:text-electric"><MessageCircle size={22} /></button>
            <button aria-label="Share" className="transition hover:scale-110 hover:text-mint"><Send size={22} /></button>
          </div>
          <button aria-label="Champion" className="transition hover:scale-110 hover:text-electric"><Trophy size={22} /></button>
        </div>
        <button aria-label="Save" className="hidden"><Bookmark size={22} /></button>
        <p className="text-sm font-bold">{post.likes} likes - {post.comments} comments - {post.shares ?? 0} shares</p>
        <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{post.caption}</p>
        <div className="flex items-center gap-2">
          <input className="field py-2" placeholder="Write a comment..." />
          <button className="secondary-btn px-3 py-2"><Send size={17} /></button>
          <button className="secondary-btn px-3 py-2" aria-label="Report post"><Flag size={17} /></button>
        </div>
        {typeof adminScore === "number" ? <p className="rounded-2xl bg-electric/10 px-3 py-2 text-xs font-bold text-electric">Admin score: {adminScore}</p> : null}
      </div>
    </article>
  );
}
