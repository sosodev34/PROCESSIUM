import * as React from "react";
import { cn } from "./ui/utils";

interface SiteContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SiteContainer({ className, ...props }: SiteContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-8 lg:px-10", className)} {...props} />;
}
