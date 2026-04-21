import * as React from "react";
import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../ui/utils";

const opticsButtonVariants = cva(
  "group/optics-button relative inline-flex shrink-0 items-center justify-center overflow-hidden border text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[#1473e6]/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[#111318] bg-[#111318] text-white shadow-[0_18px_42px_rgba(17,19,24,0.15)] hover:-translate-y-0.5 hover:bg-[#242832] active:translate-y-0",
        secondary:
          "border-[#dce3ee] bg-white text-[#111318] shadow-[0_12px_30px_rgba(17,24,39,0.07)] hover:-translate-y-0.5 hover:border-[#b8c3d3] hover:bg-[#f8fafc] active:translate-y-0",
        quiet:
          "border-transparent bg-transparent text-[#667085] hover:bg-[#eef2f7] hover:text-[#111318]",
        decorations:
          "overflow-visible border-[#dce3ee] bg-white text-[#111318] shadow-[0_16px_34px_rgba(17,24,39,0.08)] hover:-translate-y-0.5 hover:border-[#aeb9c9] hover:shadow-[0_22px_48px_rgba(17,24,39,0.11)] active:translate-y-0",
      },
      size: {
        sm: "min-h-9 px-3 text-[0.78rem]",
        default: "min-h-12 px-6 text-[0.9rem]",
        lg: "min-h-12 px-7 text-[0.92rem]",
        nav: "min-h-9 px-3 text-[0.74rem] sm:px-4 sm:text-[0.78rem]",
      },
      animation: {
        all: "active:scale-[0.985]",
        colors: "",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      animation: "all",
    },
  }
);

type OpticsButtonProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof opticsButtonVariants> & {
    href?: string;
    to?: string;
    disabled?: boolean;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
  };

function CornerMarks({ size = "button" }: { size?: "button" | "card" }) {
  const length = size === "card" ? "h-[8px] w-[8px]" : "h-[6px] w-[6px]";
  const markColor = "bg-[#9aa6b8]";

  return (
    <>
      <span aria-hidden="true" className={cn("pointer-events-none absolute -left-px -top-px", length)}>
        <span className={cn("absolute left-0 top-0 h-full w-px", markColor)} />
        <span className={cn("absolute left-0 top-0 h-px w-full", markColor)} />
      </span>
      <span aria-hidden="true" className={cn("pointer-events-none absolute -right-px -top-px", length)}>
        <span className={cn("absolute right-0 top-0 h-full w-px", markColor)} />
        <span className={cn("absolute right-0 top-0 h-px w-full", markColor)} />
      </span>
      <span aria-hidden="true" className={cn("pointer-events-none absolute -bottom-px -left-px", length)}>
        <span className={cn("absolute bottom-0 left-0 h-full w-px", markColor)} />
        <span className={cn("absolute bottom-0 left-0 h-px w-full", markColor)} />
      </span>
      <span aria-hidden="true" className={cn("pointer-events-none absolute -bottom-px -right-px", length)}>
        <span className={cn("absolute bottom-0 right-0 h-full w-px", markColor)} />
        <span className={cn("absolute bottom-0 right-0 h-px w-full", markColor)} />
      </span>
    </>
  );
}

function OpticsButton({
  className,
  variant,
  size,
  animation,
  href,
  to,
  disabled,
  children,
  type = "button",
  ...props
}: OpticsButtonProps) {
  const Component = to ? Link : href ? "a" : "button";
  const interactiveProps = to ? { to } : href ? { href } : { disabled, type };

  return (
    <Component
      className={cn(opticsButtonVariants({ variant, size, animation }), "rounded-[8px]", className)}
      {...interactiveProps}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/40 opacity-70 transition-opacity duration-200 group-hover/optics-button:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-2 -left-10 w-8 rotate-12 bg-white/30 opacity-0 blur-sm transition-all duration-500 group-hover/optics-button:left-[115%] group-hover/optics-button:opacity-100"
      />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
      {variant === "decorations" ? <CornerMarks /> : null}
    </Component>
  );
}

OpticsButton.displayName = "OpticsButton";

export { CornerMarks, OpticsButton, opticsButtonVariants };
