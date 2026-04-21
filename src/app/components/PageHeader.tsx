import * as React from "react";
import { SiteContainer } from "./SiteContainer";
import { cn } from "./ui/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  copy: string;
  aside?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, copy, aside, actions, className }: PageHeaderProps) {
  return (
    <section className={cn("bg-[#f7f8fb] pb-12 pt-[118px] md:pb-16 md:pt-[132px] lg:pb-20", className)}>
      <SiteContainer>
        <div className={cn("grid gap-10", aside ? "xl:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] xl:items-end" : "max-w-[1080px]")}>
          <div>
            <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
              {eyebrow}
            </p>
            <h1
              className={cn(
                "font-[650] leading-[0.98] text-[#111318] text-[2.7rem] sm:text-[3.45rem] md:text-[4.25rem] lg:text-[4.9rem]",
                aside ? "max-w-[13ch]" : "max-w-[16ch]"
              )}
            >
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-[#526073] md:text-[1.1rem]">
              {copy}
            </p>
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          </div>

          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </SiteContainer>
    </section>
  );
}
