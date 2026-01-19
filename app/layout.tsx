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
      <body className={`${inter.className} bg-[color:var(--bg)] text-[color:var(--text)]`}>
        {children}
      </body>
    </html>
  );
}
