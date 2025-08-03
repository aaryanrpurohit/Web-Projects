import { Baloo_2 } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: 'LinkCore',
  description: 'A modern link-in-bio platform for creators.',
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden text-white w-screen h-screen ${baloo.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
