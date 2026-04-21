import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const homeImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82";

const previewLinks = [
  {
    title: "Services",
    to: "/services",
    copy: "Automatisation de workflows, outils internes, intégrations, reporting et tâches opérationnelles assistées par IA.",
  },
  {
    title: "Domaines",
    to: "/domains",
    copy: "Comptabilité, finance, management, opérations, reporting et workflows internes.",
  },
  {
    title: "Méthode",
    to: "/methods",
    copy: "Un modèle de delivery maîtrisé, de l'audit du processus au système opérationnel déployé.",
  },
  {
    title: "Innovation",
    to: "/innovation",
    copy: "Une lecture pratique de l'IA, de l'automatisation, de la blockchain et des infrastructures émergentes.",
  },
];

const methodSteps = [
  "Auditer la tâche actuelle et la friction qui l'entoure.",
  "Définir le bon périmètre technique pour la réalité métier.",
  "Construire le système et le connecter à l'environnement existant.",
  "Affiner le workflow après les premiers usages réels.",
];

const domains = ["Comptabilité", "Finance", "Opérations", "Management", "Reporting", "Workflows internes"];

export function HomePage() {
  useDocumentMeta(
    "Processium | Systèmes pour accélérer les opérations",
    "Processium conçoit des systèmes techniques sur mesure, des automatisations de workflow et des micro-logiciels qui réduisent le travail manuel et améliorent les opérations."
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pb-12 pt-[118px] md:pb-16 md:pt-[132px] lg:pb-20">
        <SiteContainer>
          <div className="grid overflow-hidden bg-white shadow-[0_28px_80px_rgba(17,24,39,0.07)] xl:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)]">
            <div className="grid gap-7 p-6 md:p-8 lg:p-10">
              <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Systèmes sur mesure pour récupérer du temps opérationnel
              </p>
              <h1 className="max-w-[11.4ch] font-[650] leading-[0.98] text-[#111318] text-[2.75rem] sm:text-[3.55rem] md:max-w-[11.2ch] md:text-[4.5rem] lg:text-[5.4rem]">
                Des systèmes techniques qui réduisent le travail manuel.
              </h1>
              <p className="mt-6 max-w-2xl text-[1.04rem] leading-8 text-[#526073] md:text-[1.12rem]">
                Processium conçoit des micro-logiciels, des automatisations de workflow et des outils techniques internes pour les entreprises qui veulent gagner du temps, réduire la friction et améliorer l'exécution.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ShuffleButton to="/services">Découvrir les services</ShuffleButton>
                <OpticsButton to="/contact" variant="decorations">
                  Contacter Processium
                </OpticsButton>
              </div>

              <div className="mt-3 grid gap-4 border-t border-[#dfe5ee] pt-7 md:grid-cols-3">
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Objectif</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Récupérer du temps sur le travail interne répétitif.</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Approche</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Construire le bon système pour le processus existant.</p>
                </div>
                <div className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Résultat</p>
                  <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Exécution plus rapide, opérations plus nettes, meilleur focus.</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden bg-[#111318] shadow-[0_28px_80px_rgba(17,24,39,0.07)] md:min-h-[380px]">
              <img
                src={homeImage}
                alt="Environnement de travail moderne dédié à la coordination d'opérations structurées."
                className="h-full w-full object-cover opacity-[0.78]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.1),rgba(5,9,18,0.88))]" />
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] pb-12 md:pb-16 lg:pb-20">
        <SiteContainer>
          <div className="grid overflow-hidden bg-white shadow-[0_28px_80px_rgba(17,24,39,0.07)] xl:grid-cols-[minmax(320px,0.42fr)_minmax(0,0.58fr)]">
            <div className="relative min-h-[280px] bg-[#111318] md:min-h-[380px]">
              <img
                src={homeImage}
                alt="Environnement de travail moderne dédié à la coordination d'opérations structurées."
                className="h-full w-full object-cover opacity-[0.78]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.1),rgba(5,9,18,0.88))]" />
            </div>

            <div className="grid gap-7 p-6 md:p-8 lg:p-10">
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Une proposition concrète pour l'entreprise
              </p>
              <h2 className="max-w-[12ch] text-[2.2rem] font-[650] leading-[1.02] text-[#111318] md:text-[3.25rem] lg:text-[4rem]">
                Processium transforme les frictions opérationnelles en systèmes utiles.
              </h2>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-[#526073]">
                Le point de départ est simple: beaucoup d'équipes passent encore trop de temps à déplacer l'information à la main, à répéter les mêmes séquences et à compenser les écarts entre outils. Processium répond avec des systèmes techniques ciblés, construits pour le workflow réel.
              </p>
              <div className="grid gap-5 border-t border-[#edf1f6] pt-6 md:grid-cols-3">
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Tâche manuelle</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">30 minutes</p>
                </div>
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Tâche assistée</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Quelques minutes</p>
                </div>
                <div>
                  <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Bénéfice stratégique</p>
                  <p className="mt-2 text-[1rem] font-semibold text-[#111318]">Plus de temps pour le travail à forte valeur</p>
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="mb-5 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Explorer la société
              </p>
              <h2 className="max-w-[10ch] text-[2.05rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Parcourir le site, couche par couche.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {previewLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group grid gap-4 border border-[#dfe5ee] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b8c3d3] hover:shadow-[0_24px_60px_rgba(17,24,39,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[1.2rem] font-[650] text-[#111318]">{item.title}</p>
                    <ArrowRight size={18} className="text-[#1473e6] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="text-[0.98rem] leading-7 text-[#5b6778]">{item.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.54fr)_minmax(320px,0.46fr)]">
            <div className="bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.06)] md:p-8 lg:p-10">
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Méthode d'intervention
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[2.15rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Un travail cadré, utile, et pensé pour l'usage réel.
              </h2>
              <div className="mt-8 grid gap-5">
                {methodSteps.map((step, index) => (
                  <div key={step} className="grid gap-3 border-t border-[#edf1f6] pt-5 md:grid-cols-[56px_1fr]">
                    <p className="text-[0.82rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                    <p className="text-[1rem] leading-7 text-[#526073]">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <OpticsButton to="/methods" variant="secondary">
                  Voir la méthode
                </OpticsButton>
              </div>
            </div>

            <div className="grid content-between bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.06)] md:p-8 lg:p-10">
              <div>
                <p className="text-[0.78rem] font-semibold uppercase text-[#667085]">Domaines opérationnels</p>
                <h3 className="mt-5 max-w-[12ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[2.7rem]">
                  Pensé pour les fonctions où le temps se disperse d'abord.
                </h3>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {domains.map((domain) => (
                  <div key={domain} className="border-l border-[#dfe5ee] pl-4">
                    <p className="text-[1rem] font-semibold text-[#111318]">{domain}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <OpticsButton to="/domains" variant="decorations">
                  Voir les domaines
                </OpticsButton>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] pb-14 pt-6 md:pb-20 md:pt-8">
        <SiteContainer>
          <div className="grid gap-6 border border-[#dfe5ee] bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.06)] md:grid-cols-[0.62fr_0.38fr] md:p-8 lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Commencer par un seul processus
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[2.1rem] font-[650] leading-[1.02] text-[#111318] md:text-[3.2rem]">
                La première discussion doit être concrète.
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                Partagez la tâche, les outils actuels, le temps que cela prend et l'endroit où la friction apparaît. C'est suffisant pour ouvrir une discussion sérieuse.
              </p>
            </div>

            <div className="flex items-end md:justify-end">
              <ShuffleButton to="/contact">Aller au contact</ShuffleButton>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
