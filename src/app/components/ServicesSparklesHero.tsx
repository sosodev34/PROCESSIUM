import * as React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "./ui/utils";

interface ServicesSparklesHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  copy?: string;
  title?: string;
}

export function ServicesSparklesHero({
  copy = "Automatiser, relier et structurer les flux qui soutiennent l'exécution quotidienne.",
  title = "Services",
  className,
  ...props
}: ServicesSparklesHeroProps) {
  return (
    <div
      className={cn(
        "relative grid min-h-[250px] w-full items-center gap-8 overflow-hidden px-5 py-8 sm:min-h-[280px] sm:px-7 md:px-9 md:py-10 lg:min-h-[320px] lg:grid-cols-[0.42fr_0.58fr] lg:px-10",
        className
      )}
      {...props}
    >
      <div className="relative z-20 mx-auto max-w-[34rem] text-center lg:mx-0 lg:text-left">
        <p className="inline-flex items-center justify-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/58 md:text-[0.76rem]">
          <span className="h-px w-8 bg-[#4b9cff] lg:w-10" />
          Systèmes sur mesure
        </p>
        <h2 className="mt-4 text-[1.55rem] font-[300] leading-[1.08] text-white sm:text-[2rem] md:text-[2.45rem] lg:text-[2.85rem]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[33rem] text-[0.92rem] leading-7 text-white/66 md:text-[0.98rem] md:leading-8 lg:mx-0">
          {copy}
        </p>
      </div>

      <div className="relative z-10 mx-auto h-24 w-[18rem] max-w-full sm:h-28 sm:w-[24rem] md:h-32 md:w-[30rem] lg:mx-0 lg:ml-auto lg:h-36 lg:w-full lg:max-w-[38rem]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={720}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-[1px] w-full bg-transparent blur-sm sm:w-[24rem] md:w-[30rem] lg:w-full">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#2b7fff] to-transparent" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-px w-full bg-transparent sm:w-[24rem] md:w-[30rem] lg:w-full">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#4b9cff] to-transparent" />
        </div>

        <div className="absolute inset-0 h-full w-full bg-[#05070d] [mask-image:radial-gradient(250px_145px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(340px_190px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
