import AboutUs from "../components/About";
import AboutHero from "../components/HeroAbout";
import MissionVisionMotto from "../components/Mission";
import ProcessSection from "../components/Process";
import TeamSection from "../components/Team";
import Testimonials from "../components/Testimonials";
import CompanyStory from "../components/Timeline";

export const metadata = {
  title: "About JSoft Technologies KE",
  description:
    "Learn about JSoft Technologies KE — a Kenyan IT company specializing in CCTV installation, networking, IT support, graphic design, and creative media solutions.",
  keywords: [
    "JSoft Technologies Kenya",
    "IT company Kenya",
    "CCTV installation company Kenya",
    "graphic design Kenya",
    "networking services Kenya",
  ],
  openGraph: {
    title: "About JSoft Technologies KE",
    description:
      "Discover our story, mission, vision, and professional IT services across Kenya.",
    url: "https://jsofttechnologieske.vercel.app/about",
    siteName: "JSoft Technologies KE",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden mt-0 pt-10 md:pt-16">
      {/* SEO HERO SECTION */}
      <section className="hidden px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          About JSoft Technologies KE
        </h1>

        <p className="mt-4 text-gray-600">
          We are a Kenyan technology company providing CCTV installation,
          enterprise networking, IT support, graphic design, and creative media
          solutions across Kisumu, Nairobi, Mombasa, Nakuru, Eldoret and all Kenya.
        </p>
      </section>

      {/* ORIGINAL CONTENT SECTIONS */}
      <AboutHero />
      <CompanyStory />
      <MissionVisionMotto />
      <Testimonials />
      <ProcessSection />
      <TeamSection />
    </div>
  );
}