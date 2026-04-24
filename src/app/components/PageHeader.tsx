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
    <section className={cn("bg-[#f7f8fb] pb-10 pt-[110px] md:pb-14 md:pt-[126px] lg:pb-[4.5rem]", className)}>
      <SiteContainer>
        <div
          className={cn(
            "grid gap-7 border-t border-[#dfe5ee] pt-6 md:gap-9 md:pt-8",
            aside ? "xl:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] xl:items-start" : "xl:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] xl:items-start"
          )}
        >
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              <span className="h-px w-8 bg-[#1473e6]" />
              {eyebrow}
            </p>
            <h1
              className={cn(
                "font-[650] leading-[0.98] text-[#111318] text-[2.2rem] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[4rem]",
                aside ? "max-w-[13ch]" : "max-w-[15ch]"
              )}
            >
              {title}
            </h1>
          </div>

          <div className="grid gap-5 xl:pt-2">
            <p className="max-w-2xl text-[0.98rem] leading-7 text-[#526073] md:text-[1.04rem] md:leading-8">{copy}</p>
            {actions ? <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
            {aside ? <div className="min-w-0">{aside}</div> : null}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
