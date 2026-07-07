"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallAppButton({ label = "Install App" }: { label?: string }) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    function handlePrompt(event: Event) {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
  }, []);

  async function installApp() {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      return;
    }

    window.alert("Use your browser menu and choose Add to Home Screen or Install App.");
  }

  return (
    <button type="button" onClick={installApp} className="secondary-btn">
      <Download size={18} /> {label}
    </button>
  );
}
