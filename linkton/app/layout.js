import "./globals.css";
import { GlowyShape } from "@/components/GlowyShape";
import { GridBackground } from "@/components/GridBackground";
import { MotionProvider } from "@/components/MotionProvider";

export const metadata = {
  title: "Linkton",
  description: "RP's glow-powered portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-hidden">
        <MotionProvider>
          <GridBackground />
          <GlowyShape type="pyramid" position="top-left" />
          <GlowyShape type="diamond" position="bottom-right" />
          <GlowyShape type="cube" position="top-right" className="opacity-80" />
          <main className="relative z-10">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
