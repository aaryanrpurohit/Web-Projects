"use client";

import { GlowyShape } from "@/components/GlowyShape";
import { GridBackground } from "@/components/GridBackground";
import { MotionProvider } from "@/components/MotionProvider";
import { Orbitron } from 'next/font/google';
import { useRouter } from "next/navigation";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <MotionProvider>
        <GridBackground />
        <GlowyShape type="pyramid" position="top-left" />
        <GlowyShape type="diamond" position="bottom-right" />
        <GlowyShape type="cube" position="top-right" className="opacity-80" />
      </MotionProvider>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6 max-w-full">
        <h2
          className={`${orbitron.className} text-[#cefbf5] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight`}
        >
          LINKTON
        </h2>
        <p
          className={`${orbitron.className} text-[#7bdee3d3] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug`}
        >
          Shorten Your LINKS.
        </p>
        <p
          className={`${orbitron.className} text-[#7bdee3d3] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug`}
        >
          Stay Sharp.
        </p>
        <button
          onClick={() => router.push("/main")}
          className="mt-6"
        >
          <a className={`btn2 ${orbitron.className} whitespace-nowrap px-6 py-3 text-base sm:text-lg`}>
            <span>TRY NOW</span>
          </a>
        </button>
      </div>
    </main>
  );
}
