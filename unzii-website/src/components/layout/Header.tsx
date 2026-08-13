"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { primaryNav, services } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="Unzii home">
          <Logo variant="full" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-subtle hover:text-brand-secondary"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-lifted">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-surface-subtle"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-brand-secondary">
                          {service.label}
                          {service.status === "coming-soon" && (
                            <span className="rounded-full bg-brand-bg px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-supporting">
                              Coming soon
                            </span>
                          )}
                        </span>
                        <span className="text-xs text-text-secondary">{service.description}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-subtle hover:text-brand-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/start-your-project" size="md">
            Start Your Project
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full text-brand-secondary lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-surface lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={closeMenus}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-subtle hover:text-brand-secondary"
                >
                  {service.label}
                  {service.status === "coming-soon" && (
                    <span className="rounded-full bg-brand-bg px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-supporting">
                      Soon
                    </span>
                  )}
                </Link>
              ))}
              <div className="my-2 h-px bg-border" />
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-subtle hover:text-brand-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Button href="/start-your-project" onClick={closeMenus} className="w-full">
                  Start Your Project
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
