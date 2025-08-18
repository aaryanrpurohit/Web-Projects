'use client'

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Work from '@/components/work'
import Service from '@/components/services'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

const Page = () => {

  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (id) => {
    if (id === "work") workRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "services") servicesRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (id === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
         <Navbar onNavigate={scrollToSection} />
      </header>
      <main>
        <section  id="hero">
          <Hero />
        </section>
        <section ref={workRef}  id="work">
          <Work />
        </section>
        <section ref={servicesRef} id="service">
        <Service />
        </section>
      </main>

    </>
  );
};

export default Page;
