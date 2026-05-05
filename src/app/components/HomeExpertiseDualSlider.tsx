import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SiteContainer } from "./SiteContainer";
import { cn } from "./ui/utils";

const expertiseSlides = [
  {
    title: "Automatisation des workflows",
    copy: "Fluidifier les séquences métier, limiter les interventions manuelles et améliorer la continuité d'exécution.",
    cta: "Accélérer vos workflows",
    to: "/services",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=82",
  },
  {
    title: "Outils internes ciblés",
    copy: "Concevoir des applications ciblées pour structurer le travail des équipes et traduire les règles métier.",
    cta: "Structurer vos outils",
    to: "/services",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=82",
  },
  {
    title: "Données et pilotage",
    copy: "Mieux organiser la circulation des données pour renforcer la visibilité, le reporting et la qualité de décision.",
    cta: "Renforcer le pilotage",
    to: "/domains",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=82",
  },
  {
    title: "IA appliquée aux opérations",
    copy: "Mobiliser l'IA lorsqu'elle apporte un gain concret sur l'analyse documentaire, l'extraction d'information ou la préparation d'actions.",
    cta: "Activer l'IA utile",
    to: "/innovation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=82",
  },
  {
    title: "Intégrations et continuité des flux",
    copy: "Relier les systèmes, réduire les ressaisies et rendre les échanges plus fiables entre équipes et outils.",
    cta: "Fluidifier vos systèmes",
    to: "/services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=82",
  },
  {
    title: "Méthode et déploiement",
    copy: "Transformer un besoin métier en système durable, aligné sur les usages et les priorités de l'entreprise.",
    cta: "Voir notre méthode",
    to: "/methods",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=82",
  },
];

export function HomeExpertiseDualSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handleSelect();
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  const activeSlide = expertiseSlides[selectedIndex] ?? expertiseSlides[0];
  const progressWidth = `${((selectedIndex + 1) / expertiseSlides.length) * 100}%`;

  return (
    <section className="bg-[#f7f8fb] py-10 md:py-14 lg:py-[4.5rem]">
      <SiteContainer>
        <div className="overflow-hidden border-y border-[#dfe5ee] bg-[#f7f8fb] md:border">
          <div className="grid xl:grid-cols-[minmax(320px,0.38fr)_minmax(0,0.62fr)]">
            <div className="relative overflow-hidden bg-[linear-gradient(160deg,#0d1525,#17253d)] px-5 py-6 text-center text-white md:p-7 md:text-left xl:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,166,255,0.26),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,166,255,0.16),transparent_26%)]" />
              <div className="relative md:min-h-[280px] lg:min-h-[320px] xl:min-h-[400px]">
                <article className="grid gap-6 md:hidden">
                  <div>
                    <p className="inline-flex items-center justify-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white/62">
                      <span className="h-px w-8 bg-[#8bb7ff]" />
                      Expertises
                    </p>
                    <h2 className="mx-auto mt-5 max-w-[13ch] text-[clamp(1.75rem,8.8vw,2.28rem)] font-[650] leading-[1.08] [text-wrap:balance]">
                      {activeSlide.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[31rem] text-[0.94rem] leading-7 text-white/74">
                      {activeSlide.copy}
                    </p>
                  </div>

                  <Link
                    to={activeSlide.to}
                    className="group inline-flex items-center justify-center gap-3 text-[0.94rem] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
                  >
                    {activeSlide.cta}
                    <ArrowRight size={16} className="text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>

                {expertiseSlides.map((slide, index) => (
                  <article
                    key={slide.title}
                    className={cn(
                      "absolute inset-0 hidden content-between transition-all duration-500 md:grid",
                      index === selectedIndex
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    )}
                    aria-hidden={index !== selectedIndex}
                  >
                    <div>
                      <p className="inline-flex items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white/62">
                        <span className="h-px w-8 bg-[#8bb7ff]" />
                        Expertises
                      </p>
                      <h2 className="mt-5 max-w-[13ch] text-[1.7rem] font-[650] leading-[1.04] md:text-[2.2rem] lg:text-[2.45rem] xl:text-[2.75rem]">
                        {slide.title}
                      </h2>
                      <p className="mt-4 max-w-[34ch] text-[0.95rem] leading-7 text-white/74 md:text-[0.98rem] md:leading-8">
                        {slide.copy}
                      </p>
                    </div>

                    <div className="pt-6 md:pt-7">
                      <Link
                        to={slide.to}
                        className="group inline-flex items-center gap-3 text-[0.94rem] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
                      >
                        {slide.cta}
                        <ArrowRight size={16} className="text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden bg-[#f7f8fb] px-0 py-5 md:bg-[linear-gradient(180deg,#eef3f9,#f7f8fb)] md:py-7 xl:py-8">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {expertiseSlides.map((slide, index) => (
                    <div
                      key={slide.title}
                      className="min-w-0 shrink-0 grow-0 basis-[82%] pl-3 sm:basis-[68%] sm:pl-4 md:basis-[56%] md:pl-5 lg:basis-[46%] xl:basis-[66%] xl:pl-6"
                    >
                      <button
                        type="button"
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                          "block aspect-[1.12/1] w-full overflow-hidden transition-all duration-500 sm:aspect-[1.25/1] md:h-[300px] md:aspect-auto xl:h-[380px]",
                          index === selectedIndex
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-2 scale-[0.96] opacity-70 md:translate-y-4 md:scale-[0.92] md:opacity-60"
                        )}
                        aria-label={`Afficher ${slide.title}`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-[#dfe5ee] px-4 py-4 md:px-7 lg:grid-cols-[1fr_auto] lg:items-center xl:px-9">
            <div className="h-[2px] w-full bg-[#dbe4f0]">
              <div className="h-full bg-[#1473e6] transition-all duration-500" style={{ width: progressWidth }} />
            </div>

            <div className="flex items-center justify-center gap-3 text-[#111318] lg:justify-start">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={selectedIndex === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white transition-colors duration-300 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Slide précédente"
              >
                <ArrowLeft size={16} />
              </button>

              <p className="min-w-[52px] text-center text-[0.92rem] font-semibold text-[#526073]">
                {selectedIndex + 1} / {expertiseSlides.length}
              </p>

              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={selectedIndex === expertiseSlides.length - 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white transition-colors duration-300 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Slide suivante"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="sr-only" aria-live="polite">
            Slide active: {activeSlide.title}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
