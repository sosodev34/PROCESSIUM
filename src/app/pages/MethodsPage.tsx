import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    copy: "Analyser le processus actuel, les outils impliqués, les passages de relais et la charge manuelle pour identifier où un système sur mesure peut créer la meilleure valeur.",
  },
  {
    number: "02",
    title: "Cadrage",
    copy: "Définir l'ambition, le périmètre, les règles métier et le modèle de fonctionnement cible afin de sécuriser une trajectoire réaliste et maîtrisée.",
  },
  {
    number: "03",
    title: "Déploiement",
    copy: "Concevoir et déployer le workflow, l'outil interne, l'intégration ou le micro-logiciel nécessaire pour améliorer l'exécution dans les conditions réelles.",
  },
  {
    number: "04",
    title: "Amélioration",
    copy: "Faire évoluer le système à partir des usages, des retours terrain et des cas limites afin de renforcer sa robustesse et sa valeur opérationnelle.",
  },
];

const principles = [
  "La compréhension du processus avant la réponse technique",
  "Un périmètre maîtrisé pour produire vite de la valeur",
  "Des systèmes pensés pour l'usage réel et la continuité opérationnelle",
];

export function MethodsPage() {
  useDocumentMeta(
    "Méthode | Processium",
    "Processium suit une méthode structurée, de l'analyse au déploiement, pour traduire un besoin opérationnel en système concret et durable."
  );

  return (
    <>
      <PageHeader
        eyebrow="Méthode"
        title="Une démarche structurée, de l'analyse au déploiement."
        copy="Chaque intervention suit une méthode claire pour traduire un besoin opérationnel en système concret, aligné sur l'organisation, les usages et les priorités de l'entreprise."
        actions={
          <>
            <ShuffleButton to="/contact">Commencer par un processus</ShuffleButton>
            <OpticsButton to="/services" variant="decorations">
              Voir les services
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.32fr)_minmax(0,0.68fr)]">
            <div className="xl:sticky xl:top-28 xl:self-start">
              <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                <span className="h-px w-8 bg-[#1473e6]" />
                Principes
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[1.8rem] font-[650] leading-[1.05] text-[#111318] md:text-[2.35rem] lg:text-[2.9rem]">
                Une méthode lisible, pensée pour produire vite un résultat utile.
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Le cadre reste volontairement simple: comprendre le fonctionnement réel, définir une cible crédible, déployer un système utile puis l'améliorer à partir des usages.
              </p>

              <div className="mt-8 grid gap-3">
                {principles.map((principle) => (
                  <div key={principle} className="border-t border-[#dfe5ee] pt-4 text-[0.98rem] font-semibold leading-7 text-[#111318]">
                    {principle}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-0 border-t border-[#dfe5ee]">
              {steps.map((step) => (
                <article key={step.title} className="grid gap-4 border-b border-[#dfe5ee] py-6 md:grid-cols-[86px_1fr] md:gap-8 md:py-8">
                  <p className="text-[0.84rem] font-semibold text-[#1473e6]">{step.number}</p>
                  <div>
                    <h2 className="text-[1.65rem] font-[650] leading-[1.07] text-[#111318] md:text-[1.95rem] lg:text-[2.15rem]">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#526073] md:leading-8">{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
