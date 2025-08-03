import { Baloo_2 } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';


const baloo = Baloo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LinkCore",
  description: "A modern link-in-bio platform for creators.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden text-white w-screen h-screen ${baloo.className} bg-black`}
      >
<NextTopLoader
          color="#06b6d4"
          height={3}
          showSpinner={true}
          speed={200}
          template='<div class="bar" role="bar"><div class="peg"></div></div>
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        />
        {children}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
