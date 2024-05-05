import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Overlay } from "@/components/overlay";
import { SettingsProvider } from "@/providers/settings.provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deep Dip TV",
  description: "Multiplex for Deep Dip 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SettingsProvider>
          <Overlay />
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
