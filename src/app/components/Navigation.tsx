import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import logoMark from "../../imports/processium-mark.png";
import { ShuffleButton } from "./badtz/ShuffleButton";
import { SiteContainer } from "./SiteContainer";

type EntrancePhase = "intro" | "revealing" | "ready";
type SiteTheme = "light" | "dark";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Domaines", to: "/domains" },
  { label: "Méthode", to: "/methods" },
  { label: "Innovation", to: "/innovation" },
  { label: "À propos", to: "/about" },
  { label: "Valeurs", to: "/valeurs" },
];

interface NavigationProps {
  entrancePhase?: EntrancePhase;
  theme: SiteTheme;
  onToggleTheme: () => void;
}

function ThemeModeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  const statusLabel = isDark
    ? "Mode sombre activé, passer en mode clair"
    : "Mode clair activé, passer en mode sombre";
  const duration = 0.7;
  const scaleMoon = useMotionValue(isDark ? 1 : 0);
  const scaleSun = useMotionValue(isDark ? 0 : 1);
  const pathLengthMoon = useTransform(scaleMoon, [0.6, 1], [0, 1]);
  const pathLengthSun = useTransform(scaleSun, [0.6, 1], [0, 1]);

  const moonVariants = {
    checked: { scale: 1 },
    unchecked: { scale: 0 },
  };

  const sunVariants = {
    checked: { scale: 0 },
    unchecked: { scale: 1 },
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={statusLabel}
      onClick={onToggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
        isDark
          ? "border-white/14 bg-[#0c1420] text-white hover:bg-[#101b2b]"
          : "border-[#dfe5ee] bg-white text-[#111318] hover:bg-[#f7f9fc]"
      }`}
    >
      <span className="sr-only">{statusLabel}</span>
      <motion.div
        aria-hidden="true"
        animate={isDark ? "checked" : "unchecked"}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12.4058 17.7625C15.1672 17.7625 17.4058 15.5239 17.4058 12.7625C17.4058 10.0011 15.1672 7.76251 12.4058 7.76251C9.64434 7.76251 7.40576 10.0011 7.40576 12.7625C7.40576 15.5239 9.64434 17.7625 12.4058 17.7625Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M12.4058 1.76251V3.76251"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M12.4058 21.7625V23.7625"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M4.62598 4.98248L6.04598 6.40248"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M18.7656 19.1225L20.1856 20.5425"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M1.40576 12.7625H3.40576"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M21.4058 12.7625H23.4058"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M4.62598 20.5425L6.04598 19.1225"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M18.7656 6.40248L20.1856 4.98248"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={sunVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthSun, scale: scaleSun }}
          />
          <motion.path
            d="M21.1918 13.2013C21.0345 14.9035 20.3957 16.5257 19.35 17.8781C18.3044 19.2305 16.8953 20.2571 15.2875 20.8379C13.6797 21.4186 11.9398 21.5294 10.2713 21.1574C8.60281 20.7854 7.07479 19.9459 5.86602 18.7371C4.65725 17.5283 3.81774 16.0003 3.4457 14.3318C3.07367 12.6633 3.18451 10.9234 3.76526 9.31561C4.346 7.70783 5.37263 6.29868 6.72501 5.25307C8.07739 4.20746 9.69959 3.56862 11.4018 3.41132C10.4052 4.75958 9.92564 6.42077 10.0503 8.09273C10.175 9.76469 10.8957 11.3364 12.0812 12.5219C13.2667 13.7075 14.8384 14.4281 16.5104 14.5528C18.1823 14.6775 19.8435 14.1979 21.1918 13.2013Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={moonVariants}
            transition={{ duration }}
            style={{ pathLength: pathLengthMoon, scale: scaleMoon }}
          />
        </motion.svg>
      </motion.div>
    </button>
  );
}

export function Navigation({ entrancePhase = "ready", theme, onToggleTheme }: NavigationProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

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
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
        entrancePhase === "intro"
          ? "translate-y-[-20px] opacity-0"
          : entrancePhase === "revealing"
            ? "translate-y-0 opacity-100 duration-500 delay-75"
            : "translate-y-0 opacity-100 duration-300"
      } ${isDark ? "border-white/10 bg-[#0f1622]/88" : "border-[#dfe5ee] bg-white/94"}`}
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
            <img
              src={logoMark}
              alt=""
              className={isDark ? "h-9 w-9 object-contain brightness-110" : "h-9 w-9 object-contain mix-blend-multiply"}
            />
            <span className={`absolute -right-1 top-1/2 h-6 w-px -translate-y-1/2 ${isDark ? "bg-white/16" : "bg-[#cbd5e4]"}`} />
          </span>
          <span data-processium-wordmark className="processium-wordmark text-[0.82rem] min-[430px]:text-[0.94rem]">
            <span className="processium-wordmark-core">PROCESS</span>
            <span className="processium-wordmark-accent">IUM</span>
          </span>
        </Link>

        <div className={`hidden items-center gap-7 text-[0.9rem] font-semibold xl:flex ${isDark ? "text-[#a5b3c8]" : "text-[#526073]"}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative py-7 transition-colors duration-300 ${isDark ? "hover:text-white" : "hover:text-[#111318]"} ${
                  isActive ? (isDark ? "text-white" : "text-[#111318]") : ""
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

        <div className="hidden items-center gap-4 xl:flex">
          <ThemeModeToggle isDark={isDark} onToggle={onToggleTheme} />

          <ShuffleButton to="/contact" size="nav" variant={isDark ? "secondary" : "primary"} className="shrink-0">
            Contact
          </ShuffleButton>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeModeToggle isDark={isDark} onToggle={onToggleTheme} />

          <ShuffleButton
            to="/contact"
            size="nav"
            variant={isDark ? "secondary" : "primary"}
            className="hidden shrink-0 sm:inline-flex"
          >
            Contact
          </ShuffleButton>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center border transition-colors duration-200 ${
              isDark
                ? "border-white/14 bg-white/6 text-white hover:bg-white/10"
                : "border-[#dfe5ee] bg-white text-[#111318] hover:bg-[#f5f7fb]"
            }`}
          >
            {isMenuOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
          </button>
        </div>
      </SiteContainer>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`border-t xl:hidden ${isDark ? "border-white/10 bg-[#0f1622]" : "border-[#dfe5ee] bg-white"}`}
          >
            <SiteContainer className="grid gap-2 py-5 sm:py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b py-3 text-[1rem] font-semibold ${
                      isDark ? "border-white/10" : "border-[#edf1f6]"
                    } ${
                      isActive ? (isDark ? "text-white" : "text-[#111318]") : isDark ? "text-[#a5b3c8]" : "text-[#5b6778]"
                    }`
                  }
                >
                  {item.label}
                  <span className={`text-[0.78rem] uppercase ${isDark ? "text-[#8ea0bd]" : "text-[#8a94a6]"}`}>Page</span>
                </NavLink>
              ))}
              <div className="pt-3">
                <ShuffleButton to="/contact" variant={isDark ? "secondary" : "primary"} className="w-full justify-center">
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
