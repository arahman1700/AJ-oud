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
    default: "AJ OUD — AJ عود العطور الشرقية",
    template: "%s | AJ OUD",
  },
  description:
    "AJ عود — علامة سعودية فاخرة متخصصة في العود الكمبودي النادر والمسك الفاخر. AJ Oud — Saudi luxury brand specializing in rare Cambodian oud and premium musk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
