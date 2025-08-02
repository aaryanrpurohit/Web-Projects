import { Poppins } from 'next/font/google';
import "./globals.css";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: 'LinkCore',
  description: 'A modern link-in-bio platform for creators.',
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden text-white w-screen h-screen ${poppins.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
