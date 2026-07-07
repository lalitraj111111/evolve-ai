import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PWARegister } from "@/components/PWARegister";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOLVE AI",
  description: "AI self-improvement SaaS for confidence, body, style, habits, and social growth.",
  applicationName: "EVOLVE AI",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EVOLVE AI"
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#5b5ff7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
