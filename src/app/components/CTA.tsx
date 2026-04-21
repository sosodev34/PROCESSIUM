import { motion } from "motion/react";
import { FadeUpWord } from "./badtz/FadeUpWord";
import { ShuffleButton } from "./badtz/ShuffleButton";
import { OpticsButton } from "./optics/button";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Domaines", href: "#domains" },
  { label: "Méthode", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function CTA() {
  return (
    <section id="contact" className="bg-[#f7f8fb] px-5 py-18 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden bg-white shadow-[0_30px_90px_rgba(17,24,39,0.08)] lg:grid-cols-[0.62fr_0.38fr]"
        >
          <div className="p-6 md:p-10 lg:p-14">
            <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
              Diagnostic opérationnel
            </p>
            <FadeUpWord as="h2" className="max-w-4xl font-[650] text-[2.65rem] leading-[1] text-[#111318] md:text-[4.25rem] lg:text-[5.1rem]">
              Identifions les tâches qui coûtent le plus de temps.
            </FadeUpWord>
            <p className="mt-7 max-w-2xl text-[1.06rem] leading-8 text-[#4f5b6b]">
              Nous analysons vos processus internes pour repérer les tâches répétitives, estimer les gains possibles et définir le premier système à construire.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ShuffleButton href="mailto:hello@processium.com">
                hello@processium.com
              </ShuffleButton>
              <OpticsButton href="#services" variant="secondary">
                Revoir les expertises
              </OpticsButton>
            </div>
          </div>

          <div className="grid content-between overflow-hidden bg-[#101318] p-6 text-white md:p-10 lg:p-12">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase text-white/58">Format</p>
              <h3 className="mt-5 text-[2rem] font-[650] leading-tight">Un diagnostic orienté gains de temps.</h3>
              <p className="mt-5 text-[1rem] leading-7 text-white/70">
                Le résultat est une liste claire : ce qui peut être automatisé, pourquoi cela vaut la peine, et comment le mettre en place.
              </p>
            </div>

            <div className="mt-10 border-t border-white/18 pt-6">
              <p className="text-[0.82rem] font-semibold text-[#8bb7ff]">Premier livrable</p>
              <p className="mt-3 text-[1.2rem] font-semibold leading-7">
                Une feuille de route opérationnelle, adaptée à vos processus.
              </p>
            </div>
          </div>
        </motion.div>

        <footer className="mt-10 grid gap-8 border-t border-[#dfe5ee] pt-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-[0.92rem] font-semibold text-[#111318]">PROCESSIUM</p>
            <p className="mt-2 max-w-md text-[0.92rem] leading-6 text-[#667085]">
              Micro-logiciels sur mesure pour réduire le travail manuel et améliorer l’efficacité opérationnelle.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[0.84rem] font-semibold text-[#667085]">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#111318]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[0.78rem] font-semibold text-[#8a94a6] md:text-right">
              © 2026 PROCESSIUM
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
