import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";

type ImageSplitProps = React.HTMLAttributes<HTMLDivElement> & {
  alt: string;
  borderColor?: string;
  enableBorder?: boolean;
  imageClassName?: string;
  initialBorderOpacity?: number;
  offsetStep?: number;
  sections?: number;
  src: string;
  viewportThreshold?: number;
};

type ImageSplitSegmentProps = {
  borderColor: string;
  enableBorder: boolean;
  imageClassName: string;
  initialBorderOpacity: number;
  index: number;
  offsetStep: number;
  prefersReducedMotion: boolean;
  scrollYProgress: MotionValue<number>;
  sections: number;
  src: string;
};

const hexToRgb = (hex: string) => {
  const validHex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(hex);
  if (!validHex) return "255, 255, 255";

  let cleanHex = hex.replace("#", "");

  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => `${char}${char}`)
      .join("");
  }

  const value = Number.parseInt(cleanHex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;

  return `${r}, ${g}, ${b}`;
};

function ImageSplitSegment({
  borderColor,
  enableBorder,
  imageClassName,
  initialBorderOpacity,
  index,
  offsetStep,
  prefersReducedMotion,
  scrollYProgress,
  sections,
  src,
}: ImageSplitSegmentProps) {
  const distanceFromEdge = Math.min(index, sections - 1 - index);
  const offset = index === 0 || index === sections - 1 ? 0 : distanceFromEdge * offsetStep;
  const rawY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [offset, 0]);
  const y = useSpring(rawY, { damping: 32, stiffness: 260, mass: 0.45 });
  const borderOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [initialBorderOpacity, 0]),
    { damping: 34, stiffness: 260, mass: 0.45 },
  );
  const borderRight = useTransform(borderOpacity, (opacity) =>
    enableBorder && index !== sections - 1 ? `1px solid rgba(${borderColor}, ${opacity})` : "none",
  );

  return (
    <motion.div
      aria-hidden="true"
      className="relative h-full flex-1 overflow-hidden"
      style={{
        y,
        zIndex: sections - index,
        borderRight,
        boxSizing: "border-box",
        marginRight: enableBorder && index !== sections - 1 ? "-1px" : 0,
      }}
    >
      <img
        src={src}
        alt=""
        className={`absolute inset-y-0 h-full max-w-none object-cover ${imageClassName}`}
        loading="lazy"
        decoding="async"
        style={{
          left: `-${index * 100}%`,
          width: `${sections * 100}%`,
        }}
      />
    </motion.div>
  );
}

export function ImageSplit({
  alt,
  borderColor = "#ffffff",
  className = "",
  enableBorder = true,
  imageClassName = "",
  initialBorderOpacity = 0.4,
  offsetStep = 30,
  sections = 9,
  src,
  viewportThreshold = 0.3,
  ...props
}: ImageSplitProps) {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const compactMotion = useCompactImageMotion();
  const effectiveOffsetStep = compactMotion ? Math.min(offsetStep, 14) : offsetStep;
  const effectiveBorderOpacity = compactMotion ? Math.min(initialBorderOpacity, 0.24) : initialBorderOpacity;
  const effectiveViewportThreshold = compactMotion ? Math.max(viewportThreshold, 0.46) : viewportThreshold;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", `start ${effectiveViewportThreshold * 100}%`],
  });
  const borderRgb = React.useMemo(() => hexToRgb(borderColor), [borderColor]);

  return (
    <div ref={targetRef} data-image-split className={`relative flex w-full rounded-[inherit] ${className}`} {...props}>
      <img src={src} alt={alt} className="sr-only" loading="lazy" decoding="async" />

      {Array.from({ length: sections }).map((_, index) => (
        <ImageSplitSegment
          borderColor={borderRgb}
          enableBorder={enableBorder}
          imageClassName={imageClassName}
          initialBorderOpacity={effectiveBorderOpacity}
          index={index}
          key={index}
          offsetStep={effectiveOffsetStep}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
          scrollYProgress={scrollYProgress}
          sections={sections}
          src={src}
        />
      ))}
    </div>
  );
}

function useCompactImageMotion() {
  const [compactMotion, setCompactMotion] = React.useState(() =>
    typeof window === "undefined" ? true : window.matchMedia("(max-width: 767px)").matches,
  );

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setCompactMotion(query.matches);

    handleChange();
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  return compactMotion;
}
