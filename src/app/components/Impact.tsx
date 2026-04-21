import { motion } from "motion/react";
import { SectionIntro } from "./SectionIntro";

const outcomes = [
  {
    label: "Temps gagné",
    value: "Des tâches de trente minutes réduites à quelques actions",
  },
  {
    label: "Moins de manuel",
    value: "Des manipulations répétitives remplacées par un système fiable",
  },
  {
    label: "Meilleure efficacité",
    value: "Des équipes recentrées sur les missions à plus forte valeur",
  },
];

const useCases = [
  {
    title: "Comptabilité",
    description: "Suivi de factures, rapprochements, relances et préparation de données sans saisie répétitive.",
  },
  {
    title: "Finance",
    description: "Contrôles, consolidations, exports et reportings financiers mieux structurés.",
  },
  {
    title: "Opérations",
    description: "Demandes internes, statuts, validations et suivis regroupés dans un flux clair.",
  },
  {
    title: "Management et reporting",
    description: "Données consolidées et présentées pour faciliter le pilotage quotidien.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="bg-[#f7f8fb] px-5 py-18 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Impact"
          title="Des gains concrets sur les tâches qui ralentissent l’entreprise."
          copy="L’objectif n’est pas d’ajouter un outil de plus. L’objectif est de réduire le temps passé sur les tâches manuelles et d’améliorer l’efficacité opérationnelle."
        />

        <div className="grid overflow-hidden bg-white shadow-[0_30px_90px_rgba(17,24,39,0.08)] lg:grid-cols-[0.36fr_0.64fr]">
          <div className="bg-[#101318] p-6 text-white md:p-8 lg:p-10">
            <p className="mb-10 text-[0.78rem] font-semibold uppercase text-white/58">Valeur mesurable</p>
            <div className="grid gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="border-l border-white/24 pl-5"
                >
                  <p className="text-[0.82rem] font-semibold text-[#8bb7ff]">{outcome.label}</p>
                  <p className="mt-3 max-w-sm text-[1.35rem] font-semibold leading-8">{outcome.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.article
                key={useCase.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="min-h-[260px] border-b border-[#edf1f6] p-6 transition-colors duration-300 hover:bg-[#f7f8fb] md:p-8 lg:p-10"
              >
                <p className="text-[0.78rem] font-semibold text-[#1473e6]">0{index + 1}</p>
                <h3 className="mt-10 max-w-sm text-[1.8rem] font-[650] leading-tight text-[#111318]">{useCase.title}</h3>
                <p className="mt-5 max-w-md text-[1rem] leading-7 text-[#586374]">{useCase.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
