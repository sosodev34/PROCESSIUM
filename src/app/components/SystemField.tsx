import { motion } from "motion/react";
import { HyperspaceBackground } from "./badtz/HyperspaceBackground";
import { SiteContainer } from "./SiteContainer";
import { WireframeDottedGlobe } from "./WireframeDottedGlobe";

const layers = [
  {
    label: "Repérer",
    copy: "Identifier la séquence manuelle qui absorbe encore trop de temps.",
  },
  {
    label: "Concevoir",
    copy: "Définir la bonne réponse technique pour le flux existant.",
  },
  {
    label: "Automatiser",
    copy: "Réduire les passages de relais, la répétition et la friction d'exécution.",
  },
];

export function SystemField() {
  return (
    <section className="bg-[#f7f8fb] py-10 md:py-14 lg:py-16">
      <SiteContainer>
        <motion.div
          initial={{ opacity: 1, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate min-h-[520px] overflow-hidden bg-white text-[#111318] shadow-[0_34px_96px_rgba(17,24,39,0.09)] md:min-h-[620px]"
        >
          <HyperspaceBackground
            className="hyperspace-system-field z-0"
            starColor="#d6e7ff"
            starCount={720}
            starSize={0.7}
            starSpeed={1.012}
            starTrailOpacity={0.46}
            originX={0.54}
            originY={0.42}
          />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_54%_42%,rgba(20,115,230,0.12),transparent_33%),linear-gradient(145deg,rgba(247,248,251,0.08)_0%,rgba(241,244,248,0.68)_55%,rgba(223,229,238,0.95)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 z-0 h-52 bg-gradient-to-t from-[#f7f8fb] to-transparent" />

          <div className="relative z-10 grid min-h-[520px] content-between gap-12 p-6 md:min-h-[620px] md:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)]">
              <div className="max-w-3xl">
                <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                  Systèmes en mouvement
                </p>
                <h2 className="mt-7 max-w-[11ch] text-[2.75rem] font-[650] leading-[1] md:text-[4.25rem] lg:text-[4.8rem]">
                  Une tâche lente peut devenir un système fluide.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[#526073] md:text-[1.14rem]">
                  Un workflow qui prend trente minutes à la main peut souvent tomber à quelques minutes avec la bonne structure technique. Processium cartographie le processus, construit l'outil et retire les étapes inutiles autour.
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden border border-[#dfe5ee] bg-[#f7f9fc] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:min-h-[380px]">
                <WireframeDottedGlobe className="absolute inset-0" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.64),transparent_24%,rgba(247,248,251,0.84)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 border-l border-[#dfe5ee] pl-4">
                  <p className="text-[0.76rem] font-semibold uppercase text-[#1473e6]">Carte opérationnelle</p>
                  <p className="mt-2 max-w-sm text-[0.98rem] leading-6 text-[#526073]">
                    Une vue unique des dépendances, des relais et du flux d'exécution avant simplification.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {layers.map((layer) => (
                <div key={layer.label} className="border-l border-[#dfe5ee] bg-[#f7f9fc] p-5 backdrop-blur-sm">
                  <p className="text-[0.78rem] font-semibold uppercase text-[#1473e6]">{layer.label}</p>
                  <p className="mt-4 max-w-xs text-[1.08rem] font-semibold leading-7 text-[#111318]">{layer.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
