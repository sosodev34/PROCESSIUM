import * as React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "./ui/utils";

interface ServicesSparklesHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  copy?: string;
  title?: string;
}

export function ServicesSparklesHero({
  title = "Services",
  className,
  ...props
}: ServicesSparklesHeroProps) {
  return (
    <div
      className={cn(
        "flex h-[190px] w-full flex-col items-center justify-center overflow-hidden bg-black sm:h-[240px] md:h-[320px] lg:h-[400px]",
        className
      )}
      {...props}
    >
      <h1 className="relative z-20 text-center text-[1.55rem] font-bold text-white sm:text-[2.1rem] md:text-[3.35rem] lg:text-[5.2rem]">
        {title}
      </h1>
      <div className="relative h-20 w-[16rem] max-w-full sm:h-24 sm:w-[21rem] md:h-28 md:w-[26rem] lg:h-36 lg:w-[34rem]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1000}
          className="h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full [&_canvas]:!pointer-events-none"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-[1px] w-full bg-transparent blur-sm sm:w-[24rem] md:w-[30rem] lg:w-[34rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#2b7fff] to-transparent" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-px w-full bg-transparent sm:w-[24rem] md:w-[30rem] lg:w-[34rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#4b9cff] to-transparent" />
        </div>

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(230px_140px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(300px_180px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
