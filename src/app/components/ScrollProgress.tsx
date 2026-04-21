import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-px w-full origin-left bg-[#1473e6]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
