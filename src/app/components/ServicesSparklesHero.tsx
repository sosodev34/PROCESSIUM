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
        "relative flex min-h-[230px] w-full flex-col items-center justify-center overflow-hidden bg-[#05070d] px-5 py-10 sm:min-h-[270px] md:min-h-[320px] lg:min-h-[360px]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,115,230,0.24),transparent_34%),linear-gradient(180deg,rgba(5,7,13,0),rgba(5,7,13,0.72))]" />
      <div className="relative z-20 mx-auto max-w-[42rem] text-center">
        <p className="inline-flex items-center justify-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-white/58 md:text-[0.78rem]">
          <span className="h-px w-8 bg-[#4b9cff]" />
          Systèmes sur mesure
          <span className="h-px w-8 bg-[#4b9cff]" />
        </p>
        <h2 className="mt-4 text-[1.8rem] font-[300] leading-[1.05] text-white sm:text-[2.25rem] md:text-[3rem] lg:text-[3.55rem]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[36rem] text-[0.94rem] leading-7 text-white/68 md:text-[1rem] md:leading-8">
          {copy}
        </p>
      </div>

      <div className="relative z-10 mt-4 h-20 w-[16rem] max-w-full sm:h-24 sm:w-[21rem] md:h-28 md:w-[26rem] lg:h-32 lg:w-[34rem]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1000}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-[1px] w-full bg-transparent blur-sm sm:w-[24rem] md:w-[30rem] lg:w-[34rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#2b7fff] to-transparent" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-px w-full bg-transparent sm:w-[24rem] md:w-[30rem] lg:w-[34rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#4b9cff] to-transparent" />
        </div>

        <div className="absolute inset-0 h-full w-full bg-[#05070d] [mask-image:radial-gradient(230px_140px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(300px_180px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
