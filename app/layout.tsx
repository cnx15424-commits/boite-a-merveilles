import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Boîte à merveilles | Ahmed Sefrioui",
  description:
    "Site de révision sur La Boîte à merveilles d'Ahmed Sefrioui : littérature maghrébine, autobiographie, auteur, personnages, lieux, résumé et test diagnostique.",
  verification: {
    google: "71xBHPob2NtzLvWs--tN2tqNb5aBb76zrrFSHZyFG0A",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}