import * as React from "react";
import { HTMLMotionProps, motion, useInView } from "motion/react";
import { cn } from "../ui/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface FadeUpWordProps extends Omit<HTMLMotionProps<HeadingLevel>, "children"> {
  children: string;
  as?: HeadingLevel;
  trigger?: "view" | "mount";
}

export function FadeUpWord({
  children,
  as = "h2",
  trigger = "view",
  className,
  ...props
}: FadeUpWordProps) {
  const ref = React.useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01, margin: "0px 0px -8% 0px" });
  const [mounted, setMounted] = React.useState(false);
  const [fallbackVisible, setFallbackVisible] = React.useState(false);
  const prefersReducedMotion = React.useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const Component = motion[as];
  const shouldShow = prefersReducedMotion || isInView || fallbackVisible || (trigger === "mount" && mounted);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setFallbackVisible(true);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <Component
      ref={ref}
      className={cn("flex flex-wrap gap-x-[0.32em] gap-y-[0.1em]", className)}
      {...props}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            duration: 0.5,
            delay: index * 0.055,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
