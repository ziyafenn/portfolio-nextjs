import { libre_franklin } from "@/helpers/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Ziya Fenn - UX Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${libre_franklin.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
