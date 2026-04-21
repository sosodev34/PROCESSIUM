import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../ui/utils";
import { CornerMarks } from "./button";

const opticsCardVariants = cva(
  "group/optics-card relative border text-[#111318] transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "border-[#dfe5ee] bg-white",
        soft: "border-[#dfe5ee] bg-[#f7f9fc]",
        elevated: "border-[#d9e1ec] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.1)]",
      },
      decoration: {
        true: "overflow-visible",
        false: "overflow-hidden",
      },
    },
    defaultVariants: {
      variant: "default",
      decoration: false,
    },
  }
);

type OpticsCardProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof opticsCardVariants> & {
    as?: React.ElementType;
    decorations?: boolean;
  };

function OpticsCard({
  as,
  className,
  variant,
  decorations = false,
  children,
  ...props
}: OpticsCardProps) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        opticsCardVariants({ variant, decoration: decorations }),
        "rounded-[8px]",
        decorations && "rounded-none",
        className
      )}
      {...props}
    >
      {children}
      {decorations ? <CornerMarks size="card" /> : null}
    </Component>
  );
}

function OpticsCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-1 px-5 pt-5", className)} {...props} />;
}

function OpticsCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-[1.12rem] font-semibold leading-tight text-[#111318]", className)} {...props} />;
}

function OpticsCardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-[0.94rem] leading-7 text-[#667085]", className)} {...props} />;
}

function OpticsCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 py-5", className)} {...props} />;
}

function OpticsCardFooter({ className, pattern = false, ...props }: React.HTMLAttributes<HTMLDivElement> & { pattern?: boolean }) {
  return (
    <div
      className={cn(
        "border-t border-[#dfe5ee] px-5 py-4",
        pattern &&
          "bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_4px,#f2f5f9_4px,#f2f5f9_8px)]",
        className
      )}
      {...props}
    />
  );
}

OpticsCard.displayName = "OpticsCard";
OpticsCardHeader.displayName = "OpticsCardHeader";
OpticsCardTitle.displayName = "OpticsCardTitle";
OpticsCardDescription.displayName = "OpticsCardDescription";
OpticsCardContent.displayName = "OpticsCardContent";
OpticsCardFooter.displayName = "OpticsCardFooter";

export {
  OpticsCard,
  OpticsCardContent,
  OpticsCardDescription,
  OpticsCardFooter,
  OpticsCardHeader,
  OpticsCardTitle,
  opticsCardVariants,
};
