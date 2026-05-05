import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "motion/react";
import { SiteContainer } from "./SiteContainer";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=82",
    alt: "Travail d'équipe autour d'un cadrage opérationnel et d'une coordination concrète.",
    position: "50% 42%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=82",
    alt: "Environnement de développement et de structuration technique autour de l'automatisation.",
    position: "50% 50%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=82",
    alt: "Technologie matérielle et infrastructure soutenant des systèmes fiables et continus.",
    position: "50% 52%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=82",
    alt: "Univers visuel de code et de données évoquant l'innovation et les nouveaux usages du numérique.",
    position: "50% 46%",
  },
];

const areaClasses = [
  "col-span-2 row-span-2 md:row-span-3 xl:col-span-7 xl:row-span-6",
  "col-span-1 row-span-2 xl:col-start-8 xl:col-span-5 xl:row-span-3",
  "col-span-1 row-span-2 xl:col-start-8 xl:col-span-2 xl:row-start-4 xl:row-span-3",
  "col-span-2 row-span-2 xl:col-start-10 xl:col-span-3 xl:row-start-4 xl:row-span-3",
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
};

const filterVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 26,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

function ContainerStagger({ transition, ...props }: HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();
  const compactMotion = useCompactMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: false, amount: compactMotion ? 0.16 : 0.34, margin: compactMotion ? "0px 0px -4% 0px" : "0px 0px -14% 0px" }}
      transition={{
        staggerChildren: compactMotion ? 0.08 : 0.16,
        delayChildren: compactMotion ? 0.04 : 0.12,
        duration: compactMotion ? 0.22 : 0.3,
        ...transition,
      }}
      {...props}
    />
  );
}

function ContainerAnimated({ transition, ...props }: HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();
  const compactMotion = useCompactMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : compactMotion ? { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } } : filterVariants}
      transition={{
        ...springTransition,
        duration: compactMotion ? 0.26 : 0.34,
        ...transition,
      }}
      {...props}
    />
  );
}

function GalleryGrid({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`grid auto-rows-[104px] grid-cols-2 gap-3 sm:auto-rows-[132px] md:auto-rows-[138px] md:gap-4 xl:grid-cols-12 xl:grid-rows-[repeat(6,minmax(0,72px))] xl:auto-rows-auto ${className}`}
      {...props}
    />
  );
}

function GalleryGridCell({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  const compactMotion = useCompactMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: compactMotion ? 14 : 24, scale: compactMotion ? 1 : 0.97 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: compactMotion ? 0.22 : 0.42, margin: compactMotion ? "0px 0px -4% 0px" : "0px 0px -12% 0px" }}
      transition={{
        duration: compactMotion ? 0.42 : 0.68,
        delay: compactMotion ? index * 0.035 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden border border-[#dfe5ee] bg-[#f7f8fb] dark:border-[#3c414a] dark:bg-[#21252d] ${areaClasses[index]}`}
    >
      {children}
    </motion.div>
  );
}

function useCompactMotion() {
  const [compactMotion, setCompactMotion] = React.useState(() =>
    typeof window === "undefined" ? true : window.matchMedia("(max-width: 767px)").matches,
  );

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setCompactMotion(query.matches);

    handleChange();
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  return compactMotion;
}

export function HomeCtaGallerySection() {
  return (
    <section className="bg-[#f7f8fb] pb-12 pt-6 dark:bg-[#12151d] md:pb-16 md:pt-8">
      <SiteContainer>
        <div className="border-t border-[#dfe5ee] pt-7 dark:border-[#3c414a] md:pt-8 lg:pt-9">
          <div className="grid items-center gap-8 xl:grid-cols-[minmax(280px,0.4fr)_minmax(0,0.6fr)] xl:gap-10">
            <ContainerStagger className="mx-auto max-w-[34rem] text-center xl:mx-0 xl:max-w-none xl:pr-6 xl:text-left">
              <ContainerAnimated className="inline-flex items-center justify-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#667085] dark:text-[#a6acb5] md:text-[0.78rem] xl:justify-start">
                <span className="h-px w-8 bg-[#1473e6] dark:bg-[#3573c0]" />
                Échange initial
              </ContainerAnimated>

              <ContainerAnimated className="mx-auto mt-4 max-w-xl text-[0.97rem] font-semibold leading-7 text-[#111318] dark:text-white md:text-[1rem] xl:mx-0">
                Un premier échange permet de qualifier le périmètre, le rythme et la forme de réponse adaptée.
              </ContainerAnimated>

              <ContainerAnimated className="mx-auto mt-4 max-w-xl text-[0.94rem] leading-7 text-[#526073] dark:text-[#f1f4f7] md:text-[0.98rem] md:leading-8 xl:mx-0">
                Nous analysons le besoin, le contexte et les contraintes d'exécution afin d'identifier ce qui peut être simplifié, automatisé ou mieux structuré.
              </ContainerAnimated>
            </ContainerStagger>

            <ContainerStagger className="relative xl:pl-6">
              <div className="relative bg-[#f7f8fb] dark:bg-[#12151d] md:border md:border-[#e3e9f1] md:p-4 dark:md:border-[#3c414a]">
                <GalleryGrid>
                  {galleryItems.map((item, index) => (
                    <GalleryGridCell index={index} key={item.image}>
                      <img
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        style={{ objectPosition: item.position }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.00),rgba(17,19,24,0.24))] dark:bg-[linear-gradient(180deg,rgba(18,21,29,0.04),rgba(18,21,29,0.34))]" />
                    </GalleryGridCell>
                  ))}
                </GalleryGrid>
              </div>
            </ContainerStagger>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
