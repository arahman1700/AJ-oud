import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HeroSection />;
}

function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark via-brand-green to-background" />

      {/* Gold accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* AJ Monogram */}
        <div className="mb-8">
          <span className="inline-block text-brand-gold text-6xl md:text-8xl font-heading tracking-wider">
            AJ
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-brand-beige mb-6 leading-tight">
          {t("heroTitle")}
        </h1>

        <p className="text-lg md:text-xl text-brand-gold-light mb-10 max-w-2xl mx-auto">
          {t("heroSubtitle")}
        </p>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-4 text-lg font-semibold rounded-sm hover:bg-brand-gold-light transition-colors duration-300"
        >
          {t("heroButton")}
        </Link>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            100% Authentic
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Free Shipping 200+ SAR
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Secure Payment
          </span>
        </div>
      </div>
    </section>
  );
}
