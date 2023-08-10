import { libre_franklin } from "@/helpers/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ziya Fenn - UX Engineer in Nuremberg, Germany",
  description:
    "Multidisciplinary UX Engineer with ~10 years of experience in front-end development and digital design.",
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
