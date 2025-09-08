import type { Metadata } from "next";
import { Albert_Sans } from 'next/font/google';
import Link from "next/link"
import "./globals.css";
import CheckCurrentPath from "./components/CheckCurrentPath";
import Footer from "./components/Footer";

const albert_sans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans'
});

export const metadata: Metadata = {
  title: "SASE at SJSU",
  description: "Official website for the Society of Asian Scientists and Engineers organization chapter at San Jose State University.",
  keywords: ["society of asian scientists and engineers", "sase", "san jose state university", "sjsu", "sase at sjsu", "sase sjsu", "sjsu clubs", "sjsu student orgs"],
  authors: [{name: "SASE at SJSU's Web Development team"}],
  creator: "SASE at SJSU"

  // rest TBD

  //   openGraph: {
  //   title: "Join the Club – Connect, Learn, and Grow at [Your College]",
  //   description:
  //     "Explore upcoming events, meet new people, and build your future with [Club Name] at [College Name].",
  //   url: "https://yourclubsite.com",
  //   siteName: "[Club Name] at [College Name]",
  //   images: [
  //     {
  //       url: "https://yourclubsite.com/og-image.jpg", // ideally 1200x630
  //       width: 1200,
  //       height: 630,
  //       alt: "[Club Name] social preview",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Join the Club at [College Name]",
  //   description: "Events, resources, and opportunities to grow your college experience.",
  //   images: ["https://yourclubsite.com/og-image.jpg"],
  //   creator: "@yourTwitterHandle",
  // },

  // metadataBase: new URL("https://yourclubsite.com"),
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  


  return (
    <html lang="en">
      <body
        className={`${albert_sans.variable} antialiased h-fit`}
      >
        {/* Header navbar */}
        <nav className="h-12 z-10 text-lg sticky top-0 bg-white w-full px-4 flex flex-row">
          <Link href="/" className="hover:drop-shadow-xs hover:drop-shadow-gray-400 h-8/12 w-6 my-auto bg-[url(/sase_logo.png)] bg-contain"></Link>
          <ul className="my-auto ml-auto gap-5 flex flex-row">
            {/* <li><CheckCurrentPath route="/about-us" title="About Us"/></li>
            <li><CheckCurrentPath route="/events" title="Events"/></li>
            <li><CheckCurrentPath route="/programs" title="Programs"/></li>
            <li><CheckCurrentPath route="/sponsorship" title="Sponsorship"/></li> */}
            <li> <a className="button" href="https://forms.gle/qvTNLpruWiycUp6L9">Sign Up</a></li>
          </ul>
        </nav>
        
        {children}

        {/* Footer */}
        <Footer/>

      </body>
    </html>
  );
}
