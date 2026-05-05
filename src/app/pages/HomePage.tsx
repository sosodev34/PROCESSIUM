import * as React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { HomeCtaGallerySection } from "../components/HomeCtaGallerySection";
import { HomeExpertiseDualSlider } from "../components/HomeExpertiseDualSlider";
import { ImageSplit } from "../components/ImageSplit";
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
    copy: "Des systèmes, automatisations et intégrations conçus pour sécuriser l'exécution.",
  },
  {
    title: "Domaines",
    to: "/domains",
    copy: "Des environnements où la qualité des flux conditionne directement la performance.",
  },
  {
    title: "Méthode",
    to: "/methods",
    copy: "Une démarche structurée pour cadrer, déployer et pérenniser chaque solution.",
  },
  {
    title: "Innovation",
    to: "/innovation",
    copy: "Une lecture des technologies émergentes guidée par l'impact opérationnel.",
  },
];

const clientTrustItems = [
  {
    title: "Confiance",
    copy: "Un cadre clair, confidentiel et transparent à chaque étape du projet.",
  },
  {
    title: "Continuité",
    copy: "Des solutions conçues pour durer, évoluer et rester maîtrisées.",
  },
  {
    title: "Engagement",
    copy: "Une attention constante portée aux priorités métier et aux résultats attendus.",
  },
];

type ScrollRevealSectionProps = ComponentPropsWithoutRef<"section"> & {
  delay?: number;
};

type ScrollRevealItemProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
  from?: "left" | "right" | "up";
  zoom?: boolean;
  distance?: number;
};

function ScrollRevealSection({ children, className, delay = 0, ...props }: ScrollRevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const compactMotion = useCompactMotion();

  return (
    <motion.section
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: compactMotion ? 22 : 44, scale: compactMotion ? 1 : 0.985 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: compactMotion ? 0.12 : 0.18, margin: compactMotion ? "0px 0px -4% 0px" : "0px 0px -10% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: compactMotion ? 0.56 : 0.78,
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
  const compactMotion = useCompactMotion();

  const hiddenState =
    compactMotion
      ? { opacity: 0, y: Math.min(distance * 0.42, 24), scale: 1 }
      : from === "left"
      ? { opacity: 0, x: -distance, scale: zoom ? 1.05 : 1 }
      : from === "right"
        ? { opacity: 0, x: distance, scale: zoom ? 1.05 : 1 }
        : { opacity: 0, y: distance * 0.72, scale: zoom ? 1.05 : 1 };

  const visibleState = compactMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : from === "left" || from === "right"
    ? { opacity: 1, x: 0, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : hiddenState}
      whileInView={prefersReducedMotion ? undefined : visibleState}
      viewport={{ once: false, amount: compactMotion ? 0.16 : 0.2, margin: compactMotion ? "0px 0px -4% 0px" : "0px 0px -10% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: compactMotion ? 0.52 : zoom ? 0.92 : 0.8,
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

export function HomePage() {
  useDocumentMeta(
    "Processium | Transformation opérationnelle et systèmes sur mesure",
    "Processium accompagne les entreprises dans la conception de systèmes sur mesure pour simplifier les processus, fiabiliser les flux et renforcer l'exécution.",
    {
      image: homeImage,
      keywords: [
        "transformation opérationnelle sur mesure",
        "automatisation workflow",
        "optimisation des processus",
        "outils métiers internes",
      ],
      schema: {
        "@type": "ProfessionalService",
        name: "Processium",
        description:
          "Conception de systèmes opérationnels sur mesure, automatisation des processus et structuration des flux d'information.",
        serviceType: "Transformation opérationnelle et automatisation des processus",
        areaServed: {
          "@type": "Country",
          name: "France",
        },
      },
    }
  );

  return (
    <div className="home-page">
      <section className="bg-[#f7f8fb] pb-10 pt-[96px] md:pb-14 md:pt-[124px] lg:pb-[4.5rem]">
        <SiteContainer>
          <div className="grid border-t border-[#dfe5ee] bg-[#f7f8fb] xl:grid-cols-[minmax(0,0.5fr)_minmax(360px,0.5fr)] xl:items-stretch">
            <ScrollRevealItem className="mx-auto flex w-full max-w-[34rem] flex-col justify-between py-7 text-center sm:px-2 md:min-h-[500px] md:max-w-none md:px-4 md:py-9 md:text-left lg:min-h-[560px] lg:px-6 xl:min-h-[620px]" from="left">
              <div>
                <div className="inline-flex items-center justify-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#667085] md:justify-start md:text-[0.78rem]">
                  <span className="h-px w-8 bg-[#1473e6]" />
                  Accueil
                </div>
                <h1 className="mx-auto mt-5 max-w-[20rem] text-[clamp(1.9rem,9.4vw,2.42rem)] font-[300] leading-[1.1] text-[#111318] [text-wrap:balance] md:mx-0 md:mt-6 md:max-w-[13ch] md:text-[3.35rem] md:leading-[1.02] lg:text-[3.95rem]">
                  Des systèmes conçus pour transformer l'exécution.
                </h1>
              </div>

              <div className="mx-auto mt-7 max-w-[32rem] md:mx-0 md:mt-8 md:max-w-2xl">
                <p className="text-[0.98rem] leading-7 text-[#111318] md:text-[1.05rem] md:leading-8">
                  Processium conçoit des systèmes opérationnels sur mesure pour simplifier les processus, fiabiliser les flux et renforcer la qualité d'exécution.
                </p>
                <p className="mt-4 text-[0.94rem] leading-7 text-[#526073] md:text-[0.98rem] md:leading-8">
                  Automatisation, outils internes et circulation de la donnée sont structurés à partir des usages réels, avec une mise en oeuvre lisible, ciblée et durable.
                </p>

                <div className="mx-auto mt-7 flex max-w-[20rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mx-0 md:mt-8 md:justify-start">
                  <ShuffleButton to="/services" className="w-full justify-center sm:w-auto">
                    Découvrir les services
                  </ShuffleButton>
                  <OpticsButton to="/contact" variant="decorations" className="w-full justify-center hover:translate-y-0 sm:w-auto">
                    Contacter Processium
                  </OpticsButton>
                </div>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem className="mx-auto w-full max-w-[35rem] overflow-hidden md:max-w-none md:pl-4 lg:pl-8 xl:pl-12" from="right" zoom>
              <div className="relative aspect-[1.08/1] min-h-[230px] overflow-hidden sm:aspect-[1.35/1] sm:min-h-[300px] md:min-h-[420px] lg:min-h-[520px] xl:min-h-[620px]">
                <img
                  src={homeImage}
                  alt="Environnement de travail moderne dédié à la coordination d'opérations structurées."
                  className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,37,0.02),rgba(10,21,37,0.24))]" />
              </div>
              <div className="grid gap-0 bg-[#f7f8fb] text-center sm:grid-cols-3 sm:text-left md:-mt-[1px]">
                <div className="border-t border-[#dfe5ee] px-4 py-4 sm:border-r sm:px-5 sm:py-5">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Enjeu</p>
                  <p className="mx-auto mt-2 max-w-[18rem] text-[0.95rem] font-semibold leading-6 text-[#111318] sm:mx-0 sm:mt-3 sm:text-[0.98rem]">Réduire les frictions et les ruptures de flux.</p>
                </div>
                <div className="border-t border-[#dfe5ee] px-4 py-4 sm:border-r sm:px-5 sm:py-5">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Réponse</p>
                  <p className="mx-auto mt-2 max-w-[18rem] text-[0.95rem] font-semibold leading-6 text-[#111318] sm:mx-0 sm:mt-3 sm:text-[0.98rem]">Déployer des systèmes alignés sur les usages.</p>
                </div>
                <div className="border-t border-[#dfe5ee] px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Impact</p>
                  <p className="mx-auto mt-2 max-w-[18rem] text-[0.95rem] font-semibold leading-6 text-[#111318] sm:mx-0 sm:mt-3 sm:text-[0.98rem]">Renforcer la fiabilité, la visibilité et la continuité.</p>
                </div>
              </div>
            </ScrollRevealItem>
          </div>
        </SiteContainer>
      </section>

      <ScrollRevealSection className="bg-[#f7f8fb] pb-12 md:pb-16 lg:pb-20">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 md:gap-10 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:pt-10">
            <ScrollRevealItem className="mx-auto max-w-[34rem] text-center lg:max-w-none lg:pl-4 lg:text-left xl:pl-8" from="left">
              <h2 className="sr-only">Des opérations plus claires, plus fluides et mieux suivies.</h2>
              <p className="max-w-2xl text-[0.97rem] leading-7 text-[#111318] md:text-[1rem] md:leading-8">
                Processium aide les entreprises à organiser leurs processus, leurs outils et leurs flux d'information avec plus de continuité, de visibilité et de maîtrise.
              </p>
              <p className="max-w-2xl text-[0.94rem] leading-7 text-[#526073] md:text-[0.98rem] md:leading-8">
                L'objectif est clair : mieux faire circuler l'information, coordonner les actions et donner aux décideurs une lecture fiable de l'exécution.
              </p>
              <div className="mt-7 grid gap-x-8 gap-y-5 border-t border-[#dfe5ee] pt-6 sm:grid-cols-3">
                <div className="border-t border-[#dfe5ee] pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Positionnement</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Transformation opérationnelle sur mesure</p>
                </div>
                <div className="border-t border-[#dfe5ee] pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Approche</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Des systèmes alignés sur les usages métier</p>
                </div>
                <div className="border-t border-[#dfe5ee] pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Ambition</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Des opérations plus fluides, fiables et pilotées</p>
                </div>
              </div>
            </ScrollRevealItem>

            <div className="lg:pl-8 xl:pl-12">
              <div className="mx-auto max-w-[28rem] bg-[#f7f8fb] pb-10 sm:max-w-[36rem] sm:pb-20 lg:ml-auto lg:mr-0 lg:max-w-[34rem] lg:pb-24 xl:max-w-[38rem]">
                <ImageSplit
                  src={companyOverviewImage}
                  alt="Architecture contemporaine traduisant une vision structurée, stable et ambitieuse de l'entreprise."
                  sections={8}
                  offsetStep={28}
                  initialBorderOpacity={0.34}
                  viewportThreshold={0.34}
                  className="aspect-[1.05/1] h-full w-full sm:aspect-[1.16/1] lg:aspect-[0.98/1]"
                  imageClassName="object-center"
                />
              </div>
            </div>
          </div>
        </SiteContainer>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-[#f7f8fb] pb-12 md:pb-16 lg:pb-20">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 text-center md:pt-10 lg:text-left">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-start">
              <ScrollRevealItem className="mx-auto max-w-[34rem] lg:mx-0 lg:max-w-2xl" from="left">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                  Relation client
                </p>
                <h2 className="mt-4 text-[1.75rem] font-[300] leading-[1.12] text-[#111318] md:text-[2.25rem] lg:text-[2.65rem]">
                  Une relation client fondée sur la confiance.
                </h2>
              </ScrollRevealItem>

              <ScrollRevealItem className="mx-auto grid max-w-[34rem] gap-6 lg:mx-0 lg:max-w-none" from="right">
                <p className="max-w-3xl text-[0.98rem] leading-7 text-[#526073] md:text-[1rem] md:leading-8">
                  Processium accompagne ses clients avec une approche structurée, transparente et orientée résultats. Chaque projet s'inscrit dans une logique de confiance et de continuité.
                </p>

                <div className="grid gap-5 sm:grid-cols-3">
                  {clientTrustItems.map((item) => (
                    <article key={item.title} className="border-t border-[#dfe5ee] pt-5 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                      <span className="mx-auto block h-px w-10 bg-[#1473e6] sm:mx-0" />
                      <h3 className="mt-4 text-[1.1rem] font-[400] leading-[1.2] text-[#111318]">{item.title}</h3>
                      <p className="mt-3 text-[0.94rem] leading-7 text-[#526073]">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </ScrollRevealItem>
            </div>
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
            <div className="border border-white/10 bg-[rgba(7,12,22,0.68)] px-5 py-6 text-center text-white backdrop-blur-sm md:p-8 md:text-left">
              <p className="inline-flex items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white/66 md:text-[0.78rem]">
                <span className="h-px w-8 bg-[#8bb7ff]" />
                Vue d'ensemble
              </p>
              <h2 className="mx-auto mt-5 max-w-[20rem] text-[clamp(1.72rem,8vw,2.12rem)] font-[650] leading-[1.12] text-white [text-wrap:balance] md:mx-0 md:mt-6 md:max-w-[12ch] md:text-[3rem] md:leading-[1.04]">
                Quatre dimensions structurent l'approche Processium.
              </h2>
              <p className="mx-auto mt-5 max-w-[32rem] text-[0.94rem] leading-7 text-white/72 md:mx-0 md:mt-6 md:text-[0.98rem] md:leading-8">
                Offre, domaines d'intervention, méthode et innovation présentent la manière dont Processium accompagne la transformation opérationnelle.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {previewLinks.map((item) => (
                <div key={item.to}>
                  <Link
                    to={item.to}
                    className="group block border border-white/10 bg-[rgba(7,12,22,0.56)] px-5 py-5 text-center text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.04] md:p-6 md:text-left"
                  >
                    <div className="grid gap-4 md:flex md:items-start md:justify-between">
                      <div>
                        <p className="text-[1.2rem] font-[650] md:text-[1.35rem]">{item.title}</p>
                        <p className="mx-auto mt-3 max-w-[30rem] text-[0.94rem] leading-7 text-white/68 md:mx-0 md:text-[0.96rem]">{item.copy}</p>
                      </div>
                      <ArrowRight size={18} className="mx-auto shrink-0 text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1 md:mx-0 md:mt-1" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[680px] xl:block">
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
                  Offre, domaines d'intervention, méthode et innovation présentent la manière dont Processium accompagne la transformation opérationnelle.
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
    </div>
  );
}
