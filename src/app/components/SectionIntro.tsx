import { motion } from "motion/react";
import { FadeUpWord } from "./badtz/FadeUpWord";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "split";
};

export function SectionIntro({ eyebrow, title, copy, align = "split" }: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={
        align === "split"
          ? "mb-14 grid gap-8 md:mb-20 lg:grid-cols-[0.92fr_0.58fr] lg:items-end"
          : "mb-14 max-w-3xl md:mb-20"
      }
    >
      <div>
        <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
          {eyebrow}
        </p>
        <FadeUpWord as="h2" className="max-w-4xl font-[650] text-[2.38rem] leading-[1.02] text-[#111318] md:text-[3.55rem] lg:text-[4.2rem]">
          {title}
        </FadeUpWord>
      </div>

      {copy ? (
        <p className="max-w-xl text-[1rem] leading-7 text-[#586374] md:text-[1.05rem]">
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}
