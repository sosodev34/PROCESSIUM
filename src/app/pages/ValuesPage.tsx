import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const heroImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=82";

const valueCards = [
  {
    title: "Protection des données",
    copy: "Les données sont traitées comme un actif sensible. Leur qualité, leur continuité et leur bonne conservation font partie intégrante de la valeur d'un système.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Confidentialité",
    copy: "Processium applique une discipline stricte de non-divulgation et de discrétion professionnelle sur les documents, flux et informations confiés.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Transparence",
    copy: "Les systèmes doivent rester lisibles, compréhensibles et maîtrisables. L'automatisation n'a de sens que si son fonctionnement peut être expliqué.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=82",
  },
];

const commitments = [
  {
    id: "integrite",
    title: "Intégrité et continuité des données",
    copy: "Les informations doivent rester complètes, lisibles et exploitables dans le temps, sans rupture de compréhension entre les équipes, les outils et les usages.",
  },
  {
    id: "acces",
    title: "Accès et exposition maîtrisés",
    copy: "Chaque flux ou droit d'accès est limité à ce qui est réellement nécessaire, afin de réduire les zones d'exposition inutiles et de protéger les informations sensibles.",
  },
  {
    id: "documentation",
    title: "Règles de traitement documentées",
    copy: "Les automatismes, logiques de traitement et règles mises en place sont explicités pour que l'organisation sache ce qui est fait, pourquoi, et dans quelles conditions.",
  },
  {
    id: "durabilite",
    title: "Systèmes utiles et durables",
    copy: "Les solutions retenues privilégient la clarté, l'appropriation et la durée, plutôt qu'une complexité technique difficile à maintenir ou à transmettre.",
  },
];

const insightCards = [
  {
    tag: "Souveraineté",
    title: "Maîtriser les dépendances et garder une lecture claire des flux.",
    copy: "La qualité d'un système repose aussi sur la capacité de l'entreprise à comprendre ce qu'elle utilise, à gouverner ses données et à ne pas dépendre d'une opacité inutile.",
  },
  {
    tag: "Confiance",
    title: "Renforcer la traçabilité, la stabilité et la confiance dans l'exécution.",
    copy: "Une information mieux structurée et mieux gouvernée permet une exécution plus sûre, des arbitrages plus clairs et une meilleure continuité opérationnelle.",
  },
];

const futureMarkers = [
  "décentralisation retenue lorsqu'elle améliore réellement la résilience ou la traçabilité",
  "gouvernance de la donnée pensée comme un principe de long terme",
  "Web 3.0 observé avec exigence, sans effet de mode ni posture spéculative",
];

export function ValuesPage() {
  useDocumentMeta(
    "Nos valeurs | Processium",
    "Découvrez les valeurs de Processium autour de la responsabilité numérique, de la protection des données, de la confidentialité, de la transparence et d'une lecture exigeante du Web 3.0."
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pt-[118px] md:pt-[132px]">
        <div className="relative overflow-hidden bg-[#dfe7f4]">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Infrastructure numérique et environnement technologique illustrant la maîtrise et la responsabilité des systèmes."
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,251,0.10),rgba(247,248,251,0.45)_45%,rgba(247,248,251,0.82))]" />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1473e6] to-transparent" />

          <SiteContainer className="relative flex min-h-[420px] items-end py-8 md:min-h-[540px] md:py-12">
            <div className="max-w-[640px] bg-[#f7f8fb] px-5 py-5 md:px-8 md:py-8 lg:px-10 lg:py-10">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#526073]">Nos valeurs</p>
              <h1 className="mt-4 max-w-[14ch] text-[1.95rem] font-[300] leading-[1.04] text-[#111318] sm:text-[2.45rem] md:text-[3.2rem] lg:text-[3.85rem]">
                Une technologie utile doit aussi être responsable.
              </h1>
              <p className="mt-4 max-w-[52ch] text-[0.98rem] leading-7 text-[#526073] md:leading-8">
                Processium défend une approche exigeante de la technologie: protéger les données, préserver leur qualité, garantir la confidentialité des échanges et garder des systèmes lisibles, maîtrisables et durables.
              </p>
            </div>
          </SiteContainer>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="max-w-3xl">
              <h2 className="text-[1.7rem] font-[300] leading-[1.15] text-[#111318] md:text-[2.1rem]">Repères essentiels</h2>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {valueCards.map((card) => (
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
                    <h3 className="text-[1.35rem] font-[400] leading-[1.18] text-[#111318] md:text-[1.55rem]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-[#526073]">{card.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.64fr)_minmax(320px,0.36fr)]">
              <div className="border border-[#dfe5ee] bg-white px-6 py-7 md:px-8 md:py-9 lg:px-10">
                <h2 className="max-w-[16ch] text-[1.9rem] font-[300] leading-[1.08] text-[#111318] md:text-[2.35rem]">
                  Une entreprise responsable dans sa manière de traiter l'information.
                </h2>
                <p className="mt-5 max-w-[58ch] text-[1rem] leading-8 text-[#526073]">
                  Chez Processium, la performance opérationnelle ne se construit pas au détriment de la qualité de l'information, de la confidentialité ou de la compréhension des systèmes en place. Chaque projet suppose une attention concrète à la protection des données et à la maîtrise de leur cycle de vie.
                </p>

                <Accordion
                  type="single"
                  collapsible
                  defaultValue={commitments[0]?.id}
                  className="mt-7 border-t border-[#dfe5ee]"
                >
                  {commitments.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-[#dfe5ee]">
                      <AccordionTrigger
                        indicator="plus-minus"
                        className="py-5 text-[1rem] font-[400] leading-7 text-[#111318] hover:no-underline"
                      >
                        <span className="max-w-[48ch] pr-4">{item.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[58ch] pb-5 text-[1rem] leading-7 text-[#526073]">
                        {item.copy}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="overflow-hidden bg-[#dfe7f4]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82"
                  alt="Équipe en environnement professionnel illustrant une approche responsable et structurée."
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="relative min-h-[380px] overflow-hidden bg-[#dfe7f4] md:min-h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=82"
                  alt="Réseau numérique mondial représentant la gouvernance, la continuité et la traçabilité des échanges."
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,21,37,0.18),rgba(14,21,37,0.52))]" />
                <div className="relative flex h-full items-end p-6 md:p-8 lg:p-10">
                  <div className="max-w-[430px] bg-white px-6 py-6">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">Valeur</p>
                    <h2 className="mt-4 text-[1.7rem] font-[300] leading-[1.08] text-[#111318] md:text-[2.2rem]">
                      La maîtrise de l'information fait partie de la qualité d'exécution.
                    </h2>
                    <p className="mt-4 text-[1rem] leading-8 text-[#526073]">
                      La rigueur sur les flux, les accès, la conservation et la compréhension des mécanismes techniques n'est pas un sujet secondaire. Elle participe directement à la fiabilité du fonctionnement quotidien.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {insightCards.map((card) => (
                  <article key={card.title} className="border border-[#dfe5ee] bg-white px-6 py-6 md:px-8 md:py-8">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">{card.tag}</p>
                    <h3 className="mt-4 text-[1.45rem] font-[400] leading-[1.15] text-[#111318] md:text-[1.7rem]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[1rem] leading-8 text-[#526073]">{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="overflow-hidden border-t border-[#dfe5ee] pt-8 md:pt-10">
            <div className="border border-[#d9e4f2] bg-[linear-gradient(135deg,#eef4fb,#dbe9fb_52%,#cfe3ff)] text-[#111318]">
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(320px,0.45fr)]">
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#526073]">Perspective</p>
                  <h2 className="mt-4 max-w-[13ch] text-[2rem] font-[300] leading-[1.04] md:text-[2.7rem]">
                    Une lecture sérieuse de la décentralisation et du Web 3.0.
                  </h2>
                  <p className="mt-5 max-w-[56ch] text-[1rem] leading-8 text-[#526073]">
                    Processium n'aborde pas ces sujets comme un discours de posture. Ils sont observés pour ce qu'ils peuvent apporter demain en matière de confiance, de gouvernance, de résilience et de transparence des échanges numériques.
                  </p>

                  <div className="mt-7 grid gap-4">
                    {futureMarkers.map((marker, index) => (
                      <div key={marker} className="grid gap-3 border-t border-[#bfd2ea] pt-4 md:grid-cols-[36px_1fr]">
                        <span className="text-[0.86rem] font-semibold text-[#1473e6]">0{index + 1}</span>
                        <p className="text-[1rem] leading-7 text-[#526073]">{marker}</p>
                      </div>
                    ))}
                  </div>
                </div>

              <div className="overflow-hidden border-t border-[#bfd2ea] lg:border-l lg:border-t-0">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=82"
                  alt="Visualisation numérique abstraite évoquant la décentralisation et les architectures émergentes."
                  className="h-full w-full object-cover brightness-[1.06] saturate-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
