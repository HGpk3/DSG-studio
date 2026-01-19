import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DSG studio — разработка сайтов для бизнеса",
  description:
    "DSG studio — digital-студия разработки современных сайтов и продуктов.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[color:var(--bg)] text-[color:var(--text)]`}
      >
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.25)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.18)_0%,transparent_70%)] blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
