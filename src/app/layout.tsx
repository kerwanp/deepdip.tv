import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { StreamersProvider } from "@/providers/streamers.provider";
import { fetchStreamersData } from "@/lib/api";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deep Dip TV - Multiplex",
  description: "Follow your favorite streamers climbing the Deep Dip 2 tower.",
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
        <StreamersProvider streamers={streamers}>
          <div className="min-h-screen flex">
            <Sidebar />
            {children}
          </div>
        </StreamersProvider>
        <Analytics />
      </body>
    </html>
  );
}
