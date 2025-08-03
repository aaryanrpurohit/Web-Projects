"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Info from "@/components/info";
import Footer from '@/components/footer'


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      // No .update() in Lenis — but this ensures layout is recalculated
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-auto h-auto">
        <Introduction />
        <Info />
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  );
};

export default Page;
