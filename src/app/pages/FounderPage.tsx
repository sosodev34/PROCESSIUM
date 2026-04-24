import { Link } from "react-router";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import founderPortrait from "../../imports/ChatGPT_Image_19_avr._2026,_09_10_53.png";

function LinkedInLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        fill="#0A66C2"
      />
    </svg>
  );
}

function MailLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 49.4 512 399.42"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91Z" fill="#4285F4" />
      <path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251Z" fill="#34A853" />
      <path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891Z" fill="#FBBC04" />
      <path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727Z" fill="#EA4335" />
      <path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18Z" fill="#C5221F" />
    </svg>
  );
}

const footerPrimaryLinks = [
  { label: "Nous contacter", to: "/contact" },
  { label: "Nos services", to: "/services" },
  { label: "Qui sommes-nous ?", to: "/about" },
  { label: "Nos valeurs", to: "/valeurs" },
  { label: "Taffou Solomon", to: "/fondateur" },
  { label: "Innovation", to: "/innovation" },
];

const footerGroups = [
  {
    title: "Explorer",
    items: [
      { label: "Accueil", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Domaines", to: "/domains" },
      { label: "Méthode", to: "/methods" },
      { label: "Innovation", to: "/innovation" },
      { label: "Valeurs", to: "/valeurs" },
    ],
  },
  {
    title: "Nos expertises",
    items: [
      { label: "Automatisation des workflows", to: "/services" },
      { label: "Outils internes", to: "/services" },
      { label: "Données et pilotage", to: "/domains" },
      { label: "Technologies émergentes", to: "/innovation" },
    ],
  },
  {
    title: "Pour aller plus loin",
    items: [
      { label: "À propos de Processium", to: "/about" },
      { label: "Nos valeurs", to: "/valeurs" },
      { label: "Voir la méthode", to: "/methods" },
      { label: "Entrer en contact", to: "/contact" },
    ],
  },
];

const legalTopics = [
  "Conditions d'utilisation",
  "Cookies",
  "Protection des données",
  "Mentions légales",
];

export function FounderPage() {
  useDocumentMeta(
    "Taffou Solomon | Processium",
    "Découvrez le parcours de Taffou Solomon, fondateur de Processium, entre développement web, technologies émergentes, blockchain, gestion d'entreprise et optimisation des procédés."
  );

  return (
    <>
      <section className="bg-[#f7f8fb] pb-10 pt-[118px] md:pb-12 md:pt-[132px] lg:pb-14">
        <SiteContainer>
          <div className="border-t border-[#dfe5ee] pt-7 md:pt-8">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-10">
              <div className="flex justify-center lg:justify-start">
                <div className="h-[188px] w-[188px] overflow-hidden rounded-full border border-[#dfe5ee] bg-white shadow-[0_18px_46px_rgba(15,23,42,0.08)] md:h-[220px] md:w-[220px]">
                  <img
                    src={founderPortrait}
                    alt="Taffou Solomon"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-5">
                <div>
                  <h1 className="text-[1.9rem] font-normal leading-[1.08] text-[#111318] md:text-[2.15rem]">
                    Taffou Solomon
                  </h1>
                  <h2 className="mt-2 max-w-3xl text-[0.96rem] font-normal leading-7 text-[#111318] md:text-[1rem]">
                    Fondateur de Processium | Développement web, systèmes d'information et optimisation des opérations.
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir Taffou Solomon sur LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-opacity duration-200 hover:opacity-85"
                  >
                    <LinkedInLogo className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href="mailto:hello@processium.com"
                    aria-label="Contacter Taffou Solomon par email"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-opacity duration-200 hover:opacity-85"
                  >
                    <MailLogo className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-4xl border-t border-[#dfe5ee] pt-8 lg:pt-10">
            <div className="grid gap-5 text-[1rem] leading-8 text-[#526073] md:text-[1.03rem]">
              <p>
                Le parcours à l'origine de Processium s'est d'abord construit autour du développement web, avec un intérêt marqué pour la conception d'interfaces, la structuration d'applications et la traduction d'un besoin en solution fonctionnelle. Très vite, cette base technique s'est élargie à une curiosité plus large pour les nouvelles technologies du web, l'informatique et la blockchain.
              </p>
              <p>
                En parallèle, un attrait fort pour la gestion d'entreprise, la comptabilité de gestion et la finance a progressivement enrichi cette lecture. Au-delà de l'outil lui-même, l'enjeu est aussi de comprendre les flux, les coûts, la performance, les logiques de pilotage et la manière dont une organisation fonctionne au quotidien.
              </p>
              <p>
                C'est dans cette articulation entre technique et réalité opérationnelle que Processium a pris forme. Au fil des stages et des premières expériences, il est apparu clairement que le développement et les systèmes pouvaient optimiser certains procédés, réduire le temps passé sur des tâches répétitives et améliorer la productivité. Processium est né de cette conviction: relier les technologies aux usages réels pour construire des gains concrets et durables.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <footer className="border-t border-[#dfe5ee]" aria-label="Footer de la page fondateur">
            <div className="py-10 md:py-12 lg:py-14">
              <div className="mx-auto max-w-[1400px]">
                <div className="mb-8 border-b border-[#dfe5ee] pb-6">
                  <h2 className="text-[1.8rem] font-[650] leading-[1.08] text-[#111318] md:text-[2.2rem]">
                    Travailler avec nous
                  </h2>
                </div>

                <div className="grid gap-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(220px,0.22fr)]">
                  <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.32fr)_repeat(3,minmax(0,1fr))]">
                    <div className="grid gap-4 text-[1rem] font-semibold text-[#111318]">
                      {footerPrimaryLinks.map((link) => (
                        <Link key={link.label} to={link.to} className="transition-opacity duration-200 hover:opacity-70">
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {footerGroups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8a94a6]">
                          {group.title}
                        </h3>
                        <div className="mt-4 grid gap-3 text-[0.96rem] text-[#526073]">
                          {group.items.map((item) => (
                            <Link key={item.label} to={item.to} className="transition-colors duration-200 hover:text-[#111318]">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8a94a6]">
                      Nous suivre
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir Processium sur LinkedIn"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-opacity duration-200 hover:opacity-85"
                      >
                        <LinkedInLogo className="h-[18px] w-[18px]" />
                      </a>
                      <a
                        href="mailto:hello@processium.com"
                        aria-label="Contacter Processium par email"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe5ee] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-opacity duration-200 hover:opacity-85"
                      >
                        <MailLogo className="h-[18px] w-[18px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#dfe5ee] bg-[#f4f7fb]">
              <div className="mx-auto grid max-w-[1400px] gap-8 py-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(260px,0.3fr)] lg:items-start">
                <div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.76rem] font-semibold uppercase tracking-[0.05em] text-[#8a94a6]">
                    {legalTopics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <p className="mt-5 max-w-4xl text-[0.8rem] leading-6 text-[#667085]">
                    © 2026 Processium. Cette page présente le parcours à l'origine de Processium et la logique fondatrice qui relie développement, systèmes et efficacité opérationnelle.
                  </p>
                </div>

                <div className="lg:text-right">
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#8a94a6]">Contact</p>
                  <a
                    href="mailto:hello@processium.com"
                    className="mt-3 inline-flex text-[0.95rem] font-semibold text-[#111318] transition-opacity duration-200 hover:opacity-70"
                  >
                    hello@processium.com
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </SiteContainer>
      </section>
    </>
  );
}
