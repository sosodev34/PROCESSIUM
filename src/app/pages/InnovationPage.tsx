import { InnovationParticleTextEffect } from "../components/InnovationParticleTextEffect";
import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { cn } from "../components/ui/utils";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const innovationAreas = [
  {
    title: "Intelligence artificielle",
    copy: "L'intelligence artificielle a de la valeur lorsqu'elle accélère le traitement de l'information, réduit la charge manuelle et soutient des décisions mieux préparées.",
  },
  {
    title: "Systèmes d'automatisation",
    copy: "Les couches d'orchestration, moteurs de workflow et architectures pilotées par événements permettent de rendre les processus plus continus, plus fiables et mieux gouvernés.",
  },
  {
    title: "Blockchain et traçabilité",
    copy: "Ces technologies deviennent pertinentes lorsque la preuve, l'auditabilité, la validation multi-acteurs ou la traçabilité constituent des exigences métier réelles.",
  },
  {
    title: "Infrastructures numériques émergentes",
    copy: "Les APIs, architectures data, interfaces intelligentes et nouveaux modèles d'intégration ouvrent la voie à des opérations plus modulaires, plus visibles et plus adaptables.",
  },
];

const practicalPositioning = [
  "Une technologie n'a d'intérêt que si elle sert une ambition métier claire.",
  "La nouveauté n'est retenue que lorsqu'elle améliore réellement le fonctionnement.",
  "Le critère final reste l'utilité opérationnelle.",
];

const innovationParticleWords = ["INNOVATION", "IA", "AUTOMATISATION", "BLOCKCHAIN", "INFRASTRUCTURE"];

export function InnovationPage() {
  useDocumentMeta(
    "Innovation | Processium",
    "Processium observe les technologies émergentes avec une lecture orientée impact métier, exécution et transformation opérationnelle."
  );

  return (
    <>
      <section className="bg-[#03050a] pb-2 pt-[118px] md:pb-4 md:pt-[132px] lg:pb-6">
        <InnovationParticleTextEffect words={innovationParticleWords} className="h-[340px] sm:h-[430px] md:h-[500px] lg:h-[560px]" />
      </section>

      <PageHeader
        className="pt-8 md:pt-10 lg:pt-12"
        eyebrow="Innovation"
        title="Une lecture de l'innovation orientée impact."
        copy="Processium observe les technologies susceptibles de transformer durablement les opérations et les évalue à l'aune de leur impact sur l'exécution, la décision et la résilience."
        actions={
          <>
            <ShuffleButton to="/contact">Évoquer un enjeu d'avenir</ShuffleButton>
            <OpticsButton to="/services" variant="decorations">
              Voir les services actuels
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.34fr)_minmax(0,0.66fr)]">
            <div className="lg:pt-2">
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Horizon technologique
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[1.8rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.4rem] lg:text-[2.9rem]">
                Observer l'innovation avec un prisme d'utilité.
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Processium s'intéresse aux technologies capables d'améliorer durablement l'exécution, la circulation de l'information et la qualité de décision. L'enjeu n'est pas d'ajouter de la nouveauté, mais de retenir ce qui devient réellement pertinent.
              </p>
            </div>

            <div className="grid gap-0 border-t border-[#dfe5ee]">
              {innovationAreas.map((area, index) => (
                <article
                  key={area.title}
                  className={cn(
                    "grid gap-4 border-b border-[#dfe5ee] py-6 lg:grid-cols-[220px_1fr] lg:gap-8 md:py-8",
                    index === 0 ? "bg-[linear-gradient(90deg,#f9fbff,transparent_62%)]" : ""
                  )}
                >
                  <h2 className="max-w-[13ch] text-[1.35rem] font-[650] leading-[1.08] text-[#111318] md:text-[1.6rem] lg:text-[1.8rem]">{area.title}</h2>
                  <p className="max-w-2xl text-[0.98rem] leading-7 text-[#526073] md:leading-8">{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Positionnement
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[1.8rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.3rem] lg:text-[2.8rem]">
                Une veille exigeante, mais toujours ancrée dans le réel.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-[#dfe5ee] lg:grid-cols-3 lg:border-t-0 lg:border-l lg:border-[#dfe5ee] lg:pl-8">
              {practicalPositioning.map((item, index) => (
                <article key={item} className="border-b border-[#dfe5ee] py-5 lg:mr-6">
                  <p className="text-[0.82rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                  <p className="mt-4 text-[1rem] font-semibold leading-7 text-[#111318]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
