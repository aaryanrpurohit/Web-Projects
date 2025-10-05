"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Howitworks from "@/components/howitworks";
import Community from '@/components/community'
import Footer from '@/components/footer'

export default function Home() {
  const lenisRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    let lenisInstance;

    const loadLenis = async () => {
      const Lenis = (await import("lenis")).default;

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      lenisRef.current = lenisInstance;

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    loadLenis();

    return () => {
      lenisInstance?.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    if (id === "features" && featuresRef.current && lenisRef.current) {
      lenisRef.current.scrollTo(featuresRef.current, { offset: 0 });
    }
  };

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <main>
        <section>
          <Hero />
        </section>
        <section ref={featuresRef} id="features">
          <Features />
        </section>
        <section>
          <Howitworks />
        </section>
        <section>
          <Community />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
