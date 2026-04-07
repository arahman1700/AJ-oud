import type { Metadata } from "next";
import {
  inter,
  playfairDisplay,
  notoSansArabic,
  notoNaskhArabic,
} from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AJoud — أجود العطور الشرقية",
    template: "%s | AJoud",
  },
  description:
    "أجود — علامة سعودية فاخرة متخصصة في العود الكمبودي النادر والمسك الفاخر. AJoud — Saudi luxury brand specializing in rare Cambodian oud and premium musk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
