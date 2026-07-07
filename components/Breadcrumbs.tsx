"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "ai-coach": "AI Coach",
  admin: "Admin",
  "social-media": "Social Media",
  challenges: "Challenges",
  community: "Social Media",
  create: "Create Post",
  explore: "Discovery Hub",
  "heart-challenge": "75 Hard Days Challenge",
  messages: "Messages",
  modules: "AI Modules",
  notifications: "Notifications",
  pricing: "Pricing",
  profile: "Profile",
  progress: "Progress",
  settings: "Settings"
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  if (pathname === "/dashboard" || parts.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mt-1 flex flex-wrap items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
      <Link href="/dashboard" className="hover:text-electric">Dashboard</Link>
      {parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join("/")}`;
        const isLast = index === parts.length - 1;

        return (
          <span key={href} className="flex items-center gap-1">
            <ChevronRight size={13} />
            {isLast ? <span className="text-slate-700 dark:text-slate-200">{labels[part] ?? titleCase(part)}</span> : <Link href={href} className="hover:text-electric">{labels[part] ?? titleCase(part)}</Link>}
          </span>
        );
      })}
    </nav>
  );
}

function titleCase(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
