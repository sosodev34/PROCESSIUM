import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";
import { Outlet, Route, Routes, useLocation } from "react-router";
import { Navigation } from "./components/Navigation";
import { ParticleTextIntro } from "./components/ParticleTextIntro";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteFooter } from "./components/SiteFooter";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DomainsPage } from "./pages/DomainsPage";
import { HomePage } from "./pages/HomePage";
import { InnovationPage } from "./pages/InnovationPage";
import { MethodsPage } from "./pages/MethodsPage";
import { ServicesPage } from "./pages/ServicesPage";

type IntroPhase = "intro" | "revealing" | "ready";

function SiteFrame() {
  const location = useLocation();
  const hasPlayedIntroRef = useRef(location.pathname !== "/");
  const lenisRef = useRef<Lenis | null>(null);
  const [introPhase, setIntroPhase] = useState<IntroPhase>(location.pathname === "/" ? "intro" : "ready");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.02,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    let frame = 0;

    const animate = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIntroPhase("ready");
      return;
    }

    if (hasPlayedIntroRef.current) {
      setIntroPhase("ready");
      return;
    }

    setIntroPhase("intro");
  }, [location.pathname]);

  const handleIntroRevealStart = useCallback(() => {
    setIntroPhase((currentPhase) => (currentPhase === "intro" ? "revealing" : currentPhase));
  }, []);

  const handleIntroComplete = useCallback(() => {
    hasPlayedIntroRef.current = true;
    setIntroPhase("ready");
  }, []);

  const siteIsEntering = introPhase !== "intro";
  const shouldShowIntro = location.pathname === "/" && !hasPlayedIntroRef.current && introPhase !== "ready";
  const pageBackground =
    introPhase === "intro" ? "#f3f6fb" : introPhase === "revealing" ? "#f5f7fb" : "#f7f8fb";

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: pageBackground }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen overflow-x-hidden text-[#111318] antialiased"
    >
      <ScrollProgress />
      <Navigation entrancePhase={introPhase} />

      <motion.div
        initial={false}
        animate={
          siteIsEntering
            ? { filter: "blur(0px)", opacity: 1, scale: 1, y: 0 }
            : { filter: "blur(16px)", opacity: 0.16, scale: 0.992, y: 28 }
        }
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: siteIsEntering ? "auto" : "none" }}
      >
        <main key={location.pathname}>
          <Outlet />
        </main>
        <SiteFooter />
      </motion.div>

      {shouldShowIntro ? (
        <ParticleTextIntro
          onRevealStart={handleIntroRevealStart}
          onComplete={handleIntroComplete}
        />
      ) : null}
    </motion.div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteFrame />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/methods" element={<MethodsPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
