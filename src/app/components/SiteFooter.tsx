import { Link } from "react-router";
import { SiteContainer } from "./SiteContainer";

const primaryLinks = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Domaines", to: "/domains" },
  { label: "Méthode", to: "/methods" },
];

const secondaryLinks = [
  { label: "Innovation", to: "/innovation" },
  { label: "À propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe5ee] bg-white text-[#111318]">
      <SiteContainer className="grid gap-10 py-12 md:py-14 lg:grid-cols-[0.42fr_0.58fr] lg:py-16">
        <div>
          <p className="processium-wordmark text-[0.94rem]">
            <span className="processium-wordmark-core">PROCESS</span>
            <span className="processium-wordmark-accent">IUM</span>
          </p>
          <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-[#667085]">
            Processium conçoit des systèmes techniques sur mesure qui réduisent le travail manuel, fluidifient l'exécution et redonnent de la structure aux opérations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Explorer</p>
            <div className="mt-4 grid gap-3 text-[0.92rem] font-semibold text-[#526073]">
              {primaryLinks.map((link) => (
                <Link key={link.to} to={link.to} className="transition-colors duration-200 hover:text-[#111318]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Société</p>
            <div className="mt-4 grid gap-3 text-[0.92rem] font-semibold text-[#526073]">
              {secondaryLinks.map((link) => (
                <Link key={link.to} to={link.to} className="transition-colors duration-200 hover:text-[#111318]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold uppercase text-[#8a94a6]">Contact</p>
            <div className="mt-4 grid gap-3 text-[0.92rem] text-[#526073]">
              <a href="mailto:hello@processium.com" className="font-semibold transition-colors duration-200 hover:text-[#111318]">
                hello@processium.com
              </a>
              <p className="leading-6">
                Partagez le processus, les outils actuels et le temps qu'il consomme.
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>

      <SiteContainer className="border-t border-[#edf1f6] py-4">
        <p className="text-[0.76rem] font-semibold text-[#8a94a6]">© 2026 Processium</p>
      </SiteContainer>
    </footer>
  );
}
