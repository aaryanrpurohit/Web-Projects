'use client'

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Work from '@/components/work'
import Service from '@/components/services'
import About_us from '@/components/about-us'
import Contact_us from '@/components/contact-us'

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
        <section id="hero">
          <Hero />
        </section>
        <section ref={workRef} id="work">
          <Work />
        </section>
        <section ref={servicesRef} id="service">
          <Service />
        </section>
        <section ref={aboutRef} id="about">
          <About_us />
        </section>
        <section ref={contactRef} id="contact">
          <Contact_us />
        </section>
      </main>
      <footer className="flex justify-end items-center m-2 mr-20 opacity-60">
        <div>
          Made by <span className="font-black opacity-100">Aaryan Rajpurohit</span>
        </div>
      </footer>
    </>
  );
};

export default Page;
