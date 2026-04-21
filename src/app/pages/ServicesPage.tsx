import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PageHeader } from "../components/PageHeader";
import { ServicesSparklesHero } from "../components/ServicesSparklesHero";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const serviceImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=82";

const services = [
  {
    title: "Automatisation de workflows",
    copy: "Automatiser les séquences opérationnelles récurrentes comme les validations, les relances, les mises à jour de statut, les contrôles, le routage et les logiques d'exécution répétitives.",
  },
  {
    title: "Outils internes et micro-logiciels",
    copy: "Construire des systèmes ciblés pour des équipes internes qui ont besoin d'une interface dédiée, de règles métier précises et d'une exécution fiable sans déployer une plateforme générique.",
  },
  {
    title: "Intégrations logicielles",
    copy: "Connecter les outils existants pour que la donnée circule sans copier-coller, sans retards de rapprochement et sans duplication manuelle.",
  },
  {
    title: "Reporting et opérations de données",
    copy: "Préparer, structurer et distribuer la donnée opérationnelle pour que le reporting soit plus rapide, plus propre et moins dépendant des manipulations tableur.",
  },
  {
    title: "Optimisation de processus assistée par IA",
    copy: "Utiliser l'IA là où elle apporte une vraie valeur pratique: extraction d'information, traitement documentaire, synthèse, catégorisation et préparation des tâches.",
  },
];

const deliverables = [
  "Workflows de validation",
  "Portails opérationnels internes",
  "Pipelines de préparation de données",
  "Outils de traitement documentaire",
];

export function ServicesPage() {
  useDocumentMeta(
    "Services | Processium",
    "Découvrez les services Processium: automatisation de workflow, outils internes, intégrations logicielles, reporting et optimisation opérationnelle assistée par IA."
  );

  return (
    <>
      <section className="bg-[#05070d] pb-2 pt-[118px] md:pb-4 md:pt-[132px] lg:pb-6">
        <ServicesSparklesHero />
      </section>

      <PageHeader
        className="pt-8 md:pt-10 lg:pt-12"
        eyebrow="Services"
        title="Des solutions techniques dessinées autour des workflows réels."
        copy="Processium ne vend pas une stack générique. Chaque intervention part d'un point de blocage opérationnel et se termine par un système technique conçu pour l'entreprise qui l'utilise."
        actions={
          <>
            <ShuffleButton to="/contact">Échanger sur un besoin</ShuffleButton>
            <OpticsButton to="/domains" variant="decorations">
              Voir les domaines
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8 lg:p-9">
                <p className="text-[0.78rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                <h2 className="mt-8 max-w-[14ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[2.45rem]">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">{service.copy}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid overflow-hidden bg-white shadow-[0_28px_80px_rgba(17,24,39,0.07)] xl:grid-cols-[minmax(320px,0.42fr)_minmax(0,0.58fr)]">
            <div className="relative min-h-[280px] bg-[#111318] md:min-h-[380px]">
              <img
                src={serviceImage}
                alt="Équipe numérique coordonnant des systèmes internes structurés."
                className="h-full w-full object-cover opacity-[0.78]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.1),rgba(5,9,18,0.86))]" />
            </div>

            <div className="grid gap-8 p-6 md:p-8 lg:p-10">
              <div>
                <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                  Livrables typiques
                </p>
                <h2 className="mt-6 max-w-[12ch] text-[2.1rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                  Construits pour s'intégrer à l'existant, pas pour tout remplacer d'un coup.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="border-l border-[#dfe5ee] pl-4">
                    <p className="text-[1rem] font-semibold leading-6 text-[#111318]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="max-w-2xl text-[1rem] leading-8 text-[#526073]">
                L'objectif n'est pas d'introduire de la complexité inutile. L'objectif est d'enlever la friction, de fiabiliser le flux et de réduire la coordination manuelle nécessaire.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-6 border border-[#dfe5ee] bg-white p-6 md:grid-cols-[0.62fr_0.38fr] md:p-8 lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Continuer
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] md:text-[3rem]">
                Voir où ces services s'appliquent.
              </h2>
            </div>

            <div className="grid gap-4">
              <Link to="/domains" className="group flex items-center justify-between border-b border-[#edf1f6] pb-4 text-[1rem] font-semibold text-[#111318]">
                Domaines et expertises
                <ArrowRight size={18} className="text-[#1473e6] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/methods" className="group flex items-center justify-between border-b border-[#edf1f6] pb-4 text-[1rem] font-semibold text-[#111318]">
                Méthode de delivery
                <ArrowRight size={18} className="text-[#1473e6] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <ShuffleButton to="/contact" className="mt-2 w-full justify-center">
                Lancer la conversation
              </ShuffleButton>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
