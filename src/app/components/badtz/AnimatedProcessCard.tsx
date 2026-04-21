import * as React from "react";
import { cn } from "../ui/utils";

interface AnimatedProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  chips: string[];
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
}

export function AnimatedProcessCard({
  title,
  description,
  chips,
  mainColor = "#2f6fed",
  secondaryColor = "#94a3b8",
  gridColor = "rgba(17, 24, 39, 0.085)",
  className,
  ...props
}: AnimatedProcessCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const titleId = React.useId();
  const descriptionId = React.useId();

  return (
    <div
      role="region"
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={cn(
        "group/animated-card relative overflow-hidden rounded-[8px] border border-[#dce3ee] bg-white shadow-[0_24px_64px_rgba(17,24,39,0.09)] outline-none transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#b9c4d3] focus-visible:ring-2 focus-visible:ring-[#2f6fed]/20",
        className
      )}
      {...props}
    >
      <div className="relative h-[220px] overflow-hidden border-b border-[#dfe5ee] bg-[#f7f9fc]">
        <GridLayer color={gridColor} />
        <MetricLayer hovered={hovered} color={mainColor} secondaryColor={secondaryColor} />
        <CaptionLayer color={mainColor} />
        <FlowLayer color={mainColor} />
        <ChipLayer hovered={hovered} color={mainColor} secondaryColor={secondaryColor} chips={chips} />
        <EllipseGradient color={mainColor} />
      </div>

      <div className="space-y-2 p-5">
        <h3 id={titleId} className="text-[1.16rem] font-semibold leading-tight text-[#111318]">
          {title}
        </h3>
        <p id={descriptionId} className="text-[0.94rem] leading-7 text-[#5d6676]">
          {description}
        </p>
      </div>
    </div>
  );
}

function EllipseGradient({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="420" height="220" fill="url(#processium-animated-card-gradient)" />
        <defs>
          <radialGradient
            id="processium-animated-card-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(210 118) rotate(90) scale(110 210)"
          >
            <stop stopColor={color} stopOpacity="0.22" />
            <stop offset="0.38" stopColor={color} stopOpacity="0.1" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function GridLayer({ color }: { color: string }) {
  return (
    <div
      style={{ "--process-grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,var(--process-grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--process-grid-color)_1px,transparent_1px)] bg-[size:24px_24px] bg-center opacity-80 [mask-image:radial-gradient(ellipse_58%_58%_at_50%_50%,#000_48%,transparent_100%)]"
    />
  );
}

function MetricLayer({
  hovered,
  color,
  secondaryColor,
}: {
  hovered: boolean;
  color: string;
  secondaryColor: string;
}) {
  const [mainProgress, setMainProgress] = React.useState(18);
  const [secondaryProgress, setSecondaryProgress] = React.useState(0);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (hovered) {
      timeout = setTimeout(() => {
        setMainProgress(68);
        setSecondaryProgress(100);
      }, 160);
    } else {
      setMainProgress(18);
      setSecondaryProgress(0);
    }

    return () => clearTimeout(timeout);
  }, [hovered]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const mainDashoffset = circumference - (mainProgress / 100) * circumference;
  const secondaryDashoffset = circumference - (secondaryProgress / 100) * circumference;
  const label = hovered && secondaryProgress > 68 ? secondaryProgress : mainProgress;

  return (
    <div className="absolute left-0 top-0 z-[7] flex h-[440px] w-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.6,0.6,0,1)] group-hover/animated-card:-translate-y-[108px] group-hover/animated-card:scale-110">
      <div className="relative flex h-[126px] w-[126px] items-center justify-center text-[#111318]/12">
        <svg width="126" height="126" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth="10" fill="transparent" opacity={0.22} />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={secondaryColor}
            strokeWidth="13"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={secondaryDashoffset}
            transform="rotate(-90 50 50)"
            style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)" }}
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="13"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={mainDashoffset}
            transform="rotate(-90 50 50)"
            style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[1.22rem] font-semibold text-[#111318]">{label}%</span>
        </div>
      </div>
    </div>
  );
}

function CaptionLayer({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 z-[6] flex translate-y-0 items-start justify-center bg-transparent p-4 transition-transform duration-500 ease-[cubic-bezier(0.6,0.6,0,1)] group-hover/animated-card:translate-y-full">
      <div className="rounded-[6px] border border-[#dce3ee] bg-white/86 px-3 py-2 shadow-[0_12px_28px_rgba(17,24,39,0.08)] backdrop-blur-sm transition-opacity duration-500 group-hover/animated-card:opacity-0">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
          <p className="text-[0.74rem] font-semibold text-[#111318]">Signal repéré</p>
        </div>
        <p className="mt-1 text-[0.72rem] text-[#667085]">Flux prêt à structurer.</p>
      </div>
    </div>
  );
}

function FlowLayer({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 z-[6] flex translate-y-full items-center justify-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.6,0.6,0,1)] group-hover/animated-card:translate-y-0 group-hover/animated-card:opacity-100">
      <svg width="100%" height="100%" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="420" height="220" fill="url(#processium-card-flow)" />
        <defs>
          <linearGradient id="processium-card-flow" x1="210" y1="0" x2="210" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0.34" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChipLayer({
  hovered,
  color,
  secondaryColor,
  chips,
}: {
  hovered: boolean;
  color: string;
  secondaryColor: string;
  chips: string[];
}) {
  const positions = [
    { x: 118, y: 48 },
    { x: 116, y: -48 },
    { x: 0, y: -72 },
    { x: -118, y: -48 },
    { x: -118, y: 48 },
    { x: 0, y: 72 },
  ];

  return (
    <div className="absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.6,0.6,0,1)] group-hover/animated-card:opacity-100">
      {chips.slice(0, 6).map((chip, index) => (
        <div
          key={chip}
          className="absolute flex items-center justify-center gap-1 rounded-[6px] border border-[#dce3ee] bg-white/88 px-2 py-1 shadow-[0_10px_24px_rgba(17,24,39,0.08)] backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.6,0.6,0,1)]"
          style={{
            transform: hovered
              ? `translate(${positions[index]?.x || 0}px, ${positions[index]?.y || 0}px)`
              : "translate(0px, 0px)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: index < 3 ? color : secondaryColor }}
          />
          <span className="text-[0.64rem] font-semibold text-[#111318]">{chip}</span>
        </div>
      ))}
    </div>
  );
}
