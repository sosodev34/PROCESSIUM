import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { SiteContainer } from "./SiteContainer";

const primaryLinks = [
  { label: "Nous contacter", to: "/contact" },
  { label: "Découvrir nos services", to: "/services" },
  { label: "Voir notre méthode", to: "/methods" },
  { label: "Qui sommes-nous ?", to: "/about" },
  { label: "Nos valeurs", to: "/valeurs" },
  { label: "Découvrir le fondateur", to: "/fondateur" },
];

const groupedLinks = [
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
      { label: "IA appliquée aux opérations", to: "/innovation" },
      { label: "Déploiement et continuité", to: "/methods" },
    ],
  },
  {
    title: "Pour aller plus loin",
    items: [
      { label: "À propos de Processium", to: "/about" },
      { label: "Nos valeurs", to: "/valeurs" },
      { label: "Le fondateur", to: "/fondateur" },
      { label: "Entrer en contact", to: "/contact" },
      { label: "Lancer une première discussion", to: "/contact" },
    ],
  },
];

const legalTopics = [
  "Conditions d'utilisation",
  "Cookies",
  "Protection des données",
  "Mentions légales",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe5ee] bg-white text-[#111318] dark:border-white/10 dark:bg-[#0b1018] dark:text-white">
      <div className="border-b border-[#e6ebf2] dark:border-white/10">
        <SiteContainer className="py-12 md:py-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(260px,0.3fr)] xl:grid-cols-[minmax(0,0.75fr)_minmax(300px,0.25fr)] xl:gap-10">
            <div>
              <div className="border-b border-[#dfe5ee] pb-6 dark:border-white/10">
                <h2 className="text-[1.8rem] font-[650] leading-[1.08] text-[#111318] dark:text-white md:text-[2.25rem]">
                  Travailler avec nous
                </h2>
              </div>

              <div className="grid gap-10 pt-8 md:grid-cols-2 lg:pt-10 xl:grid-cols-[minmax(240px,0.34fr)_repeat(3,minmax(0,1fr))]">
                <div className="grid gap-4 text-[1rem] font-semibold text-[#111318] dark:text-white">
                  {primaryLinks.map((link) => (
                    <Link key={link.to + link.label} to={link.to} className="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-70">
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} strokeWidth={2} className="text-[#1473e6] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-[#6aa6ff]" />
                    </Link>
                  ))}
                </div>

                {groupedLinks.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-[#8a94a6] dark:text-[#90a1ba]">
                      {group.title}
                    </h3>
                    <div className="mt-4 grid gap-3 text-[0.96rem] text-[#526073] dark:text-[#b1bfd2]">
                      {group.items.map((item) => (
                        <Link key={item.label} to={item.to} className="transition-colors duration-200 hover:text-[#111318] dark:hover:text-white">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#dfe5ee] pt-8 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
              <div className="max-w-sm">
                <div className="border-t border-[#dfe5ee] pt-6 dark:border-white/10 lg:border-t-0 lg:pt-0">
                  <p className="processium-wordmark text-[0.95rem]">
                    <span className="processium-wordmark-core">PROCESS</span>
                    <span className="processium-wordmark-accent">IUM</span>
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-7 text-[#526073] dark:text-[#b1bfd2]">
                    Des systèmes conçus pour simplifier les processus, fiabiliser les flux et améliorer l'exécution opérationnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </div>

      <div className="bg-[#f4f7fb] dark:bg-[#08111b]">
        <SiteContainer className="grid gap-8 py-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(280px,0.3fr)] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.76rem] font-semibold uppercase tracking-[0.05em] text-[#8a94a6] dark:text-[#90a1ba]">
              {legalTopics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>

            <p className="mt-5 max-w-4xl text-[0.8rem] leading-6 text-[#667085] dark:text-[#aab7ca]">
              © 2026 Processium. Les informations présentées sur ce site ont une vocation de présentation générale. Processium conçoit des systèmes opérationnels sur mesure destinés à simplifier les processus, sécuriser les flux et améliorer la qualité d'exécution dans l'entreprise.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#8a94a6] dark:text-[#90a1ba]">
              Contact
            </p>
            <a
              href="mailto:hello@processium.com"
              className="mt-3 inline-flex text-[0.95rem] font-semibold text-[#111318] transition-opacity duration-200 hover:opacity-70 dark:text-white"
            >
              hello@processium.com
            </a>
          </div>
        </SiteContainer>
      </div>
    </footer>
  );
}
