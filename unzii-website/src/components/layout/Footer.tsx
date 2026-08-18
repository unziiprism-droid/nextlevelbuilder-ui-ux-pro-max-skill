import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, siteConfig, socialConfig } from "@/lib/site-config";

// Not in lucide-react (dropped for trademark reasons); plain inline SVG instead.
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-text-inverse">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center rounded-2xl bg-surface p-3">
              <Logo variant="mark" />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-text-inverse-muted">
              {siteConfig.description}
            </p>
            <p className="text-sm text-text-inverse-muted">
              Have a question? We&apos;re available anytime, message us on
              Instagram or send an email.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-text-inverse transition-colors hover:text-brand-primary"
              >
                <Mail className="size-4" aria-hidden />
                {siteConfig.email}
              </Link>
              {socialConfig.instagramHandle && (
                <Link
                  href={`https://instagram.com/${socialConfig.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-text-inverse transition-colors hover:text-brand-primary"
                >
                  <InstagramIcon />@{socialConfig.instagramHandle}
                </Link>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-inverse-muted">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-inverse-muted transition-colors hover:text-text-inverse"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-inverse-muted">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-inverse-muted transition-colors hover:text-text-inverse"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-inverse-muted">
              Get Started
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/start-your-project"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-inverse transition-colors hover:text-brand-primary"
                >
                  Start Your Project
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-inverse-muted transition-colors hover:text-text-inverse"
                >
                  Talk to our team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-text-inverse-muted">
            © {year} Unzii. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-text-inverse-muted transition-colors hover:text-text-inverse"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/seo-services-lahore"
              className="text-xs text-text-inverse-muted transition-colors hover:text-text-inverse"
            >
              SEO Services in Lahore
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
