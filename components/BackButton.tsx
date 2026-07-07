"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/dashboard");
  }

  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={goBack}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-ink/75 text-white shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-ink dark:bg-white/10 dark:hover:bg-white/20"
    >
      <ArrowLeft size={20} />
    </button>
  );
}
