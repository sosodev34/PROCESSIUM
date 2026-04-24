import * as React from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "./ui/utils";

interface ParticleDot {
  alpha: number;
  radius: number;
  targetX: number;
  targetY: number;
  tint: "accent" | "base";
  vx: number;
  vy: number;
  x: number;
  y: number;
}

interface ParticleWordFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  accentColor?: string;
  accentFrequency?: number;
  accentStartIndex?: number | null;
  alphaMinAccent?: number;
  alphaMinBase?: number;
  backgroundFill?: string | null;
  baseColor?: string;
  formationDurationMs?: number;
  interactive?: boolean;
  maxFontSize?: number;
  minFontSize?: number;
  pointerRadius?: number;
  sampleStep?: number;
  targetWidthRatio?: number;
  targetYRatio?: number;
  word?: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeInPower(value: number, power: number) {
  return value ** power;
}

function createTextDots({
  accentStartIndex,
  height,
  maxFontSize,
  minFontSize,
  sampleStep,
  targetWidthRatio,
  targetYRatio,
  text,
  width,
}: {
  accentStartIndex?: number | null;
  height: number;
  maxFontSize: number;
  minFontSize: number;
  sampleStep: number;
  targetWidthRatio: number;
  targetYRatio: number;
  text: string;
  width: number;
}) {
  const offscreenCanvas = document.createElement("canvas");
  const context = offscreenCanvas.getContext("2d");

  if (!context) return [];

  offscreenCanvas.width = width;
  offscreenCanvas.height = height;

  let fontSize = Math.min(width * 0.14, height * 0.26, maxFontSize);
  context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;

  while (context.measureText(text).width > width * targetWidthRatio && fontSize > minFontSize) {
    fontSize *= 0.94;
    context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;
  }

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `700 ${fontSize}px Inter, Arial, sans-serif`;
  context.fillText(text, width / 2, height * targetYRatio);

  const fullTextWidth = context.measureText(text).width;
  const accentPrefix = accentStartIndex ? text.slice(0, accentStartIndex) : "";
  const accentSplitX =
    accentStartIndex && accentStartIndex > 0 && accentStartIndex < text.length
      ? width / 2 - fullTextWidth / 2 + context.measureText(accentPrefix).width
      : null;
  const pixels = context.getImageData(0, 0, width, height).data;
  const dots: Array<{ x: number; y: number; tint?: "accent" | "base" }> = [];

  for (let y = 0; y < height; y += sampleStep) {
    for (let x = 0; x < width; x += sampleStep) {
      const alpha = pixels[(y * width + x) * 4 + 3];
      if (alpha > 10) {
        dots.push({
          x,
          y,
          tint: accentSplitX !== null && x >= accentSplitX ? "accent" : "base",
        });
      }
    }
  }

  return dots;
}

function createParticleDots(
  targets: Array<{ x: number; y: number; tint?: "accent" | "base" }>,
  width: number,
  height: number,
  accentFrequency: number
) {
  return targets.map((target, index) => {
    const fromEdge = Math.random();
    const horizontal = Math.random() > 0.5;
    const baseX =
      fromEdge > 0.42
        ? horizontal
          ? Math.random() * width
          : Math.random() > 0.5
            ? width + Math.random() * 120
            : -Math.random() * 120
        : width / 2 + Math.cos(index * 0.06) * (width * 0.34 + Math.random() * 110);
    const baseY =
      fromEdge > 0.42
        ? horizontal
          ? Math.random() > 0.5
            ? height + Math.random() * 120
            : -Math.random() * 120
          : Math.random() * height
        : height / 2 + Math.sin(index * 0.06) * (height * 0.28 + Math.random() * 70);

    return {
      alpha: 0.18 + Math.random() * 0.52,
      radius: 0.7 + Math.random() * 1.2,
      targetX: target.x,
      targetY: target.y,
      tint: target.tint ?? (index % accentFrequency === 0 ? "accent" : "base"),
      vx: 0,
      vy: 0,
      x: baseX,
      y: baseY,
    } satisfies ParticleDot;
  });
}

export function ParticleWordField({
  accentColor = "rgba(20, 115, 230, <alpha>)",
  accentFrequency = 4,
  accentStartIndex = null,
  alphaMinAccent = 0.36,
  alphaMinBase = 0.24,
  backgroundFill = null,
  baseColor = "rgba(8, 11, 18, <alpha>)",
  className,
  formationDurationMs = 3600,
  interactive = true,
  maxFontSize = 156,
  minFontSize = 48,
  pointerRadius = 124,
  sampleStep,
  targetWidthRatio = 0.8,
  targetYRatio = 0.47,
  word = "PROCESSIUM",
  ...props
}: ParticleWordFieldProps) {
  const prefersReducedMotion = useReducedMotion();
  const animationRef = React.useRef<number>(0);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const dotsRef = React.useRef<ParticleDot[]>([]);
  const formationStartRef = React.useRef(0);
  const pointerRef = React.useRef({ active: false, x: 0, y: 0 });
  const sizeRef = React.useRef({ height: 1, width: 1 });

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!container || !canvas || !context) return undefined;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      sizeRef.current = { height, width };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const resolvedSampleStep = sampleStep ?? (width < 640 ? 8 : width < 980 ? 7 : 6);
      const targets = createTextDots({
        accentStartIndex,
        height,
        maxFontSize,
        minFontSize,
        sampleStep: resolvedSampleStep,
        targetWidthRatio,
        targetYRatio,
        text: word,
        width,
      });

      dotsRef.current = createParticleDots(targets, width, height, accentFrequency);
      formationStartRef.current = performance.now();
    };

    const render = () => {
      const { width, height } = sizeRef.current;
      const pointer = pointerRef.current;
      const formationElapsed = performance.now() - formationStartRef.current;
      const linearProgress = prefersReducedMotion ? 1 : clamp(formationElapsed / formationDurationMs, 0, 1);
      const formationProgress = prefersReducedMotion ? 1 : easeInPower(linearProgress, 1.85);
      const accelerationPhase = prefersReducedMotion ? 1 : easeInPower(clamp((linearProgress - 0.54) / 0.46, 0, 1), 1.65);
      const attractionStrength = 0.0015 + formationProgress * 0.0054 + accelerationPhase * 0.015;
      const velocityRetention = 0.8 + formationProgress * 0.03;
      const snapStrength = accelerationPhase * 0.09;

      context.clearRect(0, 0, width, height);

      if (backgroundFill) {
        context.fillStyle = backgroundFill;
        context.fillRect(0, 0, width, height);
      }

      dotsRef.current.forEach((dot, index) => {
        const dx = dot.targetX - dot.x;
        const dy = dot.targetY - dot.y;
        let forceX = dx * attractionStrength;
        let forceY = dy * attractionStrength;

        if (interactive && pointer.active) {
          const distanceX = dot.x - pointer.x;
          const distanceY = dot.y - pointer.y;
          const distance = Math.hypot(distanceX, distanceY) || 1;

          if (distance < pointerRadius) {
            const repulsion = (pointerRadius - distance) / pointerRadius;
            forceX += (distanceX / distance) * repulsion * 1.8;
            forceY += (distanceY / distance) * repulsion * 1.8;
          }
        }

        dot.vx = dot.vx * velocityRetention + forceX;
        dot.vy = dot.vy * velocityRetention + forceY;
        dot.x += dot.vx + dx * snapStrength;
        dot.y += dot.vy + dy * snapStrength;

        const alpha = clamp(
          dot.alpha + Math.abs(dx + dy) * 0.0002,
          dot.tint === "accent" ? alphaMinAccent : alphaMinBase,
          1
        );
        const radius = dot.radius + (dot.tint === "accent" ? 0.18 : 0) + (index % 17 === 0 ? 0.32 : 0);

        context.fillStyle = (dot.tint === "accent" ? accentColor : baseColor).replace("<alpha>", alpha.toFixed(3));
        context.beginPath();
        context.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        context.fill();
      });

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    const observer = new ResizeObserver(() => {
      resize();
      render();
    });

    const handlePointerMove = (event: PointerEvent) => {
      if (!interactive) return;

      const rect = container.getBoundingClientRect();
      pointerRef.current.active = true;
      pointerRef.current.x = event.clientX - rect.left;
      pointerRef.current.y = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    observer.observe(container);
    resize();
    render();

    if (interactive) {
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();

      if (interactive) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [
    accentColor,
    accentFrequency,
    accentStartIndex,
    alphaMinAccent,
    alphaMinBase,
    backgroundFill,
    baseColor,
    interactive,
    maxFontSize,
    minFontSize,
    pointerRadius,
    prefersReducedMotion,
    sampleStep,
    targetWidthRatio,
    targetYRatio,
    formationDurationMs,
    word,
  ]);

  return (
    <div ref={containerRef} className={cn("relative isolate overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
    </div>
  );
}
