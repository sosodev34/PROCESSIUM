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
      <div className="relative h-40 w-[40rem]">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
