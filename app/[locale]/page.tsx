import { useTranslations } from "next-intl";
import { setRequestLocale, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";
import { categories, products, getLocalizedProduct } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Newsletter } from "@/components/home/Newsletter";
import { AnimatedHero } from "@/components/home/AnimatedHero";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as "ar" | "en";

  const bestSellers = products
    .filter((p) => p.badges.includes("bestseller"))
    .map((p) => getLocalizedProduct(p, loc));

  const newArrivals = products
    .filter((p) => p.badges.includes("new"))
    .map((p) => getLocalizedProduct(p, loc));

  return (
    <>
      <AnimatedHero />
      <CategoryShowcase />
      <BestSellersSection products={bestSellers} />
      <BrandStorySection />
      <NewArrivalsSection products={newArrivals} />
      <Newsletter />
    </>
  );
}

function BestSellersSection({
  products,
}: {
  products: ReturnType<typeof getLocalizedProduct>[];
}) {
  const t = useTranslations("Home");

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading text-brand-gold animate-fade-in-up">
            {t("bestSellersTitle")}
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mt-2" />
        </div>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
        >
          {useTranslations("Common")("viewAll")} →
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}

function BrandStorySection() {
  const t = useTranslations("Home");

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark to-brand-green" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/images/brand/logo-light.png")}
          alt="AJ OUD"
          className="mx-auto h-14 w-auto animate-fade-in"
        />
        <h2 className="text-3xl md:text-4xl font-heading text-brand-beige mt-6 mb-6 animate-fade-in-up">
          {t("brandStoryTitle")}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {t("brandStoryText")}
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold px-6 py-3 rounded-sm font-medium hover:bg-brand-gold hover:text-brand-green-dark transition-colors duration-300"
        >
          {t("brandStoryButton")}
        </Link>
      </div>
    </section>
  );
}

function NewArrivalsSection({
  products,
}: {
  products: ReturnType<typeof getLocalizedProduct>[];
}) {
  const t = useTranslations("Home");

  if (products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading text-brand-gold animate-fade-in-up">
            {t("newArrivalsTitle")}
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mt-2" />
        </div>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
        >
          {useTranslations("Common")("viewAll")} →
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
