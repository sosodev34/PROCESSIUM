import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import logoMark from "../../imports/processium-mark.png";
import { ParticleWordField } from "./ParticleWordField";

interface ParticleTextIntroProps {
  onComplete: () => void;
  onRevealStart?: () => void;
  theme?: "light" | "dark";
}

const INTRO_WORD = "PROCESSIUM";
const INTRO_ACCENT_START = 7;
const INTRO_MAX_FONT_SIZE = 156;
const INTRO_MIN_FONT_SIZE = 48;
const INTRO_TARGET_WIDTH_RATIO = 0.8;
const INTRO_TARGET_Y_RATIO = 0.47;

function measureIntroWordLayout(viewportWidth: number, viewportHeight: number) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return {
      accentSplitPercent: 70,
      fontSize: 64,
      textWidth: viewportWidth < 640 ? 336 : 540,
    };
  }

  let fontSize = Math.min(viewportWidth * 0.14, viewportHeight * 0.26, INTRO_MAX_FONT_SIZE);
  context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;

  while (context.measureText(INTRO_WORD).width > viewportWidth * INTRO_TARGET_WIDTH_RATIO && fontSize > INTRO_MIN_FONT_SIZE) {
    fontSize *= 0.94;
    context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;
  }

  const textWidth = context.measureText(INTRO_WORD).width;
  const accentPrefixWidth = context.measureText(INTRO_WORD.slice(0, INTRO_ACCENT_START)).width;

  return {
    accentSplitPercent: textWidth > 0 ? (accentPrefixWidth / textWidth) * 100 : 70,
    fontSize,
    textWidth,
  };
}

export function ParticleTextIntro({ onComplete, onRevealStart, theme = "light" }: ParticleTextIntroProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasTriggeredRevealRef = React.useRef(false);
  const [brandGhostWidth, setBrandGhostWidth] = React.useState(520);
  const [resolvedWordLayout, setResolvedWordLayout] = React.useState(() => ({
    accentSplitPercent: 70,
    fontSize: 64,
    textWidth: 520,
  }));
  const [brandTarget, setBrandTarget] = React.useState({ scale: 1, x: 0, y: 0 });
  const [isExiting, setIsExiting] = React.useState(false);
  const [isWordResolved, setIsWordResolved] = React.useState(false);
  const particleFormationDuration = prefersReducedMotion ? 1450 : 3920;
  const solidWordDelay = prefersReducedMotion ? 980 : 3250;
  const exitDelay = prefersReducedMotion ? 3200 : 5050;
  const overlayExitDuration = prefersReducedMotion ? 0.22 : 0.44;
  const brandTravelDuration = prefersReducedMotion ? 0.2 : 0.48;
  const logoRevealDuration = prefersReducedMotion ? 0.16 : 0.36;
  const solidWordRevealDuration = prefersReducedMotion ? 0.16 : 0.62;
  const particleResolveFadeDuration = prefersReducedMotion ? 0.16 : 0.74;
  const completeDelay = prefersReducedMotion ? 220 : 460;
  const isDarkTheme = theme === "dark";

  React.useEffect(() => {
    const measureBrandTarget = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const wordLayout = measureIntroWordLayout(viewportWidth, viewportHeight);
      const startWidth = wordLayout.textWidth;

      setResolvedWordLayout(wordLayout);
      setBrandGhostWidth(startWidth);

      const target = document.querySelector("[data-processium-brand]") as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const startCenterX = viewportWidth / 2;
      const startCenterY = viewportHeight * INTRO_TARGET_Y_RATIO;
      const targetCenterX = rect.left + rect.width / 2;
      const targetCenterY = rect.top + rect.height / 2 + 20;

      setBrandTarget({
        scale: rect.width / startWidth,
        x: targetCenterX - startCenterX,
        y: targetCenterY - startCenterY,
      });
    };

    measureBrandTarget();
    window.addEventListener("resize", measureBrandTarget);

    return () => {
      window.removeEventListener("resize", measureBrandTarget);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  React.useEffect(() => {
    const resolveTimer = window.setTimeout(() => {
      setIsWordResolved(true);
    }, solidWordDelay);

    return () => {
      window.clearTimeout(resolveTimer);
    };
  }, [solidWordDelay]);

  React.useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      if (!hasTriggeredRevealRef.current) {
        hasTriggeredRevealRef.current = true;
        onRevealStart?.();
      }
      setIsExiting(true);
    }, exitDelay);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, [exitDelay, onRevealStart]);

  React.useEffect(() => {
    if (!isExiting) return undefined;

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, completeDelay);

    return () => {
      window.clearTimeout(completeTimer);
    };
  }, [completeDelay, isExiting, onComplete]);

  return (
    <motion.div
      data-processium-entry
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 1.02 : 1,
      }}
      transition={{ duration: overlayExitDuration, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-0 z-[55] overflow-hidden"
    >
      <div
        className={`absolute inset-0 backdrop-blur-[10px] ${
          isDarkTheme
            ? "bg-[radial-gradient(circle_at_50%_38%,rgba(20,115,230,0.16),transparent_30%),linear-gradient(180deg,rgba(7,11,18,0.96),rgba(10,16,27,0.9))]"
            : "bg-[radial-gradient(circle_at_50%_38%,rgba(32,54,98,0.12),transparent_30%),linear-gradient(180deg,rgba(247,248,251,0.92),rgba(247,248,251,0.74))]"
        }`}
      />
      <div
        className={`absolute inset-0 [background-position:center] [background-size:80px_80px] ${
          isDarkTheme
            ? "opacity-[0.24] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
            : "opacity-[0.3] [background-image:linear-gradient(rgba(17,19,24,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,24,0.05)_1px,transparent_1px)]"
        }`}
      />
      <div
        className={`absolute inset-x-0 top-0 h-[44vh] ${
          isDarkTheme
            ? "bg-[radial-gradient(circle_at_50%_0%,rgba(20,115,230,0.18),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_50%_0%,rgba(32,54,98,0.14),transparent_70%)]"
        }`}
      />

      <motion.div
        initial={false}
        animate={{
          opacity: isWordResolved ? 0.24 : 1,
          scale: isWordResolved ? 0.998 : 1,
          filter: isWordResolved ? "blur(1.6px)" : "blur(0px)",
        }}
        transition={{ duration: particleResolveFadeDuration, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <ParticleWordField
          word={INTRO_WORD}
          accentColor={isDarkTheme ? "rgba(78, 155, 255, <alpha>)" : "rgba(20, 115, 230, <alpha>)"}
          accentStartIndex={INTRO_ACCENT_START}
          alphaMinAccent={0.62}
          alphaMinBase={isDarkTheme ? 0.52 : 0.4}
          backgroundFill={isDarkTheme ? "rgba(255, 255, 255, 0.015)" : "rgba(5, 7, 12, 0.03)"}
          baseColor={isDarkTheme ? "rgba(244, 247, 251, <alpha>)" : "rgba(11, 15, 23, <alpha>)"}
          formationDurationMs={particleFormationDuration}
          className="absolute inset-0"
          interactive
        />
      </motion.div>

      <motion.div
        data-processium-logo-transition
        initial={false}
        animate={
          isExiting
            ? {
                opacity: 1,
                scale: brandTarget.scale,
                x: brandTarget.x,
                y: brandTarget.y,
                filter: "blur(0px)",
              }
            : {
                opacity: isWordResolved ? 1 : 0,
                scale: isWordResolved ? 1 : 0.985,
                x: 0,
                y: 0,
                filter: isWordResolved ? "blur(0px)" : "blur(10px)",
            }
        }
        transition={{
          duration: isExiting ? brandTravelDuration : solidWordRevealDuration,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-1/2 top-[47%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{ width: `${brandGhostWidth}px` }}
      >
        <motion.span
          initial={false}
          animate={
            isExiting
              ? {
                  marginRight: 12,
                  opacity: 1,
                  width: 30,
                }
              : {
                  marginRight: 0,
                  opacity: 0,
                  width: 0,
                }
          }
          transition={{ duration: logoRevealDuration, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-8 items-center overflow-hidden"
        >
          <img
            src={logoMark}
            alt=""
            className="h-8 w-8 object-contain"
          />
        </motion.span>

        <span
          className="block whitespace-nowrap font-[700] uppercase leading-none text-transparent"
          style={{
            backgroundImage: isDarkTheme
              ? `linear-gradient(90deg, #f3f6fb 0%, #f3f6fb ${resolvedWordLayout.accentSplitPercent}%, #4e9bff ${resolvedWordLayout.accentSplitPercent}%, #4e9bff 100%)`
              : `linear-gradient(90deg, #0b0f17 0%, #0b0f17 ${resolvedWordLayout.accentSplitPercent}%, #1473e6 ${resolvedWordLayout.accentSplitPercent}%, #1473e6 100%)`,
            backgroundClip: "text",
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: `${resolvedWordLayout.fontSize}px`,
            WebkitBackgroundClip: "text",
            textShadow: isWordResolved
              ? isDarkTheme
                ? "0 0 22px rgba(78,155,255,0.18)"
                : "0 0 18px rgba(20,115,230,0.12)"
              : "none",
          }}
        >
          {INTRO_WORD}
        </span>
      </motion.div>

      <div className={`relative z-10 flex h-full flex-col justify-between p-5 md:p-8 ${isDarkTheme ? "text-[#f3f6fb]" : "text-[#111318]"}`}>
        <div className="flex items-start justify-between gap-6">
          <div className={`border-l pl-4 ${isDarkTheme ? "border-white/14" : "border-[#cbd5e4]"}`}>
            <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${isDarkTheme ? "text-[#9fb0c9]" : "text-[#667085]"}`}>
              Processium
            </p>
            <p className={`mt-2 text-[0.92rem] leading-6 ${isDarkTheme ? "text-[#b4c1d4]" : "text-[#526073]"}`}>Systèmes sur mesure pour transformer les opérations</p>
          </div>
          <p className={`hidden text-[0.72rem] font-semibold uppercase tracking-[0.14em] sm:block ${isDarkTheme ? "text-[#9fb0c9]" : "text-[#667085]"}`}>
            Entrée du site
          </p>
        </div>

        <div className="grid gap-4 self-start pb-6 md:pb-10">
          <p className={`max-w-[28rem] text-[0.92rem] leading-7 md:text-[1rem] ${isDarkTheme ? "text-[#b4c1d4]" : "text-[#526073]"}`}>
            Automatisations ciblées, outils internes et workflows structurés pour simplifier l'exécution et améliorer la fluidité opérationnelle.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
