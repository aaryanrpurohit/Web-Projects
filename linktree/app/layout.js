import { Sora } from 'next/font/google';
import "./globals.css";



const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: 'LinkCore',
  description: 'A modern link-in-bio platform for creators.',
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-white w-screen h-screen ${sora.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
