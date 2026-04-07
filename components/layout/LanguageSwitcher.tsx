"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="text-sm font-medium text-muted-foreground hover:text-brand-gold transition-colors px-3 py-1.5 rounded-sm border border-border hover:border-brand-gold/50"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      {locale === "ar" ? "EN" : "عربي"}
    </button>
  );
}
