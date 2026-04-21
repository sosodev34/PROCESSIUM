import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const methodImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=82";

const steps = [
  {
    number: "01",
    title: "Audit",
    copy: "Analyser le workflow actuel, les outils, les passages de relais et la perte de temps pour identifier l'endroit où un système technique crée une vraie valeur opérationnelle.",
  },
  {
    number: "02",
    title: "Conception",
    copy: "Définir un périmètre réaliste, les règles métier, la logique système et le chemin d'implémentation adapté à l'environnement de l'entreprise.",
  },
  {
    number: "03",
    title: "Construction",
    copy: "Développer le workflow, l'outil interne, l'intégration ou le composant de micro-logiciel nécessaire pour améliorer l'exécution dans la pratique.",
  },
  {
    number: "04",
    title: "Optimisation",
    copy: "Ajuster après les usages réels, traiter les cas limites et améliorer le système jusqu'à rendre le flux plus propre et plus fiable.",
  },
];

const principles = [
  "Analyse directe avant développement",
  "Périmètre maîtrisé plutôt que transformation surdimensionnée",
  "Utilité opérationnelle avant spectacle technique",
];

export function MethodsPage() {
  useDocumentMeta(
    "Méthode | Processium",
    "Processium suit une méthode claire: audit, conception, construction et optimisation de systèmes sur mesure pour les opérations métier."
  );

  return (
    <>
      <PageHeader
        eyebrow="Méthode"
        title="Un chemin maîtrisé, de l'audit opérationnel au système déployé."
        copy="La méthode est pensée pour rester pratique. Processium part de la tâche réelle, définit le bon périmètre, construit le système puis l'affine dans des conditions d'usage réelles."
        actions={
          <>
            <ShuffleButton to="/contact">Commencer par un workflow</ShuffleButton>
            <OpticsButton to="/services" variant="decorations">
              Voir les services
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid overflow-hidden bg-white shadow-[0_28px_80px_rgba(17,24,39,0.07)] xl:grid-cols-[minmax(320px,0.4fr)_minmax(0,0.6fr)]">
            <div className="relative min-h-[320px] bg-[#101318] md:min-h-[460px]">
              <img
                src={methodImage}
                alt="Atelier stratégique utilisé pour revoir et redessiner des processus métier."
                className="h-full w-full object-cover opacity-[0.78]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.08),rgba(5,9,18,0.88))]" />
              <div className="absolute bottom-6 left-6 right-6 border-l border-white/22 pl-4 text-white md:bottom-8 md:left-8 md:right-8">
                <p className="text-[0.76rem] font-semibold uppercase text-white/54">Style de travail</p>
                <p className="mt-3 max-w-sm text-[1.15rem] font-semibold leading-7">
                  La delivery technique reste attachée à la réalité opérationnelle du client.
                </p>
              </div>
            </div>

            <div className="grid">
              {steps.map((step) => (
                <article key={step.title} className="grid gap-4 border-b border-[#edf1f6] p-6 last:border-b-0 md:grid-cols-[72px_1fr] md:p-8 lg:p-9">
                  <p className="text-[0.84rem] font-semibold text-[#1473e6]">{step.number}</p>
                  <div>
                    <h2 className="text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[2.3rem]">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#526073]">{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8">
                <p className="text-[1.08rem] font-semibold leading-7 text-[#111318]">{principle}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
