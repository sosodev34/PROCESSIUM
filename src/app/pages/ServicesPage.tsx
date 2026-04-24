import type * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { PageHeader } from "../components/PageHeader";
import { ServicesSparklesHero } from "../components/ServicesSparklesHero";
import { ServicesTechStackSection } from "../components/ServicesTechStackSection";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const services = [
  {
    title: "Automatisation de workflows",
    copy: "Concevoir des dispositifs d'automatisation pour fiabiliser les séquences récurrentes, réduire les interventions manuelles et accélérer l'exécution.",
  },
  {
    title: "Outils internes et micro-logiciels",
    copy: "Développer des applications ciblées qui traduisent les règles métier, structurent le travail des équipes et s'intègrent à l'environnement existant.",
  },
  {
    title: "Intégrations logicielles",
    copy: "Relier les systèmes pour fluidifier la circulation de l'information, réduire les ressaisies et sécuriser les échanges de données.",
  },
  {
    title: "Reporting et opérations de données",
    copy: "Structurer la collecte, la transformation et la restitution des données afin d'accélérer le reporting et de renforcer le pilotage.",
  },
  {
    title: "Optimisation de processus assistée par IA",
    copy: "Mobiliser l'IA lorsque son apport est concret: traitement documentaire, extraction d'information, classification, synthèse ou préparation d'actions.",
  },
];

const serviceImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=82",
];

const deliverables = [
  "Workflows métier ciblés",
  "Applications internes utiles",
  "Intégrations entre systèmes",
  "Flux de données structurés",
];

type ServicesRevealItemProps = React.ComponentProps<"div"> & {
  delay?: number;
  from?: "left" | "right" | "up";
  zoom?: boolean;
  distance?: number;
};

function ServicesRevealItem({
  children,
  className,
  delay = 0,
  from = "up",
  zoom = false,
  distance = 28,
  ...props
}: ServicesRevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const hiddenState =
    from === "left"
      ? { opacity: 0, x: -distance, scale: zoom ? 1.02 : 1 }
      : from === "right"
        ? { opacity: 0, x: distance, scale: zoom ? 1.02 : 1 }
        : { opacity: 0, y: distance * 0.8, scale: zoom ? 1.02 : 1 };

  const visibleState = from === "left" || from === "right"
    ? { opacity: 1, x: 0, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : hiddenState}
      whileInView={prefersReducedMotion ? undefined : visibleState}
      viewport={{ once: false, amount: 0.24, margin: "0px 0px -6% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: zoom ? 0.7 : 0.62,
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

export function ServicesPage() {
  useDocumentMeta(
    "Services | Processium",
    "Découvrez les services Processium: une offre conçue pour simplifier les processus, sécuriser les flux et améliorer la qualité d'exécution."
  );

  return (
    <>
      <section className="bg-[#05070d] pb-2 pt-[118px] md:pb-4 md:pt-[132px] lg:pb-6">
        <ServicesSparklesHero />
      </section>

      <PageHeader
        className="pt-8 md:pt-10 lg:pt-12"
        eyebrow="Services"
        title="Une offre conçue pour transformer les processus et renforcer l'exécution."
        copy="Processium accompagne les entreprises dans la conception de systèmes sur mesure destinés à simplifier les processus, sécuriser les flux et améliorer la performance opérationnelle."
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.28fr)_minmax(0,0.72fr)]">
            <ServicesRevealItem className="lg:pt-2" from="left">
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Capacités
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[1.8rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.4rem] lg:text-[2.9rem]">
                Une offre pensée pour améliorer le fonctionnement au quotidien.
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Les interventions combinent lecture du processus, construction technique et mise en oeuvre concrète, avec un même objectif: rendre l'exécution plus fluide et plus fiable.
              </p>
            </ServicesRevealItem>

            <div className="grid gap-0 border-t border-[#dfe5ee]">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="grid gap-5 border-b border-[#dfe5ee] py-6 md:gap-6 md:py-8 lg:grid-cols-[72px_minmax(0,0.56fr)_minmax(220px,0.44fr)] lg:items-start"
                >
                  <p className="text-[0.84rem] font-semibold text-[#1473e6]">0{index + 1}</p>

                  <ServicesRevealItem from={index % 2 === 0 ? "left" : "right"} delay={index * 0.03}>
                    <h2 className="max-w-[16ch] text-[1.55rem] font-[650] leading-[1.08] text-[#111318] md:text-[1.85rem] lg:text-[2.1rem]">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[#526073] md:leading-8">{service.copy}</p>
                  </ServicesRevealItem>

                  <ServicesRevealItem from={index % 2 === 0 ? "right" : "left"} zoom delay={index * 0.04}>
                    <figure className="overflow-hidden border border-[#dfe5ee]">
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="aspect-[1.18/1] h-full w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </ServicesRevealItem>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <ServicesTechStackSection />
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 lg:grid-cols-[0.42fr_0.58fr] lg:pt-10">
            <ServicesRevealItem from="left">
              <h2 className="max-w-[12ch] text-[1.8rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.4rem] lg:text-[2.9rem]">
                Une réponse ajustée au besoin réel.
              </h2>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Workflow, application interne, intégration ou flux de données: chaque intervention prend la forme la plus utile pour le processus concerné.
              </p>
            </ServicesRevealItem>

            <div className="grid gap-0 border-t border-[#dfe5ee] sm:grid-cols-2 sm:border-t-0 sm:border-l sm:border-[#dfe5ee] sm:pl-8 lg:pl-10">
              {deliverables.map((item, index) => (
                <ServicesRevealItem key={item} from={index % 2 === 0 ? "right" : "left"} delay={index * 0.03}>
                  <div className="border-b border-[#dfe5ee] py-5 pr-4 text-[1rem] font-semibold leading-7 text-[#111318] sm:mr-6">
                    {item}
                  </div>
                </ServicesRevealItem>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
