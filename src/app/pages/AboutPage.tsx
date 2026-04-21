import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { OpticsButton } from "../components/optics/button";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const aboutImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=82";

const principles = [
  "Des systèmes sur mesure plutôt qu'un empilement de produits génériques",
  "La clarté métier avant l'expansion technique",
  "Un périmètre soigné, une exécution sérieuse, des résultats utilisables",
  "Un regard moderne sans théâtre startup",
];

const expectations = [
  "Une lecture directe du processus actuel",
  "Une réponse technique alignée avec les vraies règles métier",
  "Un chemin de delivery pensé pour améliorer les opérations, pas pour les décorer",
];

export function AboutPage() {
  useDocumentMeta(
    "À propos | Processium",
    "Découvrez comment Processium aborde l'automatisation opérationnelle, les systèmes techniques sur mesure et une delivery métier resserrée."
  );

  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une société focalisée sur la clarté opérationnelle."
        copy="Processium existe pour transformer le travail interne répétitif en systèmes techniques structurés. L'automatisation y est abordée d'abord comme une discipline métier, ensuite comme un problème logiciel."
        actions={
          <>
            <ShuffleButton to="/contact">Contacter Processium</ShuffleButton>
            <OpticsButton to="/innovation" variant="decorations">
              Lire innovation
            </OpticsButton>
          </>
        }
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid overflow-hidden bg-white shadow-[0_28px_80px_rgba(17,24,39,0.07)] xl:grid-cols-[minmax(320px,0.42fr)_minmax(0,0.58fr)]">
            <div className="relative min-h-[280px] bg-[#111318] md:min-h-[380px]">
              <img
                src={aboutImage}
                alt="Espace de travail moderne et calme aligné avec une direction de design premium et maîtrisée."
                className="h-full w-full object-cover opacity-[0.78]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.08),rgba(5,9,18,0.86))]" />
            </div>

            <div className="grid gap-6 p-6 md:p-8 lg:p-10">
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Positionnement
              </p>
              <h2 className="max-w-[12ch] text-[2.1rem] font-[650] leading-[1.03] text-[#111318] md:text-[3rem]">
                Processium cherche la crédibilité, pas l'effet de volume.
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-[#526073]">
                La société se positionne comme un partenaire technique pour les entreprises qui veulent des opérations plus propres et plus de temps rendu sur le travail répétitif. Ce n'est pas une machine de conseil large. C'est un constructeur focalisé de systèmes internes utiles.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8">
                <p className="text-[1.08rem] font-semibold leading-7 text-[#111318]">{principle}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-8 border border-[#dfe5ee] bg-white p-6 md:p-8 lg:grid-cols-[0.42fr_0.58fr] lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Ce qu'il faut attendre
              </p>
              <h2 className="mt-6 max-w-[11ch] text-[2rem] font-[650] leading-[1.03] text-[#111318] md:text-[2.85rem]">
                Une relation de travail directe.
              </h2>
            </div>

            <div className="grid gap-5">
              {expectations.map((expectation) => (
                <div key={expectation} className="border-l border-[#dfe5ee] pl-4">
                  <p className="text-[1rem] leading-7 text-[#526073]">{expectation}</p>
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
