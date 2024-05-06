import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Overlay } from "@/components/overlay";
import { SettingsProvider } from "@/providers/settings.provider";
import { Sidebar } from "@/components/sidebar";
import { StreamersProvider } from "@/providers/streamers.provider";
import { fetchStreamersData } from "@/lib/api";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deep Dip TV",
  description: "Multiplex for Deep Dip 2",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const streamers = await fetchStreamersData();

  return (
    <html lang="en">
      <body
        className={cn(
          "dark min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SettingsProvider>
          <StreamersProvider streamers={streamers}>
            <div className="min-h-screen flex">
              <Sidebar />
              {children}
            </div>
          </StreamersProvider>
        </SettingsProvider>
        <Analytics />
      </body>
    </html>
  );
}
