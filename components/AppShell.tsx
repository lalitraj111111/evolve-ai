"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BrainCircuit,
  CreditCard,
  HeartHandshake,
  Home,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShieldCheck,
  Trophy,
  TrendingUp,
  UserCircle,
  Users
} from "lucide-react";
import clsx from "clsx";
import { AuthGuard } from "./AuthGuard";
import { BackButton } from "./BackButton";
import { Breadcrumbs } from "./Breadcrumbs";
import { Logo } from "./Logo";
import { LogoutButton } from "./LogoutButton";
import { ProfileMenu } from "./ProfileMenu";

const desktopNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/social-media", label: "Social Media", icon: Users },
  { href: "/heart-challenge", label: "75 Hard Days", icon: HeartHandshake },
  { href: "/ai-coach", label: "AI Coach", icon: BrainCircuit },
  { href: "/progress", label: "Progress", icon: TrendingUp },
  { href: "/profile", label: "Profile", icon: UserCircle },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
  { href: "/admin", label: "Admin Panel", icon: ShieldCheck, adminOnly: true }
];

const mobileNav = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/social-media", label: "Social", icon: Users },
  { href: "/heart-challenge", label: "Challenges", icon: Trophy },
  { href: "/profile", label: "Profile", icon: UserCircle }
];

export function AppShell({ children, title, action }: { children: ReactNode; title: string; action?: ReactNode }) {
  const pathname = usePathname();
  const [role, setRole] = useState<"user" | "admin" | null>(null);
  const showBack = pathname !== "/dashboard";
  const isAdminArea = pathname.startsWith("/admin");

  return (
    <AuthGuard onRoleChange={setRole}>
      <div className="min-h-screen bg-paper text-ink dark:bg-[#090b10] dark:text-white">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-slate-200 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:block">
        <div>
          <Logo />
          {isAdminArea ? <p className="mt-3 rounded-2xl bg-electric/10 px-3 py-2 text-sm font-black text-electric">EVOLVE AI Admin</p> : null}
        </div>
        <nav className="mt-8 space-y-1">
          {desktopNav.filter((item) => !item.adminOnly || role === "admin").map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition",
                  active
                    ? "bg-ink text-white dark:bg-white dark:text-ink"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                )}
              >
                <Icon size={19} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 space-y-3">
          {isAdminArea ? <Link href="/dashboard" className="secondary-btn w-full">Back to Website</Link> : null}
          <LogoutButton />
        </div>
      </aside>
      <main className="pb-24 lg:ml-72 lg:pb-0">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200 bg-paper/85 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#090b10]/85 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            {showBack ? <BackButton /> : null}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-electric">EVOLVE AI</p>
              <h1 className="truncate text-2xl font-black">{title}</h1>
              <Breadcrumbs />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {action}
            <ProfileMenu role={role} />
          </div>
        </header>
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-5 border-t border-slate-200 bg-white/92 px-2 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-[#10131a]/92 lg:hidden">
        {mobileNav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={clsx("grid place-items-center gap-1 rounded-2xl px-1 py-2 text-[11px] font-bold", active ? "text-electric" : "text-slate-500")}>
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      </div>
    </AuthGuard>
  );
}
