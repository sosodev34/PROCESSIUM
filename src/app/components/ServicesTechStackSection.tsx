import {
  AppWindow,
  Bot,
  Boxes,
  Braces,
  Cable,
  Cloud,
  Database,
  FileSearch,
  GitBranch,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import logoMark from "../../imports/processium-mark.png";

const stackCards = [
  {
    title: "Applications et interfaces",
    copy: "React, TypeScript et interfaces internes pensées pour les usages réels des équipes.",
  },
  {
    title: "Automatisation et orchestration",
    copy: "Workflows, logique métier et déclenchements structurés pour réduire la répétition.",
  },
  {
    title: "Données et intégrations",
    copy: "APIs, synchronisation, transformation de données et circulation fiable de l'information.",
  },
  {
    title: "IA et traitement documentaire",
    copy: "Extraction, classification, OCR et assistants ciblés lorsque le gain opérationnel est concret.",
  },
];

const orbitItems = [
  { label: "React", Icon: AppWindow, orbit: 0, angle: 12, tone: "blue" },
  { label: "TypeScript", Icon: Braces, orbit: 0, angle: 112, tone: "slate" },
  { label: "API", Icon: Cable, orbit: 0, angle: 204, tone: "blue" },
  { label: "SQL", Icon: Database, orbit: 0, angle: 302, tone: "slate" },
  { label: "Python", Icon: Boxes, orbit: 1, angle: 30, tone: "blue" },
  { label: "Workflows", Icon: Workflow, orbit: 1, angle: 118, tone: "slate" },
  { label: "IA", Icon: Bot, orbit: 1, angle: 206, tone: "blue" },
  { label: "OCR", Icon: FileSearch, orbit: 1, angle: 296, tone: "slate" },
  { label: "Cloud", Icon: Cloud, orbit: 2, angle: 8, tone: "slate" },
  { label: "Déploiement", Icon: ServerCog, orbit: 2, angle: 94, tone: "blue" },
  { label: "Versioning", Icon: GitBranch, orbit: 2, angle: 186, tone: "slate" },
  { label: "Fiabilité", Icon: ShieldCheck, orbit: 2, angle: 280, tone: "blue" },
];

const orbitSizes = [15.5, 23, 30.5];
const orbitDurations = [18, 26, 34];

export function ServicesTechStackSection() {
  return (
    <div className="relative border-t border-[#dfe5ee] pt-8 lg:pt-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
            <span className="h-px w-8 bg-[#1473e6]" />
            Technologies
          </p>

          <h2 className="mt-5 max-w-[12ch] text-[2.15rem] font-[650] leading-[1.02] text-[#111318] md:text-[3rem]">
            Un socle technique choisi pour servir l'usage, pas pour l'alourdir.
          </h2>

          <p className="mt-5 max-w-xl text-[1rem] leading-8 text-[#526073]">
            Selon le projet, Processium combine interfaces, automatisation, intégrations, données et IA dans une architecture lisible, robuste et adaptée au niveau de complexité réel.
          </p>

          <div className="mt-8 grid gap-0 border-t border-[#dfe5ee]">
            {stackCards.map((card) => (
              <article
                key={card.title}
                className="border-b border-[#dfe5ee] py-5 sm:grid sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:gap-6"
              >
                <h3 className="text-[1rem] font-semibold text-[#111318]">{card.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-7 text-[#586374] sm:mt-0">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[26rem] overflow-hidden lg:min-h-[32rem]">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative h-[26rem] w-[26rem] translate-x-[18%] sm:h-[31rem] sm:w-[31rem] sm:translate-x-[16%] lg:h-[35rem] lg:w-[35rem] lg:translate-x-[20%]">
              <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8e1ee] bg-white/95 shadow-[0_18px_40px_rgba(18,38,63,0.12)]">
                <div className="flex flex-col items-center gap-2">
                  <img src={logoMark} alt="" className="h-8 w-8 object-contain" />
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[#111318]">
                    Processium
                  </span>
                </div>
              </div>

              {orbitSizes.map((size, orbitIndex) => {
                const duration = orbitDurations[orbitIndex];
                const reverse = orbitIndex % 2 === 1;
                const orbitLabel = orbitIndex === 0 ? "Applications" : orbitIndex === 1 ? "Automatisation" : "Architecture";

                return (
                  <div
                    key={size}
                    className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#cbd5e4]"
                    style={{
                      width: `${size}rem`,
                      height: `${size}rem`,
                      transform: "translate(-50%, -50%)",
                      animation: `${reverse ? "processiumOrbitReverse" : "processiumOrbitSpin"} ${duration}s linear infinite`,
                    }}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dfe5ee] bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                      {orbitLabel}
                    </div>

                    {orbitItems
                      .filter((item) => item.orbit === orbitIndex)
                      .map(({ label, Icon, angle, tone }) => {
                        const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                        const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

                        return (
                          <div
                            key={label}
                            className="absolute"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <div
                              className={`flex min-w-[7rem] items-center gap-2 rounded-full border px-3 py-2 shadow-[0_10px_22px_rgba(18,38,63,0.08)] ${
                                tone === "blue"
                                  ? "border-[#d9e7ff] bg-[#edf4ff] text-[#0c4da1]"
                                  : "border-[#e3e9f1] bg-white text-[#1f2937]"
                              }`}
                              style={{
                                animation: `${reverse ? "processiumOrbitSpin" : "processiumOrbitReverse"} ${duration}s linear infinite`,
                              }}
                            >
                              <Icon size={16} strokeWidth={2.1} />
                              <span className="text-[0.75rem] font-semibold">{label}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes processiumOrbitSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes processiumOrbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
