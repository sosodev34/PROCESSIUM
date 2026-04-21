import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cable, ChartNoAxesCombined, Sparkles, Workflow } from "lucide-react";
import { cn } from "../ui/utils";

const FEATURES = [
  {
    id: "automate",
    label: "Tâches manuelles",
    title: "Les tâches répétitives deviennent des actions automatisées.",
    description: "Nous remplaçons les manipulations récurrentes par des systèmes simples : saisie, relance, classement, notification ou mise à jour.",
    result: "Moins de temps perdu",
    icon: Workflow,
    flow: ["Tâche", "Règle", "Exécution"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Équipe structurant un processus métier sur un tableau.",
  },
  {
    id: "connect",
    label: "Finance et comptabilité",
    title: "Les processus financiers gagnent en rapidité et en fiabilité.",
    description: "Rapprochements, suivis de factures, exports, validations et contrôles peuvent être structurés dans des outils adaptés.",
    result: "Moins de saisie et de contrôle manuel",
    icon: Cable,
    flow: ["Document", "Contrôle", "Suivi"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Poste de travail avec outils numériques utilisés pour coordonner une équipe.",
  },
  {
    id: "tooling",
    label: "Opérations internes",
    title: "Les équipes travaillent avec des outils conçus pour leur réalité.",
    description: "Nous créons des interfaces internes pour suivre les demandes, piloter les opérations et réduire les échanges dispersés.",
    result: "Un fonctionnement plus clair",
    icon: ChartNoAxesCombined,
    flow: ["Demande", "Traitement", "Statut"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Tableau de bord analytique ouvert sur un ordinateur portable.",
  },
  {
    id: "ai",
    label: "Reporting et données",
    title: "Les données utiles sont consolidées sans travail répétitif.",
    description: "Nous automatisons la collecte, la transformation et la restitution des informations nécessaires au management.",
    result: "Des informations prêtes à utiliser",
    icon: Sparkles,
    flow: ["Collecte", "Traitement", "Rapport"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Ordinateur portable dans un environnement de travail moderne.",
  },
];

const AUTO_PLAY_INTERVAL = 4200;

export function FeatureCarousel() {
  const [step, setStep] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;
  const currentFeature = FEATURES[currentIndex];

  const nextStep = React.useCallback(() => {
    setStep((previousStep) => previousStep + 1);
  }, []);

  React.useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const onMotionChange = () => setPrefersReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", onMotionChange);

    return () => motionQuery.removeEventListener("change", onMotionChange);
  }, []);

  React.useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;

    const interval = window.setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, nextStep, prefersReducedMotion]);

  const selectFeature = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((currentStep) => currentStep + diff);
  };

  return (
    <div
      className="grid overflow-hidden bg-white shadow-[0_30px_90px_rgba(17,24,39,0.08)] lg:grid-cols-[0.34fr_0.66fr]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative bg-[#eef2f7] px-5 py-7 lg:min-h-[560px] lg:px-8">
        <p className="mb-8 text-[0.78rem] font-semibold uppercase text-[#667085]">Domaines d’intervention</p>
        <div className="hidden h-full content-center gap-2 lg:grid">
          {FEATURES.map((feature, index) => {
            const isActive = index === currentIndex;
            const Icon = feature.icon;

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => selectFeature(index)}
                className={cn(
                  "flex min-h-16 w-full items-center gap-3 border-l-2 border-y-0 border-r-0 bg-transparent px-4 py-3 text-left transition-colors duration-300",
                  isActive
                    ? "border-[#1473e6] text-[#111318]"
                    : "border-[#d4dbe6] text-[#667085] hover:border-[#8aaee8] hover:text-[#111318]"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-[0.9rem] font-semibold">{feature.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-2 lg:hidden">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === currentIndex;

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => selectFeature(index)}
                className={cn(
                  "flex min-h-12 items-center gap-3 border-l-2 px-4 text-left transition-colors duration-300",
                  isActive ? "border-[#1473e6] bg-white text-[#111318]" : "border-[#d8dee8] bg-white/72 text-[#667085]"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-[0.9rem] font-semibold">{feature.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentFeature.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="grid h-full lg:grid-cols-[0.52fr_0.48fr]"
          >
            <div className="relative min-h-[260px] overflow-hidden bg-[#101318] lg:min-h-full">
              <img
                src={currentFeature.image}
                alt={currentFeature.imageAlt}
                className="h-full min-h-[260px] w-full object-cover opacity-[0.9] lg:min-h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.02)_0%,rgba(16,19,24,0.52)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 border-l-2 border-[#1473e6] pl-4 text-white">
                <p className="text-[0.8rem] font-semibold text-white/68">Valeur métier</p>
                <p className="mt-2 text-[1.25rem] font-semibold leading-7">{currentFeature.result}</p>
              </div>
            </div>

            <div className="grid content-between p-6 md:p-8 lg:p-10">
              <div>
                <p className="text-[0.82rem] font-semibold text-[#1473e6]">{currentFeature.result}</p>
                <h3 className="mt-5 max-w-2xl text-[2.18rem] font-[650] leading-[1.04] text-[#111318] md:text-[3.15rem]">
                  {currentFeature.title}
                </h3>
                <p className="mt-5 max-w-xl text-[1rem] leading-7 text-[#586374] md:text-[1.05rem]">
                  {currentFeature.description}
                </p>
              </div>

              <div className="mt-10 border-t border-[#e6ebf2] pt-5">
                <div className="grid gap-0 sm:grid-cols-3">
                  {currentFeature.flow.map((item, index) => (
                    <div key={item} className="border-b border-[#e6ebf2] py-4 last:border-b-0 sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                      <span className="text-[0.72rem] font-semibold text-[#1473e6]">0{index + 1}</span>
                      <p className="mt-5 text-[1rem] font-semibold text-[#111318]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
