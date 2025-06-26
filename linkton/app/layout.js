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
        {children}
      </body>
    </html>
  );
}
