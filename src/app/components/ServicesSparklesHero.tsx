import * as React from "react";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "./ui/utils";

interface ServicesSparklesHeroProps extends React.HTMLAttributes<HTMLDivElement> {
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
        "flex h-[340px] w-full flex-col items-center justify-center overflow-hidden bg-black sm:h-[430px] md:h-[500px] lg:h-[560px]",
        className
      )}
      {...props}
    >
      <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
        {title}
      </h1>
      <div className="relative h-40 w-[40rem] max-w-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1400}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-[1px] w-full bg-transparent blur-sm sm:w-[30rem] md:w-[36rem] lg:w-[40rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#2b7fff] to-transparent" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 m-auto h-px w-full bg-transparent sm:w-[30rem] md:w-[36rem] lg:w-[40rem]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#4b9cff] to-transparent" />
        </div>

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
