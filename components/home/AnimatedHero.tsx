"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { assetPath } from "@/lib/basePath";

export function AnimatedHero() {
  const t = useTranslations("Home");
  const pt = useTranslations("Product");

  return (
    <section className="relative min-h-[65vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assetPath("/images/hero/hero-main.jpg")})` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/30 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/images/brand/logo-light.png")}
            alt="AJ OUD"
            className="mx-auto h-16 sm:h-24 md:h-32 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-heading text-brand-beige mb-4 leading-tight animate-fade-in-up">
          {t("heroTitle")}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-brand-gold-light mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          {t("heroSubtitle")}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-300">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-sm hover:bg-brand-gold-light transition-all duration-500 hover:shadow-[0_0_30px_rgba(188,156,96,0.3)]"
          >
            {t("heroButton")} ←
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-brand-beige/60 animate-fade-in delay-500">
          {[pt("authentic"), pt("freeShipping"), pt("delivery")].map(
            (text, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {text}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
