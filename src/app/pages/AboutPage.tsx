import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const aboutImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=82";

const principles = [
  "Des systèmes sur mesure plutôt qu'une réponse standardisée",
  "La compréhension du métier avant l'élargissement du périmètre",
  "Une exécution sobre, sérieuse et orientée résultat",
  "Une lecture contemporaine de la technologie, sans effet de posture",
];

const expectations = [
  "Une lecture claire du processus existant et de ses points de friction",
  "Une réponse technique alignée sur les règles métier, les outils et les usages réels",
  "Une trajectoire de mise en oeuvre pensée pour améliorer le fonctionnement, pas pour complexifier l'organisation",
];

export function AboutPage() {
  useDocumentMeta(
    "À propos | Processium",
    "Découvrez comment Processium aborde la transformation opérationnelle, les systèmes sur mesure et une exécution guidée par la valeur métier."
  );

  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une entreprise centrée sur la transformation opérationnelle."
        copy="Processium accompagne les entreprises dans la conception de systèmes sur mesure destinés à simplifier les opérations, sécuriser l'information et améliorer la qualité d'exécution."
        actions={
          <>
            <ShuffleButton to="/contact">Contacter Processium</ShuffleButton>
            <OpticsButton to="/fondateur" variant="decorations">
              Découvrir le fondateur
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Positionnement
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] md:text-[2.9rem]">
                Un champ d'intervention volontairement resserré.
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                Processium se concentre sur un sujet précis: concevoir des systèmes sur mesure qui simplifient les opérations, structurent l'information et réduisent la charge manuelle récurrente.
              </p>
              <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#526073]">
                L'ambition n'est pas d'ajouter une couche de complexité ou de multiplier les chantiers, mais de produire des améliorations concrètes dans le fonctionnement quotidien de l'entreprise.
              </p>
            </div>

            <div className="overflow-hidden bg-[#e9eef5] lg:pl-8 xl:pl-12">
              <img
                src={aboutImage}
                alt="Espace de travail moderne et calme aligné avec une direction de design premium et maîtrisée."
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-x-10 gap-y-6 border-t border-[#dfe5ee] pt-8 md:grid-cols-2">
            {principles.map((principle, index) => (
              <article key={principle} className="border-t border-[#dfe5ee] pt-5">
                <p className="text-[0.82rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-[#111318]">{principle}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border-t border-[#dfe5ee] pt-8 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Ce qu'il faut attendre
              </p>
              <h2 className="mt-5 max-w-[11ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] md:text-[2.8rem]">
                Une relation de travail claire et structurée.
              </h2>
            </div>

            <div className="grid gap-5">
              {expectations.map((expectation, index) => (
                <div key={expectation} className="grid gap-3 border-t border-[#dfe5ee] pt-5 md:grid-cols-[52px_1fr]">
                  <p className="text-[0.82rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                  <p className="text-[1rem] leading-7 text-[#526073]">{expectation}</p>
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="flex flex-col gap-5 border-t border-[#dfe5ee] pt-8 md:flex-row md:items-end md:justify-between lg:pt-10">
            <div>
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Parcours
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] md:text-[2.8rem]">
                Comprendre la logique qui a conduit à Processium.
              </h2>
            </div>

            <OpticsButton to="/fondateur" variant="decorations">
              Voir la page fondateur
            </OpticsButton>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
