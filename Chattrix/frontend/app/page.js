"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Howitworks from "@/components/howitworks";
import Community from '@/components/community'
import Footer from '@/components/footer'

export default function Home() {


  return (
    <>
      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        <section>
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
