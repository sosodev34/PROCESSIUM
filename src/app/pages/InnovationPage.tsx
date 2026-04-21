import { InnovationParticleTextEffect } from "../components/InnovationParticleTextEffect";
import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const innovationAreas = [
  {
    title: "Intelligence artificielle",
    copy: "L'IA compte lorsqu'elle raccourcit le travail opérationnel: traitement documentaire, extraction d'information, préparation de tâches, catégorisation et support à l'exécution interne.",
  },
  {
    title: "Systèmes d'automatisation",
    copy: "Les moteurs de workflow modernes, couches d'orchestration et systèmes pilotés par événements rendent l'exécution des processus plus fiable entre outils et équipes.",
  },
  {
    title: "Blockchain et traçabilité",
    copy: "Processium traite la blockchain comme un sujet d'infrastructure sérieux, pertinent là où l'auditabilité, la preuve, la traçabilité ou la validation multi-acteurs ont un vrai sens.",
  },
  {
    title: "Infrastructures numériques émergentes",
    copy: "APIs, couches de données structurées, interfaces intelligentes et architectures système modernes continuent de redessiner la manière dont les opérations métier peuvent être pensées.",
  },
];

const practicalPositioning = [
  "Aucune technologie n'est adoptée pour l'image seule.",
  "L'innovation est filtrée par l'utilité opérationnelle.",
  "L'objectif reste la clarté métier, pas le théâtre de la nouveauté.",
];

const innovationParticleWords = ["INNOVATION", "IA", "AUTOMATISATION", "BLOCKCHAIN", "INFRASTRUCTURE"];

export function InnovationPage() {
  useDocumentMeta(
    "Innovation | Processium",
    "Processium suit l'IA, les systèmes d'automatisation, la blockchain et les infrastructures numériques émergentes avec une lecture pratique orientée métier."
  );

  return (
    <>
      <section className="bg-[#03050a] pb-2 pt-[118px] md:pb-4 md:pt-[132px] lg:pb-6">
        <InnovationParticleTextEffect words={innovationParticleWords} className="h-[340px] sm:h-[430px] md:h-[500px] lg:h-[560px]" />
      </section>

      <PageHeader
        className="pt-8 md:pt-10 lg:pt-12"
        eyebrow="Innovation"
        title="Une technologie tournée vers l'avant, filtrée par l'opérationnel."
        copy="Processium suit l'évolution technologique de près, mais avec une ligne claire: l'innovation ne compte que lorsqu'elle améliore l'exécution, le contrôle, la traçabilité ou la prise de décision dans l'entreprise."
        actions={
          <>
            <ShuffleButton to="/contact">Échanger sur un besoin d'avenir</ShuffleButton>
            <OpticsButton to="/services" variant="decorations">
              Voir les services actuels
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border border-[#dfe5ee] bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.05)] md:p-8 lg:grid-cols-[0.56fr_0.44fr] lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Horizon technologique
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[2.1rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Processium se cale sur la prochaine génération de technologie métier.
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                La perspective dépasse les seuls blocages de workflow actuels. Elle inclut aussi les technologies qui redessinent déjà la manière dont les entreprises structureront l'opérationnel, la confiance, l'automatisation et les couches de décision numériques.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="border-l border-[#dfe5ee] pl-4">
                <p className="text-[0.74rem] font-semibold uppercase text-[#1473e6]">IA</p>
                <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Une intelligence opérationnelle, pas un discours flou.</p>
              </div>
              <div className="border-l border-[#dfe5ee] pl-4">
                <p className="text-[0.74rem] font-semibold uppercase text-[#1473e6]">Systèmes</p>
                <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Une orchestration structurée entre outils.</p>
              </div>
              <div className="border-l border-[#dfe5ee] pl-4">
                <p className="text-[0.74rem] font-semibold uppercase text-[#1473e6]">Infrastructure</p>
                <p className="mt-3 text-[1rem] font-semibold leading-6 text-[#111318]">Des fondations numériques pensées pour le cycle qui vient.</p>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 md:grid-cols-2">
            {innovationAreas.map((area) => (
              <article key={area.title} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8 lg:p-9">
                <h2 className="max-w-[13ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[2.45rem]">
                  {area.title}
                </h2>
                <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">{area.copy}</p>
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
                Positionnement
              </p>
              <h2 className="mt-6 max-w-[12ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Sérieux, tourné vers l'avenir, mais toujours ancré dans la réalité métier.
              </h2>
            </div>

            <div className="grid gap-5">
              {practicalPositioning.map((item) => (
                <div key={item} className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[1rem] font-semibold leading-7 text-[#111318]">{item}</p>
                </div>
              ))}
              <p className="mt-2 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                C'est ce qui aligne la page innovation avec le reste du site. Le message n'est pas que Processium suit les tendances. Le message est que Processium comprend où va la technologie métier et veut y construire des systèmes utiles.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
