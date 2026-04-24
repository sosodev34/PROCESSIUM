import type * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { HomeCtaGallerySection } from "../components/HomeCtaGallerySection";
import { HomeExpertiseDualSlider } from "../components/HomeExpertiseDualSlider";
import { HyperspaceBackground } from "../components/badtz/HyperspaceBackground";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const homeImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82";

const companyOverviewImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=82";

const previewLinks = [
  {
    title: "Services",
    to: "/services",
    copy: "Des systèmes, des automatisations et des intégrations conçus pour soutenir l'exécution.",
  },
  {
    title: "Domaines",
    to: "/domains",
    copy: "Des fonctions où la qualité des flux et de l'information conditionne directement la performance.",
  },
  {
    title: "Méthode",
    to: "/methods",
    copy: "Une démarche structurée pour analyser un besoin, cadrer une réponse et déployer un système durable.",
  },
  {
    title: "Innovation",
    to: "/innovation",
    copy: "Une lecture des technologies émergentes orientée impact métier et transformation.",
  },
];

type ScrollRevealSectionProps = React.ComponentProps<"section"> & {
  delay?: number;
};

type ScrollRevealItemProps = React.ComponentProps<"div"> & {
  delay?: number;
  from?: "left" | "right" | "up";
  zoom?: boolean;
  distance?: number;
};

function ScrollRevealSection({ children, className, delay = 0, ...props }: ScrollRevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 44, scale: 0.985 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.18, margin: "0px 0px -10% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 0.78,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.section>
  );
}

function ScrollRevealItem({
  children,
  className,
  delay = 0,
  from = "up",
  zoom = false,
  distance = 56,
  ...props
}: ScrollRevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const hiddenState =
    from === "left"
      ? { opacity: 0, x: -distance, scale: zoom ? 1.05 : 1 }
      : from === "right"
        ? { opacity: 0, x: distance, scale: zoom ? 1.05 : 1 }
        : { opacity: 0, y: distance * 0.72, scale: zoom ? 1.05 : 1 };

  const visibleState = from === "left" || from === "right"
    ? { opacity: 1, x: 0, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : hiddenState}
      whileInView={prefersReducedMotion ? undefined : visibleState}
      viewport={{ once: false, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: zoom ? 0.92 : 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  useDocumentMeta(
    "Processium | Transformation opérationnelle sur mesure",
    "Processium accompagne les entreprises dans la conception de systèmes sur mesure destinés à simplifier les processus, réduire la charge manuelle et renforcer la qualité d'exécution."
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pb-12 pt-[118px] md:pb-16 md:pt-[132px] lg:pb-20">
        <SiteContainer>
          <div className="grid gap-10 border-t border-[#dfe5ee] pt-8 xl:grid-cols-[minmax(0,0.52fr)_minmax(360px,0.48fr)] xl:items-center">
            <ScrollRevealItem className="grid gap-7" from="left">
              <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Systèmes opérationnels sur mesure
              </p>
              <h1 className="max-w-[13ch] font-[560] leading-[1.03] text-[#111318] text-[1.95rem] sm:text-[2.45rem] md:max-w-[12.2ch] md:text-[3rem] lg:text-[3.55rem]">
                Des systèmes conçus pour transformer l'exécution opérationnelle.
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-[#526073] md:text-[1.08rem] md:leading-8">
                Processium accompagne les entreprises dans la conception d'automatisations, d'outils internes et de dispositifs de données destinés à simplifier les processus, réduire la charge manuelle et renforcer la qualité d'exécution.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ShuffleButton to="/services" className="w-full justify-center sm:w-auto">
                  Découvrir les services
                </ShuffleButton>
                <OpticsButton to="/contact" variant="decorations" className="w-full justify-center sm:w-auto">
                  Contacter Processium
                </OpticsButton>
              </div>

              <div className="mt-3 grid gap-4 border-t border-[#dfe5ee] pt-7 md:grid-cols-3">
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Enjeu</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Réduire la charge manuelle et les ruptures de flux.</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Réponse</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Concevoir des systèmes alignés sur les usages et les priorités.</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Impact</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Renforcer la fiabilité, la vitesse et la visibilité.</p>
                </div>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem className="relative min-h-[320px] overflow-hidden bg-[#e9eef5] md:min-h-[430px] lg:min-h-[500px]" from="right" zoom>
              <img
                src={homeImage}
                alt="Environnement de travail moderne dédié à la coordination d'opérations structurées."
                className="h-full w-full object-cover"
                loading="eager"
              />
            </ScrollRevealItem>
          </div>
        </SiteContainer>
      </section>

      <ScrollRevealSection className="bg-[#f7f8fb] pb-12 md:pb-16 lg:pb-20">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:pt-10">
            <ScrollRevealItem className="lg:pl-4 xl:pl-8" from="left">
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Qui nous sommes
              </p>
              <h2 className="max-w-[12ch] text-[2.2rem] font-[650] leading-[1.02] text-[#111318] md:text-[3.25rem] lg:text-[4rem]">
                Une entreprise focalisée sur la qualité des opérations.
              </h2>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-[#526073]">
                Processium intervient à la croisée des enjeux métier, des flux d'information et des systèmes techniques. Notre ambition est d'aider les organisations à structurer leurs processus critiques avec des solutions lisibles, ciblées et durables.
              </p>
              <div className="mt-7 grid gap-x-8 gap-y-5 border-t border-[#dfe5ee] pt-6 md:grid-cols-3">
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Positionnement</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Transformation opérationnelle sur mesure</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Approche</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Des systèmes alignés sur les usages de l'entreprise</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Ambition</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Des opérations plus fluides, plus fiables et mieux pilotées</p>
                </div>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem className="lg:pl-8 xl:pl-12" from="right" zoom>
              <div className="overflow-hidden bg-[#e9eef5]">
                <img
                  src={companyOverviewImage}
                  alt="Architecture contemporaine traduisant une vision structurée, stable et ambitieuse de l'entreprise."
                  className="aspect-[0.95/1] h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </ScrollRevealItem>
          </div>
        </SiteContainer>
      </ScrollRevealSection>

      <section className="relative overflow-hidden bg-[#03050a] py-12 md:py-16 lg:py-20">
        <HyperspaceBackground
          className="opacity-[0.98] mix-blend-screen"
          originX={0.5}
          originY={0.5}
          starColor="#d7e4ff"
          starCount={320}
          starSize={0.5}
          starSpeed={1.0056}
          starTrailOpacity={0.32}
        />
        <HyperspaceBackground
          className="opacity-[0.56]"
          originX={0.48}
          originY={0.52}
          starColor="#7da6ff"
          starCount={180}
          starSize={0.3}
          starSpeed={1.0032}
          starTrailOpacity={0.22}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,117,220,0.2),transparent_30%),linear-gradient(180deg,rgba(3,5,10,0.36),rgba(3,5,10,0.66))]" />

        <SiteContainer className="relative z-10">
          <div className="xl:hidden">
            <div className="border border-white/10 bg-[rgba(7,12,22,0.68)] p-6 text-white backdrop-blur-sm shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:p-8">
              <p className="border-l-2 border-[#8bb7ff] pl-3 text-[0.78rem] font-semibold uppercase text-white/66">
                Vue d'ensemble
              </p>
              <h2 className="mt-6 max-w-[12ch] text-[2.05rem] font-[650] leading-[1.04] text-white md:text-[3rem]">
                Quatre dimensions structurent l'approche Processium.
              </h2>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-8 text-white/72">
                Offre, domaines d'intervention, méthode et innovation donnent une vue d'ensemble de la manière dont Processium accompagne la transformation opérationnelle.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {previewLinks.map((item) => (
                <div key={item.to}>
                  <Link
                    to={item.to}
                    className="group block border border-white/10 bg-[rgba(7,12,22,0.56)] p-6 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[1.2rem] font-[650] md:text-[1.35rem]">{item.title}</p>
                        <p className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-white/68">{item.copy}</p>
                      </div>
                      <ArrowRight size={18} className="mt-1 shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[720px] xl:block">
            <div className="absolute left-1/2 top-1/2 h-[29rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
            <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
            <div className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7da6ff]/10 blur-3xl" />

            <div className="absolute left-[11%] top-[10%] h-px w-[27%] rotate-[15deg] bg-[linear-gradient(90deg,rgba(125,166,255,0),rgba(125,166,255,0.42),rgba(125,166,255,0))]" />
            <div className="absolute right-[11%] top-[14%] h-px w-[25%] -rotate-[16deg] bg-[linear-gradient(90deg,rgba(125,166,255,0),rgba(125,166,255,0.42),rgba(125,166,255,0))]" />
            <div className="absolute left-[15%] bottom-[15%] h-px w-[24%] -rotate-[18deg] bg-[linear-gradient(90deg,rgba(125,166,255,0),rgba(125,166,255,0.38),rgba(125,166,255,0))]" />
            <div className="absolute right-[12%] bottom-[14%] h-px w-[26%] rotate-[17deg] bg-[linear-gradient(90deg,rgba(125,166,255,0),rgba(125,166,255,0.42),rgba(125,166,255,0))]" />

            <div className="absolute left-1/2 top-1/2 z-10 w-[31rem] -translate-x-1/2 -translate-y-1/2">
              <div className="border border-white/10 bg-[rgba(7,12,22,0.72)] p-8 text-white backdrop-blur-md shadow-[0_32px_100px_rgba(0,0,0,0.32)]">
                <p className="border-l-2 border-[#8bb7ff] pl-3 text-[0.78rem] font-semibold uppercase text-white/66">
                  Vue d'ensemble
                </p>
                <h2 className="mt-6 max-w-[12ch] text-[2.5rem] font-[650] leading-[1.02] text-white">
                  Quatre dimensions structurent l'approche Processium.
                </h2>
                <p className="mt-6 max-w-lg text-[1rem] leading-8 text-white/72">
                  Offre, domaines d'intervention, méthode et innovation donnent une vue d'ensemble de la manière dont Processium accompagne la transformation opérationnelle.
                </p>
              </div>
            </div>

            <div className="absolute left-[2%] top-[5%] z-20 w-[26%]">
              <Link
                to={previewLinks[0].to}
                className="group block border border-white/10 bg-[rgba(7,12,22,0.6)] p-6 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.35rem] font-[650]">{previewLinks[0].title}</p>
                    <p className="mt-3 text-[0.94rem] leading-7 text-white/68">{previewLinks[0].copy}</p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="absolute right-[0%] top-[16%] z-20 w-[26%]">
              <Link
                to={previewLinks[1].to}
                className="group block border border-white/10 bg-[rgba(7,12,22,0.58)] p-6 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.35rem] font-[650]">{previewLinks[1].title}</p>
                    <p className="mt-3 text-[0.94rem] leading-7 text-white/68">{previewLinks[1].copy}</p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="absolute left-[6%] bottom-[2%] z-20 w-[24%]">
              <Link
                to={previewLinks[2].to}
                className="group block border border-white/10 bg-[rgba(7,12,22,0.58)] p-6 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.35rem] font-[650]">{previewLinks[2].title}</p>
                    <p className="mt-3 text-[0.94rem] leading-7 text-white/68">{previewLinks[2].copy}</p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="absolute right-[4%] bottom-[6%] z-20 w-[28%]">
              <Link
                to={previewLinks[3].to}
                className="group block border border-white/10 bg-[rgba(7,12,22,0.62)] p-6 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.35rem] font-[650]">{previewLinks[3].title}</p>
                    <p className="mt-3 text-[0.94rem] leading-7 text-white/68">{previewLinks[3].copy}</p>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>

      <HomeExpertiseDualSlider />

      <HomeCtaGallerySection />
    </>
  );
}
