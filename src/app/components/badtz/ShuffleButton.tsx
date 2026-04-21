import * as React from "react";
import { Link } from "react-router";
import { cn } from "../ui/utils";

type ShuffleButtonSize = "nav" | "default";
type ShuffleButtonVariant = "primary" | "secondary";

interface ShuffleButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: string;
  href?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  duration?: number;
  size?: ShuffleButtonSize;
  variant?: ShuffleButtonVariant;
}

const characters = "abcdefghijklmnopqrstuvwxyz";

function shuffleChar(char: string) {
  return char === " " ? " " : characters[Math.floor(Math.random() * characters.length)];
}

export function ShuffleButton({
  children,
  href,
  to,
  type = "button",
  disabled,
  duration = 0.9,
  size = "default",
  variant = "primary",
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...props
}: ShuffleButtonProps) {
  const [shuffledText, setShuffledText] = React.useState(children);
  const [isActive, setIsActive] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const hasMounted = React.useRef(false);
  const intervals = React.useRef<Array<ReturnType<typeof window.setInterval>>>([]);
  const timeouts = React.useRef<Array<ReturnType<typeof window.setTimeout>>>([]);
  const Component = to ? Link : href ? "a" : "button";

  React.useEffect(() => {
    setShuffledText(children);
  }, [children]);

  React.useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const onMotionChange = () => setPrefersReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", onMotionChange);

    return () => motionQuery.removeEventListener("change", onMotionChange);
  }, []);

  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      setShuffledText(children);
      return undefined;
    }

    const textArray = children.split("");
    const animatedIndexes = textArray
      .map((char, index) => (char === " " ? -1 : index))
      .filter((index) => index >= 0);

    if (prefersReducedMotion || !animatedIndexes.length) {
      setShuffledText(children);
      return undefined;
    }

    const stepDuration = (duration * 500) / animatedIndexes.length;
    const indexes = isActive ? animatedIndexes : [...animatedIndexes].reverse();

    indexes.forEach((letterIndex, sequenceIndex) => {
      const interval = window.setInterval(() => {
        textArray[letterIndex] = shuffleChar(children[letterIndex]);
        setShuffledText(textArray.join(""));
      }, 25);
      intervals.current.push(interval);

      const timeout = window.setTimeout(() => {
        window.clearInterval(interval);
        textArray[letterIndex] = children[letterIndex];
        setShuffledText(textArray.join(""));
      }, stepDuration * (sequenceIndex + 1));
      timeouts.current.push(timeout);
    });

    return () => {
      intervals.current.forEach(window.clearInterval);
      timeouts.current.forEach(window.clearTimeout);
      intervals.current = [];
      timeouts.current = [];
    };
  }, [children, duration, isActive, prefersReducedMotion]);

  const sharedProps = to ? { to } : href ? { href } : { disabled, type };

  return (
    <Component
      className={cn(
        "group/shuffle-button relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] border text-center font-semibold outline-none transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[#1473e6]/20 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary"
          ? "border-[#111318] bg-[#111318] text-white shadow-[0_18px_42px_rgba(17,19,24,0.15)] hover:-translate-y-0.5 hover:bg-[#242832]"
          : "border-[#dce3ee] bg-white text-[#111318] shadow-[0_12px_30px_rgba(17,24,39,0.07)] hover:-translate-y-0.5 hover:border-[#b8c3d3] hover:bg-[#f8fafc]",
        size === "nav" ? "min-h-9 px-3 text-[0.74rem] sm:px-4 sm:text-[0.78rem]" : "min-h-12 px-6 text-[0.9rem]",
        className
      )}
      aria-label={children}
      onMouseEnter={(event) => {
        setIsActive(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setIsActive(false);
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        setIsActive(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setIsActive(false);
        onBlur?.(event);
      }}
      {...sharedProps}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/40 opacity-70 transition-opacity duration-200 group-hover/shuffle-button:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-2 -left-10 w-8 rotate-12 bg-white/30 opacity-0 blur-sm transition-all duration-500 group-hover/shuffle-button:left-[115%] group-hover/shuffle-button:opacity-100"
      />
      <span aria-hidden="true" className="relative z-10 block whitespace-nowrap" style={{ minWidth: `${children.length}ch` }}>
        {shuffledText}
      </span>
    </Component>
  );
}
