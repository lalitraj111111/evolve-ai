"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(window.localStorage.getItem("evolve_language") ?? "en");
  }, []);

  function changeLanguage(value: string) {
    setLanguage(value);
    window.localStorage.setItem("evolve_language", value);
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
      <Languages size={17} />
      <select className="bg-transparent outline-none" value={language} onChange={(event) => changeLanguage(event.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </label>
  );
}
