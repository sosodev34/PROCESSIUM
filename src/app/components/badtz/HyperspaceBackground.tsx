import * as React from "react";
import { cn } from "../ui/utils";

interface HyperspaceBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  starTrailOpacity?: number;
  starSpeed?: number;
  starColor?: string;
  starSize?: number;
  starCount?: number;
  originX?: number;
  originY?: number;
}

interface StarState {
  alpha: number;
  x: number;
  y: number;
  vX: number;
  vY: number;
  size: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalizedHex = hex.replace("#", "").trim();
  const expandedHex = normalizedHex.length === 3
    ? normalizedHex.split("").map((char) => `${char}${char}`).join("")
    : normalizedHex;
  const bigint = Number.parseInt(expandedHex, 16);

  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function randomInRange(max: number, min: number) {
  return Math.random() * (max - min) + min;
}

export function HyperspaceBackground({
  starTrailOpacity = 0.12,
  starSpeed = 1.004,
  starColor = "#8aa6d6",
  starSize = 0.36,
  starCount = 170,
  originX = 0.66,
  originY = 0.45,
  className,
  ...props
}: HyperspaceBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [r, g, b] = React.useMemo(() => hexToRgb(starColor), [starColor]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !container || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = motionQuery.matches;
    const effectiveStarCount = prefersReducedMotion ? Math.min(54, starCount) : starCount;
    const sizeIncrement = 1.006;
    const radians = Math.PI / 180;
    const bounds = { width: 1, height: 1 };
    let animationFrameId = 0;
    let stars: Star[] = [];

    class Star {
      state: StarState;

      constructor() {
        this.state = {
          alpha: 0,
          x: 0,
          y: 0,
          vX: 0,
          vY: 0,
          size: starSize,
        };
        this.reset();
      }

      reset() {
        const angle = randomInRange(360, 0) * radians;
        const vX = Math.cos(angle);
        const vY = Math.sin(angle);
        const travel = Math.random() > 0.48
          ? randomInRange(Math.max(bounds.width, bounds.height), bounds.width * 0.22)
          : randomInRange(bounds.width * 0.24, 0);

        this.state = {
          alpha: randomInRange(0.52, 0.12),
          x: Math.floor(vX * travel) + bounds.width * originX,
          y: Math.floor(vY * travel) + bounds.height * originY,
          vX,
          vY,
          size: starSize,
        };
      }
    }

    const resetStars = () => {
      stars = Array.from({ length: effectiveStarCount }, () => new Star());
    };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      bounds.width = Math.max(1, rect.width);
      bounds.height = Math.max(1, rect.height);

      canvas.width = Math.floor(bounds.width * dpr);
      canvas.height = Math.floor(bounds.height * dpr);
      canvas.style.width = `${bounds.width}px`;
      canvas.style.height = `${bounds.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, bounds.width, bounds.height);
      resetStars();
    };

    const render = () => {
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = `rgba(0, 0, 0, ${1 - starTrailOpacity})`;
      context.fillRect(0, 0, bounds.width, bounds.height);
      context.globalCompositeOperation = "source-over";

      for (const star of stars) {
        const { x, y, size, vX, vY } = star.state;
        const newX = x + vX;
        const newY = y + vY;

        if (newX < 0 || newX > bounds.width || newY < 0 || newY > bounds.height) {
          star.reset();
        } else {
          star.state = {
            ...star.state,
            x: newX,
            y: newY,
            vX: star.state.vX * starSpeed,
            vY: star.state.vY * starSpeed,
            size: size * sizeIncrement,
          };

          context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${star.state.alpha})`;
          context.lineWidth = size;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(star.state.x, star.state.y);
          context.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    resizeCanvas();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [originX, originY, r, g, b, starCount, starSize, starSpeed, starTrailOpacity]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
