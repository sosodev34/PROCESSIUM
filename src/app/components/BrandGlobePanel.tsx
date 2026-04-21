import * as React from "react";
import { HyperspaceBackground } from "./badtz/HyperspaceBackground";
import { SiteContainer } from "./SiteContainer";
import { cn } from "./ui/utils";

interface BrandGlobePanelItem {
  label: string;
  value: string;
}

interface BrandGlobePanelProps {
  eyebrow: string;
  title: string;
  copy: string;
  items: BrandGlobePanelItem[];
  compact?: boolean;
  className?: string;
  contained?: boolean;
}

function BrandGlobePanelContent({
  eyebrow,
  title,
  copy,
  items,
  compact = false,
}: Omit<BrandGlobePanelProps, "className" | "contained">) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-[#dfe5ee] bg-white text-[#111318] shadow-[0_30px_90px_rgba(17,24,39,0.08)]",
        compact ? "min-h-[420px]" : "min-h-[520px]"
      )}
    >
      <HyperspaceBackground
        className="hyperspace-brand-panel z-0"
        starColor="#cfe2ff"
        starCount={compact ? 540 : 700}
        starSize={0.62}
        starSpeed={1.01}
        starTrailOpacity={0.42}
        originX={0.58}
        originY={0.48}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(247,248,251,0.1)_0%,rgba(241,244,248,0.68)_58%,rgba(223,229,238,0.92)_100%)]" />
      <div className="absolute right-[8%] top-[10%] z-0 h-[64%] w-[42%] border-l border-[#dfe5ee]" />

      <div
        className={cn(
          "relative z-10 grid h-full gap-8 p-6 md:p-8 lg:p-10",
          compact ? "content-between" : "content-between"
        )}
      >
        <div
          className={cn(
            "grid gap-8",
            compact
              ? "xl:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] xl:items-end"
              : "xl:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] xl:items-end"
          )}
        >
          <div className="max-w-xl">
            <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
              {eyebrow}
            </p>
            <h2 className="mt-6 max-w-[11ch] text-[2.25rem] font-[650] leading-[1] text-[#111318] md:text-[3.2rem] lg:text-[3.85rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-[#586374] md:text-[1.05rem]">
              {copy}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {items.map((item) => (
              <div key={item.label} className="border-l border-[#dfe5ee] bg-[#f7f9fc] px-4 py-5">
                <p className="text-[0.74rem] font-semibold uppercase text-[#1473e6]">{item.label}</p>
                <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrandGlobePanel({
  contained = false,
  className,
  ...props
}: BrandGlobePanelProps) {
  if (contained) {
    return <BrandGlobePanelContent {...props} />;
  }

  return (
    <section className={cn("bg-[#f7f8fb] py-10 md:py-14 lg:py-16", className)}>
      <SiteContainer>
        <BrandGlobePanelContent {...props} />
      </SiteContainer>
    </section>
  );
}
