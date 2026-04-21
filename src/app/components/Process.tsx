import { motion } from "motion/react";
import { SectionIntro } from "./SectionIntro";

const steps = [
  {
    number: "01",
    title: "Analyser",
    description: "Observer vos processus internes et repérer les tâches manuelles qui prennent trop de temps.",
  },
  {
    number: "02",
    title: "Prioriser",
    description: "Sélectionner les automatisations qui auront un impact concret sur le temps, la fiabilité ou la visibilité.",
  },
  {
    number: "03",
    title: "Développer",
    description: "Créer le micro-logiciel, l’intégration ou l’outil interne adapté à vos règles métier.",
  },
  {
    number: "04",
    title: "Améliorer",
    description: "Tester en conditions réelles, corriger les exceptions et ajuster le système avec vos équipes.",
  },
];

const processImage =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=82";

export function Process() {
  return (
    <section id="process" className="bg-[#f7f8fb] px-5 py-18 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Méthode"
          title="Une méthode directe, du problème manuel au système opérationnel."
          copy="Le travail commence par une question simple : quelles tâches prennent trop de temps et peuvent être traitées autrement ?"
        />

        <div className="grid overflow-hidden bg-white shadow-[0_30px_90px_rgba(17,24,39,0.08)] lg:grid-cols-[0.43fr_0.57fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[360px] bg-[#101318] lg:min-h-[620px]"
          >
            <img
              src={processImage}
              alt="Atelier de travail pour cartographier et améliorer un processus opérationnel."
              className="h-full min-h-[360px] w-full object-cover opacity-[0.9] lg:min-h-[620px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.02)_0%,rgba(16,19,24,0.7)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#1473e6] pl-4 text-white md:bottom-8 md:left-8 md:right-8">
              <p className="text-[0.8rem] font-semibold uppercase text-white/62">Cadence projet</p>
              <p className="mt-3 max-w-sm text-[1.35rem] font-semibold leading-8">
                Une solution utile se construit autour des usages réels de l’entreprise.
              </p>
            </div>
          </motion.div>

          <div className="grid">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid gap-5 border-b border-[#edf1f6] p-6 last:border-b-0 md:grid-cols-[0.22fr_1fr] md:p-8 lg:p-10"
              >
                <span className="text-[0.86rem] font-semibold text-[#1473e6]">{step.number}</span>
                <div>
                  <h3 className="text-[2rem] font-[650] leading-tight text-[#111318] md:text-[2.45rem]">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-[#586374]">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
