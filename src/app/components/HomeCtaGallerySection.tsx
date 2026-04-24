import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "motion/react";
import { SiteContainer } from "./SiteContainer";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=82",
    alt: "Travail d'équipe autour d'un cadrage opérationnel et d'une coordination concrète.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=82",
    alt: "Environnement de développement et de structuration technique autour de l'automatisation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=82",
    alt: "Technologie matérielle et infrastructure soutenant des systèmes fiables et continus.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=82",
    alt: "Univers visuel de code et de données évoquant l'innovation et les nouveaux usages du numérique.",
  },
];

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3",
  "col-start-1 col-end-2 row-start-2 row-end-4",
  "col-start-1 col-end-2 row-start-4 row-end-6",
  "col-start-2 col-end-3 row-start-3 row-end-5",
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

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.34, margin: "0px 0px -14% 0px" }}
      transition={{
        staggerChildren: 0.16,
        delayChildren: 0.12,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  );
}

function ContainerAnimated({ transition, ...props }: HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : filterVariants}
      transition={{
        ...springTransition,
        duration: 0.34,
        ...transition,
      }}
      {...props}
    />
  );
}

function GalleryGrid({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-[52px_160px_52px_160px_52px] gap-4 md:grid-rows-[56px_185px_56px_185px_56px] ${className}`}
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

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.42, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.46,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-[24px] border border-[#dfe5ee] bg-white shadow-[0_22px_60px_rgba(18,38,63,0.08)] dark:border-white/10 dark:bg-[#121b28] dark:shadow-[0_18px_48px_rgba(0,0,0,0.26)] ${areaClasses[index]}`}
    >
      {children}
    </motion.div>
  );
}

export function HomeCtaGallerySection() {
  return (
    <section className="bg-[#f7f8fb] pb-14 pt-6 dark:bg-[#0b1018] md:pb-20 md:pt-8">
      <SiteContainer>
        <div className="border-t border-[#dfe5ee] pt-8 dark:border-white/10 lg:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,0.4fr)_minmax(0,0.6fr)]">
            <ContainerStagger className="lg:pr-8">
              <ContainerAnimated className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085] dark:text-[#9fb0c9]">
                <span className="h-px w-8 bg-[#1473e6] dark:bg-[#4e9bff]" />
                Échange initial
              </ContainerAnimated>

              <ContainerAnimated className="mt-5 max-w-[11ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] dark:text-white md:text-[2.85rem]">
                Faire avancer un processus prioritaire.
              </ContainerAnimated>

              <ContainerAnimated className="mt-5 max-w-xl text-[1.04rem] font-semibold leading-7 text-[#111318] dark:text-white">
                Un premier échange permet d'identifier le bon périmètre, le bon rythme et la bonne forme de réponse.
              </ContainerAnimated>

              <ContainerAnimated className="mt-5 max-w-xl text-[1rem] leading-8 text-[#526073] dark:text-[#b4c1d4]">
                Nous regardons le besoin, le contexte et les contraintes d'exécution pour qualifier ce qui peut réellement être simplifié, automatisé ou mieux structuré.
              </ContainerAnimated>
            </ContainerStagger>

            <ContainerStagger className="relative lg:pl-8">
              <ContainerAnimated className="pointer-events-none absolute left-[8%] top-[12%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(20,115,230,0.16),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(78,155,255,0.18),transparent_72%)]" />
              <ContainerAnimated className="pointer-events-none absolute bottom-[3%] right-[10%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(20,115,230,0.12),transparent_72%)] dark:bg-[radial-gradient(circle,rgba(78,155,255,0.14),transparent_72%)]" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#e3e9f1] bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(245,248,252,0.88))] p-5 shadow-[0_24px_72px_rgba(18,38,63,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] dark:shadow-[0_26px_70px_rgba(0,0,0,0.24)] md:p-6">
                <GalleryGrid>
                  {galleryItems.map((item, index) => (
                    <GalleryGridCell index={index} key={item.image}>
                      <img
                        className="h-full w-full object-cover object-center"
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.02),rgba(17,19,24,0.22))] dark:bg-[linear-gradient(180deg,rgba(3,6,10,0.06),rgba(3,6,10,0.32))]" />
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
