import ServicesSection from "../components/Services";
import TechnologyCTA from "../components/TechCTA";
import PhotographyLuxurySwiper from "../components/Gallery";
import AboutUs from "../components/About";

export const metadata = {
  title: "Our Services",
  description:
    "Explore JSoft Technologies KE services including CCTV installation, IT support, network installation, graphic design, and creative media solutions in Kenya.",
  keywords: [
    "CCTV installation Kenya",
    "IT support Kenya",
    "network installation Kenya",
    "graphic design Kenya",
    "JSoft Technologies services",
  ],
  openGraph: {
    title: "JSoft Technologies KE Services",
    description:
      "Professional CCTV, IT support, networking, and graphic design services across Kenya.",
    url: "https://jsofttechnologieske.vercel.app/services",
    siteName: "JSoft Technologies KE",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-16">
      {/* HERO SEO INTRO TEXT */}
      <section className="hidden px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Professional IT, Graphic Design, Security & Creative Services in Kenya
        </h1>

        <p className="mt-4 text-gray-600">
          JSoft Technologies KE provides CCTV installation, enterprise networking,
          IT support, graphic design, and creative media solutions across Kisumu,
          Nairobi, Mombasa, Nakuru, Eldoret and all Kenya.
        </p>
      </section>

      
        <AboutUs />
        <ServicesSection />
        <TechnologyCTA />
        <PhotographyLuxurySwiper />
    </div>
  );
}