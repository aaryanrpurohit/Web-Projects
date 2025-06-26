"use client"
import { GlowyShape } from "@/components/GlowyShape";
import { GridBackground } from "@/components/GridBackground";
import { MotionProvider } from "@/components/MotionProvider";
import { Orbitron } from 'next/font/google'
import { useRouter } from "next/navigation";


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})
export default function Home() {
  const router = useRouter()
  return (
    <>
      <MotionProvider>
        <GridBackground />
        <GlowyShape type="pyramid" position="top-left" />
        <GlowyShape type="diamond" position="bottom-right" />
        <GlowyShape type="cube" position="top-right" className="opacity-80" />
      </MotionProvider>
      <h2 className={`${orbitron.className} text-[#cefbf5] font-extrabold text-7xl absolute left-[35%] top-[20%]`}>LINKTON</h2>
      <div className={`${orbitron.className} text-[#7bdee3d3] font-bold text-5xl absolute left-[27%] top-[40%]`}>Shortern Your LINKS.</div>
      <div className={`${orbitron.className} text-[#7bdee3d3] font-bold text-5xl absolute left-[37%] top-[47%]`}>Stay Sharp.</div>
      <button className="bottun" onClick={()=> router.push("/main")}>
        <a className={`a ${orbitron.className}`}><span>TRY NOW</span></a>
      </button>


    </>
  );
}
