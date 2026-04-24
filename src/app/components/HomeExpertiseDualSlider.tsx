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
    copy: "Concevoir des applications utiles pour structurer le travail des équipes et traduire les règles métier dans l'outil.",
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
    copy: "Mobiliser l'IA lorsqu'elle apporte un gain concret sur le traitement documentaire, l'extraction d'information ou la préparation d'actions.",
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
    copy: "Passer d'un besoin métier à un système durable avec une approche claire, alignée sur les usages et les priorités de l'entreprise.",
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
    <section className="bg-[#f7f8fb] py-12 md:py-16 lg:py-20">
      <SiteContainer>
        <div className="overflow-hidden border border-[#dfe5ee] bg-white">
          <div className="grid lg:grid-cols-[minmax(320px,0.38fr)_minmax(0,0.62fr)]">
            <div className="relative overflow-hidden bg-[linear-gradient(160deg,#0d1525,#17253d)] p-6 text-white md:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,166,255,0.26),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,166,255,0.16),transparent_26%)]" />
              <div className="relative min-h-[330px] md:min-h-[360px] lg:min-h-[470px]">
                {expertiseSlides.map((slide, index) => (
                  <article
                    key={slide.title}
                    className={cn(
                      "absolute inset-0 grid content-between transition-all duration-500",
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
                      <h2 className="mt-6 max-w-[13ch] text-[2rem] font-[650] leading-[1.03] md:text-[2.8rem]">
                        {slide.title}
                      </h2>
                      <p className="mt-5 max-w-[34ch] text-[1rem] leading-8 text-white/74">{slide.copy}</p>
                    </div>

                    <div className="pt-8">
                      <Link
                        to={slide.to}
                        className="group inline-flex items-center gap-3 text-[0.98rem] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
                      >
                        {slide.cta}
                        <ArrowRight size={16} className="text-[#8bb7ff] transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden bg-[linear-gradient(180deg,#eef3f9,#f7f8fb)] px-0 py-6 md:py-8 lg:px-0 lg:py-10">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {expertiseSlides.map((slide, index) => (
                    <div
                      key={slide.title}
                      className="min-w-0 shrink-0 grow-0 basis-[84%] pl-4 sm:basis-[70%] lg:basis-[68%] lg:pl-6"
                    >
                      <button
                        type="button"
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                          "block h-[320px] w-full overflow-hidden transition-all duration-500 md:h-[380px] lg:h-[470px]",
                          index === selectedIndex
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-6 scale-[0.88] opacity-58"
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

          <div className="grid gap-4 border-t border-[#dfe5ee] px-6 py-5 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div className="h-[2px] w-full bg-[#dbe4f0]">
              <div className="h-full bg-[#1473e6] transition-all duration-500" style={{ width: progressWidth }} />
            </div>

            <div className="flex items-center gap-3 text-[#111318]">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={selectedIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe5ee] bg-white transition-colors duration-300 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-40"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe5ee] bg-white transition-colors duration-300 hover:bg-[#f7f9fc] disabled:cursor-not-allowed disabled:opacity-40"
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
