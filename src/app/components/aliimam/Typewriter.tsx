import * as React from "react";
import { cn } from "../ui/utils";

interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
}

export function Typewriter({
  words,
  speed = 72,
  deleteSpeed = 34,
  delayBetweenWords = 1500,
  cursor = true,
  cursorChar = "|",
  className,
  ...props
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const currentWord = words[wordIndex] || "";

  React.useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const onMotionChange = () => setPrefersReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", onMotionChange);

    return () => motionQuery.removeEventListener("change", onMotionChange);
  }, []);

  React.useEffect(() => {
    if (!words.length) return undefined;

    if (prefersReducedMotion) {
      setDisplayText(currentWord);
      return undefined;
    }

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            const nextIndex = charIndex + 1;
            setDisplayText(currentWord.slice(0, nextIndex));
            setCharIndex(nextIndex);
            return;
          }

          setIsDeleting(true);
          return;
        }

        if (charIndex > 0) {
          const nextIndex = charIndex - 1;
          setDisplayText(currentWord.slice(0, nextIndex));
          setCharIndex(nextIndex);
          return;
        }

        setIsDeleting(false);
        setWordIndex((previousIndex) => (previousIndex + 1) % words.length);
      },
      isDeleting ? deleteSpeed : charIndex === currentWord.length ? delayBetweenWords : speed
    );

    return () => window.clearTimeout(timeout);
  }, [
    charIndex,
    currentWord,
    delayBetweenWords,
    deleteSpeed,
    isDeleting,
    prefersReducedMotion,
    speed,
    words,
  ]);

  React.useEffect(() => {
    if (!cursor || prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setShowCursor((visible) => !visible);
    }, 500);

    return () => window.clearInterval(interval);
  }, [cursor, prefersReducedMotion]);

  return (
    <span
      className={cn("inline-flex min-w-[11ch] items-baseline whitespace-nowrap", className)}
      aria-label={currentWord}
      {...props}
    >
      <span>{displayText || "\u00a0"}</span>
      {cursor ? (
        <span
          aria-hidden="true"
          className="ml-1 transition-opacity duration-75"
          style={{ opacity: showCursor || prefersReducedMotion ? 1 : 0 }}
        >
          {cursorChar}
        </span>
      ) : null}
    </span>
  );
}
