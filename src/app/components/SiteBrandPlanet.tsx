import { SiteContainer } from "./SiteContainer";
import { WireframeDottedGlobe } from "./WireframeDottedGlobe";
import { cn } from "./ui/utils";

type SiteBrandPlanetProps = {
  pathname: string;
};

const routeStyles: Record<string, string> = {
  "/": "h-[22rem] w-[22rem] translate-x-[8%] lg:h-[26rem] lg:w-[26rem] xl:h-[32rem] xl:w-[32rem]",
  "/innovation": "h-[20rem] w-[20rem] translate-x-[6%] lg:h-[24rem] lg:w-[24rem] xl:h-[30rem] xl:w-[30rem]",
  "/services": "h-[18rem] w-[18rem] translate-x-[4%] lg:h-[21rem] lg:w-[21rem] xl:h-[25rem] xl:w-[25rem]",
  "/domains": "h-[18rem] w-[18rem] translate-x-[4%] lg:h-[21rem] lg:w-[21rem] xl:h-[25rem] xl:w-[25rem]",
  "/methods": "h-[18rem] w-[18rem] translate-x-[4%] lg:h-[21rem] lg:w-[21rem] xl:h-[25rem] xl:w-[25rem]",
  "/about": "h-[18rem] w-[18rem] translate-x-[4%] lg:h-[21rem] lg:w-[21rem] xl:h-[24rem] xl:w-[24rem]",
  "/contact": "h-[16rem] w-[16rem] translate-x-[4%] lg:h-[19rem] lg:w-[19rem] xl:h-[22rem] xl:w-[22rem]",
};

const routeOpacity: Record<string, string> = {
  "/": "opacity-[0.5]",
  "/innovation": "opacity-[0.46]",
  "/services": "opacity-[0.34]",
  "/domains": "opacity-[0.33]",
  "/methods": "opacity-[0.33]",
  "/about": "opacity-[0.3]",
  "/contact": "opacity-[0.28]",
};

export function SiteBrandPlanet({ pathname }: SiteBrandPlanetProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[124px] z-[5] hidden lg:block" aria-hidden="true">
      <SiteContainer className="relative h-0">
        <div
          className={cn(
            "absolute right-0 top-0",
            routeStyles[pathname] ?? routeStyles["/services"],
            routeOpacity[pathname] ?? routeOpacity["/services"]
          )}
        >
          <div className="absolute inset-[10%] rounded-full border border-[#111318]/14" />
          <div className="absolute inset-[22%] rounded-full border border-[#111318]/10" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(17,19,24,0.08),rgba(247,248,251,0)_68%)]" />
          <WireframeDottedGlobe
            decorative
            className="min-h-0 h-full w-full"
            dotColor="rgba(17, 19, 24, <alpha>)"
            glowColor="rgba(17, 19, 24, <alpha>)"
            lineColor="rgba(17, 19, 24, <alpha>)"
            ringColor="rgba(17, 19, 24, <alpha>)"
          />
        </div>
      </SiteContainer>
    </div>
  );
}
