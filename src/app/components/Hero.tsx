import { motion } from "motion/react";
import { ShuffleButton } from "./badtz/ShuffleButton";
import { OpticsButton } from "./optics/button";

const heroImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82";

const proofPoints = [
  "Analyse des tâches chronophages",
  "Micro-logiciels sur mesure",
  "Automatisations internes",
  "Gains de temps mesurables",
];

const transformations = [
  { before: "30 minutes manuelles", after: "Quelques minutes automatisées" },
  { before: "Saisie répétitive", after: "Traitement fiable" },
  { before: "Reporting lent", after: "Données prêtes à l’emploi" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f8fb] px-5 pt-[78px] md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid min-w-0 items-stretch gap-8 py-8 md:py-12 lg:grid-cols-[0.48fr_0.52fr] lg:gap-12 lg:py-16">
          <div className="min-w-0 self-center py-2 lg:pl-6">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 inline-flex border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#4f5b6b]">
                Automatisation sur mesure pour entreprises
              </p>

              <h1 className="max-w-[10.8ch] font-[650] text-[2.62rem] leading-[1.02] text-[#111318] sm:max-w-[11.6ch] sm:text-[3.7rem] md:max-w-[12.2ch] md:text-[4.45rem] lg:max-w-[12.6ch] lg:text-[4.85rem]">
                Transformez les tâches chronophages en systèmes automatisés.
              </h1>

              <p className="mt-6 max-w-xl text-[1.04rem] leading-8 text-[#4f5b6b] md:text-[1.12rem]">
                Processium conçoit des micro-logiciels sur mesure pour réduire le travail manuel, accélérer les processus internes et permettre aux équipes de se concentrer sur les tâches à plus forte valeur.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ShuffleButton href="#contact">
                  Demander un diagnostic
                </ShuffleButton>
                <OpticsButton href="#services" variant="decorations">
                  Voir les expertises
                </OpticsButton>
              </div>

              <div className="mt-8 hidden gap-3 border-t border-[#dfe5ee] pt-6 md:grid md:grid-cols-2">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-[0.92rem] font-semibold text-[#364152]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1473e6]" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[300px] overflow-hidden bg-[#101318] md:min-h-[440px] lg:min-h-[620px]"
          >
            <img
              src={heroImage}
              alt="Espace de travail moderne utilisé pour piloter des opérations d’entreprise."
              className="h-full min-h-[300px] w-full object-cover opacity-[0.92] md:min-h-[440px] lg:min-h-[620px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.04)_0%,rgba(16,19,24,0.64)_100%)]" />

            <div className="absolute inset-0 flex h-full flex-col justify-between p-5 text-white md:p-8 lg:p-10">
              <div className="max-w-sm">
                <p className="text-[0.78rem] font-semibold uppercase text-white/62">Vision</p>
                <p className="mt-4 text-[1.65rem] font-[650] leading-tight md:text-[2.2rem]">
                  Chaque solution part de vos processus réels.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {transformations.map((item) => (
                  <div key={item.before} className="border-l border-white/24 pl-4">
                    <p className="text-[0.76rem] font-semibold text-white/56">{item.before}</p>
                    <p className="mt-2 text-[1rem] font-semibold leading-6">{item.after}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden bg-white/64 shadow-[0_24px_70px_rgba(17,24,39,0.05)] md:grid md:grid-cols-[0.34fr_1fr]">
          <div className="p-5 md:p-7">
            <p className="text-[0.84rem] font-semibold uppercase text-[#667085]">Ce que nous résolvons</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-3">
            {transformations.map((item) => (
              <div key={item.after} className="p-5 md:p-7">
                <p className="text-[0.85rem] font-semibold text-[#667085]">{item.before}</p>
                <p className="mt-2 text-[1.05rem] font-semibold leading-6 text-[#111318]">{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
