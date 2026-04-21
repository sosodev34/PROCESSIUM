import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const domains = [
  {
    title: "Comptabilité",
    copy: "Les écritures, rapprochements, pièces justificatives et contrôles récurrents créent souvent une charge manuelle prévisible qui peut être réduite avec des systèmes mieux structurés.",
  },
  {
    title: "Finance",
    copy: "Les flux budgétaires, circuits de validation, consolidations de données et reportings internes gagnent en vitesse avec une meilleure coordination technique entre outils.",
  },
  {
    title: "Opérations",
    copy: "Les équipes opérationnelles gagnent avec des systèmes qui réduisent les relances de statut, les mises à jour répétitives, l'exécution fragmentée et les suivis manuels.",
  },
  {
    title: "Management",
    copy: "Les décideurs ont besoin de flux d'information plus propres, de cycles de reporting plus rapides et d'une meilleure visibilité sur les processus internes récurrents.",
  },
  {
    title: "Reporting",
    copy: "Une grande part de l'effort de reporting se perd dans la préparation. Processium vise à réduire la couche manuelle derrière la visibilité métier.",
  },
  {
    title: "Workflows internes",
    copy: "Les flux administratifs, support et coordination deviennent souvent plus lourds qu'ils ne devraient. Des systèmes sur mesure simplifient la circulation du travail entre équipes.",
  },
];

const crossFunctionalPoints = [
  "Passages manuels entre outils",
  "Saisies et rapprochements répétés",
  "Visibilité opérationnelle retardée par la préparation",
];

export function DomainsPage() {
  useDocumentMeta(
    "Domaines | Processium",
    "Processium intervient en comptabilité, finance, opérations, management, reporting et workflows internes pour réduire le travail manuel et améliorer l'exécution."
  );

  return (
    <>
      <PageHeader
        eyebrow="Domaines"
        title="Conçu pour les fonctions où la friction de processus coûte cher."
        copy="Processium intervient sur les zones métier qui gèrent des tâches récurrentes, de la donnée structurée et des chemins de décision répétés. Le problème n'est généralement pas le département. Le problème est le temps passé à déplacer l'information à la main."
        actions={
          <>
            <ShuffleButton to="/services">Voir les services</ShuffleButton>
            <OpticsButton to="/contact" variant="decorations">
              Contacter Processium
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain) => (
              <article key={domain.title} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8">
                <h2 className="max-w-[12ch] text-[1.95rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.3rem]">
                  {domain.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-8 text-[#526073]">{domain.copy}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border border-[#dfe5ee] bg-white p-6 shadow-[0_26px_80px_rgba(17,24,39,0.06)] md:p-8 lg:grid-cols-[0.44fr_0.56fr] lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Schémas communs
              </p>
              <h2 className="mt-6 max-w-[12ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Des départements différents, mais des pertes opérationnelles proches.
              </h2>
            </div>

            <div className="grid gap-5">
              {crossFunctionalPoints.map((point) => (
                <div key={point} className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[1rem] font-semibold leading-7 text-[#111318]">{point}</p>
                </div>
              ))}
              <p className="mt-2 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                C'est pour cela que Processium fonctionne bien à travers plusieurs zones métier. La réponse technique change, mais l'objectif de fond reste le même: réduire l'effort manuel et améliorer la clarté opérationnelle.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
