
// import { useEffect } from "react";
import Navbar from '@/components/navbar'
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// import gsap from "gsap";
// import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  // const { isSignedIn } = useUser();
  // const router = useRouter();

//   // 🔁 Redirect if user is signed in
//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

//   // 🔄 GSAP + Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     lenis.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: document.body.style.transform ? "transform" : "fixed",
//     });

//     ScrollTrigger.addEventListener("refresh", () => {
//       requestAnimationFrame(() => ScrollTrigger.refresh());
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       ScrollTrigger.killAll();
//       lenis.destroy();
//     };
//   }, []);

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
