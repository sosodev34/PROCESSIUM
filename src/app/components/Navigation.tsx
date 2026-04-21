import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import logoMark from "../../imports/processium-mark.png";
import { ShuffleButton } from "./badtz/ShuffleButton";
import { SiteContainer } from "./SiteContainer";

type EntrancePhase = "intro" | "revealing" | "ready";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Domaines", to: "/domains" },
  { label: "Méthode", to: "/methods" },
  { label: "Innovation", to: "/innovation" },
  { label: "À propos", to: "/about" },
];

interface NavigationProps {
  entrancePhase?: EntrancePhase;
}

export function Navigation({ entrancePhase = "ready" }: NavigationProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-[#dfe5ee] bg-white/94 backdrop-blur-xl transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
        entrancePhase === "intro"
          ? "translate-y-[-20px] opacity-0"
          : entrancePhase === "revealing"
            ? "translate-y-0 opacity-100 duration-500 delay-75"
            : "translate-y-0 opacity-100 duration-300"
      }`}
    >
      <SiteContainer
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "min-h-[72px]" : "min-h-[82px]"
        }`}
      >
        <Link
          to="/"
          data-processium-brand
          className="group flex min-w-0 items-center gap-3"
          aria-label="Accueil PROCESSIUM"
        >
          <span
            data-processium-logo
            className="relative flex h-9 w-9 shrink-0 items-center justify-center"
            aria-hidden="true"
          >
            <img src={logoMark} alt="" className="h-9 w-9 object-contain mix-blend-multiply" />
            <span className="absolute -right-1 top-1/2 h-6 w-px -translate-y-1/2 bg-[#cbd5e4]" />
          </span>
          <span data-processium-wordmark className="processium-wordmark text-[0.82rem] min-[430px]:text-[0.94rem]">
            <span className="processium-wordmark-core">PROCESS</span>
            <span className="processium-wordmark-accent">IUM</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-[0.9rem] font-semibold text-[#526073] xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative py-7 transition-colors duration-300 hover:text-[#111318] ${
                  isActive ? "text-[#111318]" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 z-0 h-0.5 bg-[#1473e6]"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ShuffleButton to="/contact" size="nav" className="shrink-0">
            Contact
          </ShuffleButton>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-[#dfe5ee] bg-white text-[#111318] transition-colors duration-200 hover:bg-[#f5f7fb] md:hidden"
        >
          {isMenuOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
        </button>
      </SiteContainer>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[#dfe5ee] bg-white md:hidden"
          >
            <SiteContainer className="grid gap-2 py-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-[#edf1f6] py-3 text-[1rem] font-semibold ${
                      isActive ? "text-[#111318]" : "text-[#5b6778]"
                    }`
                  }
                >
                  {item.label}
                  <span className="text-[0.78rem] uppercase text-[#8a94a6]">Page</span>
                </NavLink>
              ))}
              <div className="pt-3">
                <ShuffleButton to="/contact" className="w-full justify-center">
                  Ouvrir la discussion
                </ShuffleButton>
              </div>
            </SiteContainer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
