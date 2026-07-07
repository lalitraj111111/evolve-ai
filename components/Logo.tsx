import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 font-black tracking-wide">
      <img src="/brand/evolve-ai-logo.svg" alt="EVOLVE AI" className="h-12 w-auto rounded-2xl object-contain shadow-lg" />
    </Link>
  );
}
