"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { assetPath } from "@/lib/basePath";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  musk: "/images/products/musk-collection.jpg",
  oud: "/images/products/oud-golden-tray.jpg",
  bakhoor: "/images/products/bakhoor-scene.jpg",
  oils: "/images/products/oud-decanter-2.jpg",
  home: "/images/products/bakhoor-smoke.jpg",
  "gift-sets": "/images/products/blue-musk-box.jpg",
};

export function CategoryShowcase() {
  const t = useTranslations("Home");
  const locale = useLocale() as "ar" | "en";

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-heading text-brand-gold mb-3">
          {t("featuredTitle")}
        </h2>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {categories.map((cat) => {
          const imageSrc = categoryImages[cat.id] || cat.image;
          return (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}` as any}
              className="group relative overflow-hidden rounded-sm aspect-[4/3]"
            >
              <Image
                src={assetPath(imageSrc)}
                alt={cat.name[locale]}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 rounded-sm" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <h3 className="text-base sm:text-xl md:text-2xl font-heading text-brand-beige mb-0.5">
                  {cat.name[locale]}
                </h3>
                <p className="text-[10px] sm:text-xs text-brand-beige/60 line-clamp-1 hidden sm:block">
                  {cat.description[locale]}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
