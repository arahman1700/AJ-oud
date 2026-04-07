"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const totalItems = useCartStore((s) => s.totalItems);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/products" as const, label: t("products") },
    { href: "/products?category=musk" as const, label: t("musk") },
    { href: "/products?category=oud" as const, label: t("oud") },
    { href: "/about" as const, label: t("about") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top bar - gold accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground hover:text-brand-gold transition-colors"
            aria-label={t("menu")}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading text-brand-gold tracking-widest">
              AJOUD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-brand-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <button
              className="text-muted-foreground hover:text-brand-gold transition-colors p-2"
              aria-label={t("search")}
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/account/login"
              className="hidden md:block text-muted-foreground hover:text-brand-gold transition-colors p-2"
              aria-label={t("account")}
            >
              <User className="h-5 w-5" />
            </Link>

            <Link
              href="/cart"
              className="relative text-muted-foreground hover:text-brand-gold transition-colors p-2"
              aria-label={t("cart")}
            >
              <ShoppingBag className="h-5 w-5" />
              {mounted && totalItems() > 0 && (
                <span className="absolute -top-0.5 -end-0.5 bg-brand-gold text-brand-green-dark text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {totalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
