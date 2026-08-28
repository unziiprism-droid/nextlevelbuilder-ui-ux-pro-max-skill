import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-secondary text-text-inverse hover:opacity-90 focus-visible:outline-brand-secondary",
  secondary:
    "bg-transparent text-brand-secondary border border-border-strong hover:border-brand-secondary hover:bg-surface-subtle focus-visible:outline-brand-secondary",
  ghost:
    "bg-transparent text-brand-secondary hover:bg-surface-subtle focus-visible:outline-brand-secondary",
  inverse:
    "bg-surface text-brand-secondary hover:bg-brand-bg focus-visible:outline-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className,
    children,
  } = props;

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-300 ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    showArrow: _showArrow,
    className: _className,
    children: _children,
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
