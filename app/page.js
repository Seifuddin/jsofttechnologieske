import ServicesSection from "./components/Services";
import Hero from "./components/Hero";
import CTASection from "./components/CTA";
import WhyChooseUs from "./components/Why";
import FAQ from "./components/Faq";
import Call from "./components/Emergency";
import SystemStatus from "./components/SystemStatus";
import CreativeShowcase from "./components/Media";
import GraphicDesignServices from "./components/Graphics";
import NetworkingServices from "./components/Networking";

export const metadata = {
  title: "CCTV Installation, Networking & IT Support in Kenya",
  description:
    "JSoft Technologies KE delivers enterprise network installation, CCTV security systems, IT support, graphic design, and creative media solutions across Kenya. Serving businesses and organizations with reliable technology solutions.",

  keywords: [
    "JSoft Technologies KE",
    "CCTV installation Kenya",
    "CCTV cameras Kenya",
    "network installation Kenya",
    "enterprise networking Kenya",
    "structured cabling Kenya",
    "IT support Kenya",
    "computer maintenance Kenya",
    "graphic design Kenya",
    "creative media Kenya",
    "security systems Kenya",
    "ICT solutions Kenya",
    "network engineers Kenya",
    "business IT services Kenya",
    "CCTV installation Nairobi",
    "CCTV installation Kisumu",
    "IT support Nairobi",
    "IT support Kisumu",
  ],

  alternates: {
    canonical: "https://jsofttechnologieske.vercel.app",
  },

  openGraph: {
    title:
      "JSoft Technologies KE | CCTV Installation, Networking & IT Support",
    description:
      "Professional CCTV installation, enterprise networking, IT support, graphic design, and creative media services across Kenya.",
    url: "https://jsofttechnologieske.vercel.app",
    siteName: "JSoft Technologies KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JSoft Technologies KE",
      },
    ],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "JSoft Technologies KE | CCTV Installation, Networking & IT Support",
    description:
      "Professional CCTV installation, enterprise networking, IT support, graphic design, and creative media services across Kenya.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main>
        {/* HERO (MUST CONTAIN H1) */}
        <Hero />

        {/* SEO TEXT BLOCK (IMPORTANT FOR GOOGLE) */}
        <section className="hidden px-6 py-10 text-center max-w-4xl mx-auto">
          <p className="text-gray-700">
            JSoft Technologies KE provides professional CCTV installation,
            enterprise networking, IT support, graphic design, and creative media
            solutions in Kisumu, Nairobi, Mombasa, Nakuru, Eldoret, and across Kenya.
          </p>
        </section>

        {/* CORE SERVICES (MOST IMPORTANT) */}
        <NetworkingServices />
        <SystemStatus />
        <ServicesSection />
        <CTASection />
        <GraphicDesignServices />
        <CreativeShowcase />

        {/* TRUST BUILDING */}
        <WhyChooseUs />

        {/* CONVERSION SECTIONS */}
        <Call />

        {/* SUPPORT CONTENT */}
        <FAQ />
      </main>
    </div>
  );
}