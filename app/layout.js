import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsApp";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://jsofttechnologieske.vercel.app"),

  title: {
    default: "JSoft Technologies KE",
    template: "%s | JSoft Technologies KE",
  },

  description:
    "JSoft Technologies KE provides professional CCTV installation, enterprise networking, IT support, graphic design, and creative media solutions across Kisumu, Nairobi, Mombasa, Nakuru, Eldoret and all Kenya.",

  keywords: [
    "CCTV installation Kenya",
    "IT support Kenya",
    "network installation Kenya",
    "graphic design Kenya",
    "security systems Kisumu",
    "IT services Nairobi",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "JSoft Technologies KE",
    description:
      "CCTV Installation, IT Support, Networking & Graphic Design across Kenya.",
    url: "https://jsofttechnologieske.vercel.app",
    siteName: "JSoft Technologies KE",
    type: "website",
    locale: "en_KE",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JSoft Technologies KE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JSoft Technologies KE",
    description:
      "CCTV Installation, IT Support, Networking & Graphic Design across Kenya.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PTCMY6WSKR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTCMY6WSKR');
          `}
        </Script>
      </head>

      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}