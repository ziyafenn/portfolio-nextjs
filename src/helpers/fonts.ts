import { Libre_Franklin, Playfair_Display, Manrope } from "next/font/google";

export const libre_franklin = Libre_Franklin({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-libre-franklin",
});

export const playfair = Playfair_Display({
  display: "swap",
  weight: "700",
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-playfair",
});

export const manrope = Manrope({
  display: "swap",
  weight: "800",
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-manrope",
});
