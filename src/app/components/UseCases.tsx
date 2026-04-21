import { motion } from "motion/react";
import { SectionIntro } from "./SectionIntro";

const useCases = [
  {
    area: "Gestion des leads",
    system: "Capturer, qualifier, router et synchroniser les opportunités sans tri manuel.",
    result: "Réponse plus rapide",
  },
  {
    area: "Automatisation CRM",
    system: "Garder les fiches, relances, transferts et étapes commerciales alignés.",
    result: "Pipeline mieux maîtrisé",
  },
  {
    area: "Reporting",
    system: "Transformer les données opérationnelles en résumés, tableaux de bord et alertes.",
    result: "Visibilité fiable",
  },
  {
    area: "Validations internes",
    system: "Faire passer les demandes par les bonnes règles, personnes et preuves de suivi.",
    result: "Moins d’attente",
  },
  {
    area: "Flux support",
    system: "Classer les tickets, enrichir le contexte, escalader les exceptions et fermer les boucles simples.",
    result: "Qualité de service plus nette",
  },
  {
    area: "Opérations administratives",
    system: "Remplacer les rapprochements, traitements documentaires et mises à jour répétitives.",
    result: "Moins de charge cachée",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-[#e3e8f0] bg-white px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="Cas d’usage"
          title="Automatiser là où la friction opérationnelle se trouve vraiment."
          copy="Processium intervient sur les flux qui ralentissent les équipes chaque semaine : transferts, validations, rapports, enrichissement, routage et relances."
        />

        <div className="overflow-hidden border border-[#dfe5ee] bg-white shadow-[0_22px_70px_rgba(17,24,39,0.06)]">
          <div className="hidden grid-cols-[0.48fr_1fr_0.42fr] border-b border-[#dfe5ee] bg-[#f7f9fc] px-6 py-4 text-[0.78rem] font-semibold text-[#667085] md:grid">
            <span>Flux</span>
            <span>Comportement système</span>
            <span>Résultat</span>
          </div>

          {useCases.map((item, index) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="grid gap-4 border-b border-[#dfe5ee] px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-[#f8fafc] md:grid-cols-[0.48fr_1fr_0.42fr] md:gap-8 md:px-6 md:py-7"
            >
              <div>
                <p className="mb-2 text-[0.74rem] font-semibold text-[#667085] md:hidden">
                  Flux
                </p>
                <h3 className="text-[1.05rem] font-semibold text-[#111318]">{item.area}</h3>
              </div>

              <div>
                <p className="mb-2 text-[0.74rem] font-semibold text-[#667085] md:hidden">
                  Comportement système
                </p>
                <p className="max-w-2xl text-[0.95rem] leading-7 text-[#5d6676]">{item.system}</p>
              </div>

              <div>
                <p className="mb-2 text-[0.74rem] font-semibold text-[#667085] md:hidden">
                  Résultat
                </p>
                <p className="text-[0.95rem] font-semibold text-[#263242]">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
