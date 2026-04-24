import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { cn } from "../components/ui/utils";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const heroImage =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2200&q=82";

const domainStats = [
  {
    value: "6",
    label: "grands domaines où les flux, la donnée et l'exécution doivent mieux circuler",
  },
  {
    value: "3",
    label: "signaux récurrents: ressaisie, coordination dispersée, visibilité tardive",
  },
  {
    value: "1",
    label: "même objectif: gagner en clarté, en fiabilité et en vitesse d'action",
  },
];

const domainSignals = [
  "Passages manuels entre outils et traitements qui se dupliquent",
  "Préparation de l'information avant chaque reporting ou arbitrage",
  "Décisions ralenties par des statuts incomplets ou une lecture tardive des flux",
];

const domainTiles = [
  {
    title: "Finance et comptabilité",
    copy: "Rapprochements, contrôles, justificatifs et clôtures gagnent en fluidité lorsque les étapes répétitives sont mieux structurées.",
    kind: "image" as const,
    span: "tall" as const,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=82",
    imagePosition: "50% 45%",
  },
  {
    title: "Reporting",
    copy: "Moins de temps passé à préparer l'information, plus de temps consacré à la lecture et au pilotage.",
    kind: "solid" as const,
    tone: "light" as const,
  },
  {
    title: "Opérations",
    copy: "Quand les suivis, relances et coordinations deviennent trop manuels, l'exécution ralentit.",
    kind: "solid" as const,
    tone: "marine" as const,
  },
  {
    title: "Workflows internes",
    copy: "Demandes, validations, support et circulation d'information peuvent retrouver une continuité simple entre équipes.",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
    imagePosition: "50% 35%",
  },
  {
    title: "Management",
    copy: "Des signaux plus lisibles permettent aux décideurs d'agir plus vite et avec davantage de confiance.",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
    imagePosition: "50% 50%",
  },
  {
    title: "Coordination transverse",
    copy: "Entre fonctions support, gestion et terrain, le besoin reste souvent le même: rendre les flux compréhensibles et durables.",
    kind: "solid" as const,
    tone: "azur" as const,
  },
];

const domainStories = [
  {
    title: "Les environnements financiers ne manquent pas de règles. Ils manquent souvent de continuité d'exécution.",
    tag: "Lecture métier",
    copy: "Quand chaque contrôle, validation ou export dépend d'une manipulation intermédiaire, la qualité repose trop sur l'effort humain. Processium intervient pour remettre de la continuité dans ces enchaînements.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Professionnels en revue d'indicateurs financiers sur un poste de travail partagé.",
  },
  {
    title: "Des opérations plus lisibles",
    tag: "Opérations",
    copy: "L'information de statut, de suivi et d'avancement doit être disponible sans provoquer un travail administratif parallèle.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "Réunion d'équipe autour d'un suivi opérationnel.",
  },
  {
    title: "Un reporting moins artisanal",
    tag: "Pilotage",
    copy: "La donnée utile doit arriver prête à être lue, sans réassemblage manuel à chaque cycle.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "Tableau de bord ouvert sur un ordinateur portable.",
  },
];

const discoverCards = [
  {
    title: "Voir les services",
    copy: "Découvrir les interventions qui rendent ces domaines plus fluides au quotidien.",
    to: "/services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Comprendre la méthode",
    copy: "Lire comment Processium observe un flux, le simplifie et en reconstruit l'exécution.",
    to: "/methods",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Parler d'un cas concret",
    copy: "Partir d'un processus réel, d'un irritant métier ou d'une charge devenue trop manuelle.",
    to: "/contact",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=82",
  },
];

export function DomainsPage() {
  useDocumentMeta(
    "Domaines | Processium",
    "Processium intervient dans des domaines où la qualité des flux, de l'information et de l'exécution conditionne directement la performance."
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pt-[118px] md:pt-[132px]">
        <div className="relative overflow-visible bg-[#f7f8fb]">
          <div className="relative overflow-hidden h-[320px] md:h-[400px] lg:h-[440px]">
            <img
              src={heroImage}
              alt="Environnement professionnel illustrant des équipes coordonnant des flux métiers et des décisions."
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,37,0.12),rgba(10,21,37,0.42))]" />
          </div>

          <SiteContainer className="relative">
            <div className="-mt-20 mb-8 max-w-[40rem] bg-[linear-gradient(225deg,#1473e6,#0d4b91)] px-5 py-5 text-white shadow-[0_25px_100px_rgba(0,0,0,0.15)] md:-mt-28 md:px-6 md:py-6 lg:-mt-32 lg:px-7">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/72">Domaines</p>
              <h1 className="mt-3 max-w-[12ch] text-[1.75rem] font-[300] leading-[1.05] md:text-[2.2rem] lg:text-[2.5rem]">
                Des domaines où les flux doivent mieux circuler.
              </h1>
              <p className="mt-3 max-w-[44ch] text-[0.94rem] leading-6 text-white/82">
                Processium agit là où les tâches, les données et les décisions ont besoin de plus de clarté.
              </p>
            </div>
          </SiteContainer>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="grid gap-6 lg:grid-cols-[56px_minmax(0,1fr)]">
              <div className="hidden lg:flex lg:items-start lg:justify-center">
                <span className="mt-3 h-14 w-px bg-[#d7e2f0]" />
              </div>

              <div className="max-w-5xl">
                <h2 className="text-[1.6rem] font-[300] leading-[1.15] text-[#111318] md:text-[2.05rem] lg:text-[2.45rem]">
                  Des contextes métier différents, mais une même question de fond: comment faire circuler l'information plus clairement pour exécuter plus juste.
                </h2>
                <p className="mt-4 max-w-[72ch] text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                  Comptabilité, finance, reporting, opérations, management ou workflows internes n'ont pas les mêmes contraintes, mais les mêmes frictions reviennent souvent. Ce sont rarement les outils pris isolément qui bloquent. C'est plus souvent la manière dont les étapes s'enchaînent, dont l'information se prépare et dont les équipes se coordonnent.
                </p>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {domainStats.map((stat) => (
                <article key={stat.value} className="pr-4">
                  <div className="text-[3rem] font-[300] leading-none text-[#111318] md:text-[3.35rem]">
                    {stat.value}
                  </div>
                  <span className="mt-3 block h-[10px] w-[38px] rounded-full bg-[#d9eef7]" />
                  <p className="mt-5 max-w-[26ch] text-[0.95rem] leading-7 text-[#526073]">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <div className="relative overflow-hidden bg-[#e9f0f8]">
          <SiteContainer className="grid gap-8 py-8 md:py-10 xl:grid-cols-[minmax(0,0.56fr)_minmax(320px,0.44fr)] xl:items-center lg:py-14">
            <div className="relative min-h-[320px] overflow-hidden bg-[#d7e1ee] md:min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=82"
                alt="Postes de travail et écrans illustrant l'organisation des flux métier."
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.08),rgba(16,19,24,0.46))]" />
            </div>

            <div className="relative bg-white px-6 py-7 shadow-[0_25px_100px_rgba(0,0,0,0.12)] md:px-8 md:py-9 xl:-ml-20 lg:px-10">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">Schémas récurrents</p>
              <h2 className="mt-4 max-w-[15ch] text-[1.8rem] font-[300] leading-[1.08] text-[#111318] md:text-[2.2rem] lg:text-[2.55rem]">
                Les frictions sont rarement spectaculaires. Elles sont surtout répétées.
              </h2>
              <p className="mt-4 max-w-[56ch] text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Quand les mêmes ressaisies reviennent, quand les validations s'accumulent, ou lorsque le pilotage dépend d'une préparation manuelle de l'information, la performance s'érode progressivement. C'est à ce niveau que Processium intervient.
              </p>

              <div className="mt-7 grid gap-4">
                {domainSignals.map((signal, index) => (
                  <div key={signal} className="grid gap-3 border-t border-[#dfe5ee] pt-4 md:grid-cols-[36px_1fr]">
                    <span className="text-[0.86rem] font-semibold text-[#1473e6]">0{index + 1}</span>
                    <p className="text-[1rem] leading-7 text-[#526073]">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </SiteContainer>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="max-w-3xl">
              <h2 className="text-[1.6rem] font-[300] leading-[1.14] text-[#111318] md:text-[1.95rem] lg:text-[2.25rem]">
                Une lecture par domaine, sans perdre la vue d'ensemble.
              </h2>
              <p className="mt-4 max-w-[60ch] text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Chaque environnement a son vocabulaire, ses contraintes et ses rythmes. La réponse ne consiste pas à empiler des outils, mais à mieux organiser l'enchaînement entre les données, les personnes et les décisions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 xl:auto-rows-[220px] xl:grid-cols-3">
              {domainTiles.map((tile) => (
                <article
                  key={tile.title}
                  className={cn(
                    "overflow-hidden",
                    tile.kind === "image"
                      ? "relative min-h-[260px] xl:min-h-0"
                      : "flex min-h-[220px] flex-col justify-between px-6 py-6 md:px-7 md:py-7",
                    tile.kind === "image" && tile.span === "tall" ? "xl:row-span-2" : "",
                    tile.kind === "solid" && tile.tone === "light" ? "bg-[#eef4fb] text-[#111318]" : "",
                    tile.kind === "solid" && tile.tone === "marine" ? "bg-[#0e3a5d] text-white" : "",
                    tile.kind === "solid" && tile.tone === "azur" ? "bg-[#16527d] text-white" : ""
                  )}
                >
                  {tile.kind === "image" ? (
                    <>
                      <img
                        src={tile.image}
                        alt={tile.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: tile.imagePosition }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,37,0.08),rgba(10,21,37,0.68))]" />
                      <div className="relative flex h-full items-end p-6 md:p-7">
                        <div className="max-w-[30ch] bg-[#f7f8fb] px-5 py-5 shadow-[0_16px_50px_rgba(0,0,0,0.15)]">
                          <h3 className="text-[1.28rem] font-[400] leading-[1.2] text-[#111318] md:text-[1.45rem]">
                            {tile.title}
                          </h3>
                          <p className="mt-3 text-[0.96rem] leading-7 text-[#526073]">{tile.copy}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className={cn("text-[0.8rem] font-semibold uppercase tracking-[0.08em]", tile.tone === "light" ? "text-[#667085]" : "text-white/70")}>
                          Domaine
                        </p>
                        <h3 className="mt-4 max-w-[14ch] text-[1.5rem] font-[400] leading-[1.18]">
                          {tile.title}
                        </h3>
                      </div>
                      <p className={cn("max-w-[30ch] text-[0.98rem] leading-7", tile.tone === "light" ? "text-[#526073]" : "text-white/82")}>
                        {tile.copy}
                      </p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="contentTitle">
              <h2 className="text-[1.7rem] font-[300] leading-[1.12] text-[#111318] md:text-[2.2rem]">
                Situations typiques
              </h2>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)]">
              <article className="overflow-hidden bg-white shadow-[0_16px_50px_rgba(0,0,0,0.10)]">
                <div className="relative aspect-[1.45/1] overflow-hidden">
                  <img
                    src={domainStories[0].image}
                    alt={domainStories[0].imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.03),rgba(16,19,24,0.34))]" />
                </div>
                <div className="px-6 py-6 md:px-7 md:py-7">
                  <span className="text-[0.9rem] font-[300] text-[#526073] before:mr-2 before:inline-block before:h-px before:w-[19px] before:align-middle before:bg-[#111318] before:content-['']">
                    {domainStories[0].tag}
                  </span>
                  <h3 className="mt-4 max-w-[22ch] text-[1.45rem] font-[400] leading-[1.18] text-[#111318] md:text-[1.75rem]">
                    {domainStories[0].title}
                  </h3>
                  <p className="mt-4 max-w-[66ch] text-[1rem] leading-8 text-[#526073]">{domainStories[0].copy}</p>
                </div>
              </article>

              <div className="grid gap-6">
                {domainStories.slice(1).map((story) => (
                  <article key={story.title} className="bg-white shadow-[0_16px_50px_rgba(0,0,0,0.10)]">
                    <div className="relative aspect-[1.35/1] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,24,0.02),rgba(16,19,24,0.26))]" />
                    </div>
                    <div className="px-6 py-6">
                      <span className="text-[0.88rem] font-[300] text-[#526073] before:mr-2 before:inline-block before:h-px before:w-[19px] before:align-middle before:bg-[#111318] before:content-['']">
                        {story.tag}
                      </span>
                      <h3 className="mt-4 text-[1.25rem] font-[400] leading-[1.25] text-[#111318] md:text-[1.4rem]">
                        {story.title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-7 text-[#526073]">{story.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="max-w-3xl">
              <h2 className="text-[1.6rem] font-[300] leading-[1.14] text-[#111318] md:text-[1.95rem] lg:text-[2.2rem]">
                Aller plus loin
              </h2>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {discoverCards.map((card) => (
                <article key={card.title} className="grid gap-4">
                  <div className="overflow-hidden bg-[#dfe7f4]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="aspect-[1.18/1] h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-[400] leading-[1.18] text-[#111318] md:text-[1.5rem]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-7 text-[#526073] md:leading-8">{card.copy}</p>
                    <div className="mt-5">
                      <OpticsButton to={card.to} variant="secondary">
                        Ouvrir
                      </OpticsButton>
                    </div>
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
