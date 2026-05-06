import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ServicesSparklesHero } from "../components/ServicesSparklesHero";
import { ServicesTechStackSection } from "../components/ServicesTechStackSection";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const heroImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=82";

const services = [
  {
    title: "Automatisation de workflows",
    copy: "Fiabiliser les séquences récurrentes, réduire les interventions manuelles et accélérer l'exécution.",
  },
  {
    title: "Outils internes et micro-logiciels",
    copy: "Développer des applications ciblées qui traduisent les règles métier et structurent le travail des équipes.",
  },
  {
    title: "Intégrations logicielles",
    copy: "Relier les systèmes pour fluidifier l'information, réduire les ressaisies et fiabiliser les échanges.",
  },
  {
    title: "Reporting et opérations de données",
    copy: "Structurer la collecte, la transformation et la restitution des données pour renforcer le reporting et le pilotage.",
  },
  {
    title: "Optimisation de processus assistée par IA",
    copy: "Mobiliser l'IA lorsque son apport est concret: analyse documentaire, extraction d'information, classification ou synthèse.",
  },
];

const serviceImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=82",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=82",
];

const serviceLineAccents = [
  "from-[#1473e6] to-[#86b9ff]",
  "from-[#1fa89a] to-[#9de2da]",
  "from-[#34506a] to-[#b1c3d6]",
  "from-[#1263c6] to-[#8ec1ff]",
  "from-[#156084] to-[#8fd0eb]",
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
  const compactMotion = useCompactMotion();

  const hiddenState =
    compactMotion
      ? { opacity: 0, y: Math.min(distance * 0.7, 22), scale: 1 }
      : from === "left"
      ? { opacity: 0, x: -distance, scale: zoom ? 1.02 : 1 }
      : from === "right"
        ? { opacity: 0, x: distance, scale: zoom ? 1.02 : 1 }
        : { opacity: 0, y: distance * 0.8, scale: zoom ? 1.02 : 1 };

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
      viewport={{ once: false, amount: compactMotion ? 0.16 : 0.24, margin: compactMotion ? "0px 0px -4% 0px" : "0px 0px -6% 0px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: compactMotion ? 0.48 : zoom ? 0.7 : 0.62,
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

export function ServicesPage() {
  useDocumentMeta(
    "Services | Automatisation, outils internes et systèmes sur mesure",
    "Découvrez les services Processium: une offre conçue pour simplifier les processus, sécuriser les flux et renforcer la qualité d'exécution.",
    {
      image: heroImage,
      keywords: [
        "services automatisation",
        "développement outils internes",
        "intégration systèmes",
        "workflow entreprise",
      ],
      schema: {
        "@type": "Service",
        name: "Services Processium",
        provider: {
          "@type": "Organization",
          name: "Processium",
        },
        serviceType: "Automatisation, systèmes sur mesure et structuration des flux",
        areaServed: "France",
      },
    }
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pt-[118px] md:pt-[132px]">
        <div className="relative overflow-visible bg-[#f7f8fb]">
          <div className="relative h-[320px] overflow-hidden md:h-[400px] lg:h-[440px]">
            <img
              src={heroImage}
              alt="Interface numérique et environnement de travail illustrant la conception de services opérationnels sur mesure."
              className="h-full w-full object-cover object-[50%_44%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,37,0.10),rgba(10,21,37,0.46))]" />
          </div>

          <SiteContainer className="relative">
            <div className="-mt-20 mb-8 max-w-[40rem] bg-[linear-gradient(225deg,#1473e6,#0d4b91)] px-5 py-5 text-white shadow-[0_25px_100px_rgba(0,0,0,0.15)] md:-mt-28 md:px-6 md:py-6 lg:-mt-32 lg:px-7">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/72">Services</p>
              <h1 className="mt-3 max-w-[13ch] text-[1.75rem] font-[300] leading-[1.05] md:text-[2.2rem] lg:text-[2.5rem]">
                Des services conçus pour fluidifier l'exécution.
              </h1>
              <p className="mt-3 max-w-[44ch] text-[0.94rem] leading-6 text-white/82">
                Processium conçoit des automatisations, outils internes et intégrations pour rendre les opérations plus fiables.
              </p>
            </div>
          </SiteContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#05070d] py-8 md:py-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,115,230,0.24),transparent_34%),linear-gradient(180deg,rgba(5,7,13,0),rgba(5,7,13,0.72))]"></div>
        <SiteContainer className="relative z-10">
          <ServicesSparklesHero />
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-7 md:py-10 lg:py-12">
        <SiteContainer>
          <div className="grid gap-0 border-t border-[#dfe5ee]">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-4 border-b border-[#dfe5ee] py-5 md:gap-5 md:py-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(220px,0.42fr)] lg:items-center"
              >
                <div className="grid gap-3 sm:gap-4">
                  <ServicesRevealItem from={index % 2 === 0 ? "left" : "right"} delay={index * 0.03}>
                    <p className="inline-flex w-fit items-center text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[#526073] md:text-[0.78rem]">
                      Service
                    </p>
                    <span className={`mb-3 block h-px w-14 bg-gradient-to-r ${serviceLineAccents[index]}`} />
                    <h2 className="max-w-[18ch] text-[1.2rem] font-[650] leading-[1.12] text-[#111318] md:text-[1.42rem] lg:text-[1.62rem]">
                      {service.title}
                    </h2>
                    <p className="mt-2.5 max-w-[62ch] text-[0.88rem] leading-6 text-[#526073] md:text-[0.92rem] md:leading-6">
                      {service.copy}
                    </p>
                  </ServicesRevealItem>
                </div>

                <ServicesRevealItem
                  className="lg:justify-self-end"
                  from={index % 2 === 0 ? "right" : "left"}
                  zoom
                  delay={index * 0.04}
                >
                  <figure className="w-full overflow-hidden rounded-[14px] border border-[#dbe4f0] bg-white shadow-[0_16px_32px_rgba(17,24,39,0.06)] lg:max-w-[19.5rem]">
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="aspect-[1.6/1] h-full w-full object-cover sm:aspect-[1.48/1]"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </ServicesRevealItem>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-7 md:py-10 lg:py-12">
        <SiteContainer>
          <ServicesTechStackSection />
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-7 md:py-10 lg:py-12">
        <SiteContainer>
          <div className="grid gap-6 border-t border-[#dfe5ee] pt-6 lg:grid-cols-[0.4fr_0.6fr] lg:gap-8 lg:pt-8">
            <ServicesRevealItem from="left">
              <p className="max-w-lg text-[0.9rem] leading-6 text-[#526073] md:text-[0.94rem] md:leading-7">
                Analyse du besoin, conception technique et mise en oeuvre sont adaptées au processus concerné.
              </p>
            </ServicesRevealItem>

            <div className="grid gap-3 sm:grid-cols-2 sm:pl-2 lg:pl-4">
              {deliverables.map((item, index) => (
                <ServicesRevealItem key={item} from={index % 2 === 0 ? "right" : "left"} delay={index * 0.03}>
                  <div className="rounded-[14px] border border-[#dfe5ee] bg-white px-4 py-4 text-[0.92rem] font-semibold leading-6 text-[#111318] shadow-[0_12px_26px_rgba(17,24,39,0.04)] md:text-[0.95rem]">
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
