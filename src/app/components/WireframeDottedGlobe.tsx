import * as React from "react";
import { cn } from "./ui/utils";

interface GlobePoint {
  lat: number;
  lon: number;
}

interface ProjectedPoint {
  alpha: number;
  depth: number;
  visible: boolean;
  x: number;
  y: number;
}

interface WireframeDottedGlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  decorative?: boolean;
  dotColor?: string;
  glowColor?: string;
  lineColor?: string;
  ringColor?: string;
}

const radians = Math.PI / 180;

const dots: GlobePoint[] = Array.from({ length: 17 }, (_, latIndex) => {
  const lat = -64 + latIndex * 8;
  return Array.from({ length: 45 }, (_, lonIndex) => ({
    lat,
    lon: lonIndex * 8,
  }));
}).flat();

const latitudeLines = [-56, -40, -24, -8, 8, 24, 40, 56].map((lat) =>
  Array.from({ length: 121 }, (_, index) => ({ lat, lon: index * 3 }))
);

const longitudeLines = Array.from({ length: 12 }, (_, index) => {
  const lon = index * 30;
  return Array.from({ length: 65 }, (_, latIndex) => ({
    lat: -80 + latIndex * 2.5,
    lon,
  }));
});

const signalPaths: GlobePoint[][] = [
  [
    { lat: 49, lon: 2 },
    { lat: 43, lon: 24 },
    { lat: 34, lon: 58 },
    { lat: 25, lon: 96 },
  ],
  [
    { lat: 40, lon: -74 },
    { lat: 48, lon: -18 },
    { lat: 51, lon: 2 },
    { lat: 47, lon: 31 },
  ],
  [
    { lat: -23, lon: -46 },
    { lat: -5, lon: -18 },
    { lat: 22, lon: 12 },
    { lat: 35, lon: 42 },
  ],
];

function projectPoint(
  point: GlobePoint,
  rotation: number,
  radius: number,
  centerX: number,
  centerY: number,
  pointerX: number,
  pointerY: number
): ProjectedPoint {
  const phi = point.lat * radians;
  const theta = (point.lon + rotation) * radians;
  let x = Math.cos(phi) * Math.cos(theta);
  let y = Math.sin(phi);
  let z = Math.cos(phi) * Math.sin(theta);
  const tiltX = -0.22 + pointerY * 0.12;
  const tiltY = pointerX * 0.18;

  const tiltedY = y * Math.cos(tiltX) - z * Math.sin(tiltX);
  const tiltedZ = y * Math.sin(tiltX) + z * Math.cos(tiltX);
  const tiltedX = x * Math.cos(tiltY) + tiltedZ * Math.sin(tiltY);
  const finalZ = -x * Math.sin(tiltY) + tiltedZ * Math.cos(tiltY);

  x = tiltedX;
  y = tiltedY;
  z = finalZ;

  const depth = (z + 1) / 2;
  const perspective = 0.82 + depth * 0.18;

  return {
    alpha: Math.max(0.05, Math.min(1, depth)),
    depth,
    visible: z > -0.64,
    x: centerX + x * radius * perspective,
    y: centerY + y * radius * 0.82 * perspective,
  };
}

function drawSegmentedLine(
  context: CanvasRenderingContext2D,
  points: GlobePoint[],
  rotation: number,
  radius: number,
  centerX: number,
  centerY: number,
  pointerX: number,
  pointerY: number,
  color: string,
  alphaMultiplier: number,
  lineWidth: number
) {
  context.lineWidth = lineWidth;

  for (let index = 1; index < points.length; index += 1) {
    const start = projectPoint(points[index - 1], rotation, radius, centerX, centerY, pointerX, pointerY);
    const end = projectPoint(points[index], rotation, radius, centerX, centerY, pointerX, pointerY);

    if (!start.visible || !end.visible) continue;

    const alpha = Math.min(0.48, ((start.alpha + end.alpha) / 2) * alphaMultiplier);
    context.strokeStyle = color.replace("<alpha>", alpha.toFixed(3));
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
  }
}

export function WireframeDottedGlobe({
  className,
  decorative = false,
  dotColor = "rgba(215, 232, 255, <alpha>)",
  glowColor = "rgba(126, 171, 255, <alpha>)",
  lineColor = "rgba(139, 183, 255, <alpha>)",
  ringColor = "rgba(215, 232, 255, <alpha>)",
  ...props
}: WireframeDottedGlobeProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!container || !canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = motionQuery.matches;
    const bounds = { height: 1, width: 1 };
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let frame = 0;
    let rotation = 16;

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
    };

    const render = () => {
      const centerX = bounds.width * 0.5;
      const centerY = bounds.height * 0.48;
      const radius = Math.min(bounds.width, bounds.height) * 0.37;

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      context.clearRect(0, 0, bounds.width, bounds.height);

      const glow = context.createRadialGradient(centerX, centerY, radius * 0.08, centerX, centerY, radius * 1.18);
      glow.addColorStop(0, glowColor.replace("<alpha>", "0.18"));
      glow.addColorStop(0.62, glowColor.replace("<alpha>", "0.045"));
      glow.addColorStop(1, glowColor.replace("<alpha>", "0"));
      context.fillStyle = glow;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.18, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = ringColor.replace("<alpha>", "0.16");
      context.lineWidth = 1;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.01, 0, Math.PI * 2);
      context.stroke();

      latitudeLines.forEach((line) =>
        drawSegmentedLine(context, line, rotation, radius, centerX, centerY, pointer.x, pointer.y, lineColor, 0.18, 0.72)
      );
      longitudeLines.forEach((line) =>
        drawSegmentedLine(context, line, rotation, radius, centerX, centerY, pointer.x, pointer.y, lineColor, 0.15, 0.72)
      );

      dots.forEach((dot, index) => {
        const projected = projectPoint(dot, rotation, radius, centerX, centerY, pointer.x, pointer.y);
        if (!projected.visible || index % 2 !== 0) return;

        context.fillStyle = dotColor.replace("<alpha>", (0.16 + projected.alpha * 0.56).toFixed(3));
        context.beginPath();
        context.arc(projected.x, projected.y, 0.74 + projected.depth * 0.92, 0, Math.PI * 2);
        context.fill();
      });

      signalPaths.forEach((path, pathIndex) => {
        context.lineWidth = 1.25;
        context.setLineDash([7, 9]);
        context.lineDashOffset = -(rotation * 0.34 + pathIndex * 5);
        context.strokeStyle = `rgba(255, 255, 255, ${0.24 + pathIndex * 0.035})`;
        context.beginPath();

        path.forEach((point, pointIndex) => {
          const projected = projectPoint(point, rotation, radius, centerX, centerY, pointer.x, pointer.y);
          if (pointIndex === 0) {
            context.moveTo(projected.x, projected.y);
          } else {
            context.lineTo(projected.x, projected.y);
          }
        });

        context.stroke();
      });
      context.setLineDash([]);

      rotation += prefersReducedMotion ? 0 : 0.09;
    };

    const animate = () => {
      render();

      if (!prefersReducedMotion) {
        frame = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    };

    const observer = new ResizeObserver(() => {
      resizeCanvas();
      render();
    });

    observer.observe(container);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [dotColor, glowColor, lineColor, ringColor]);

  return (
    <div
      ref={containerRef}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "Animated dotted wireframe globe"}
      className={cn("wireframe-dotted-globe relative h-full min-h-[280px] w-full overflow-hidden", className)}
      {...props}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
    </div>
  );
}
