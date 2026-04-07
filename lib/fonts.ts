import { Inter, Playfair_Display, Noto_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-ar",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh-ar",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
