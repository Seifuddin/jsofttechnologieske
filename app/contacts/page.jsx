import ContactPage from "../components/Contacts";

export const metadata = {
  title: "Contact JSoft Technologies KE",
  description:
    "Contact JSoft Technologies KE for CCTV installation, IT support, networking, graphic design, and creative media solutions in Kisumu and across Kenya.",
  keywords: [
    "contact IT company Kenya",
    "CCTV installation contact Kenya",
    "IT support Kisumu contact",
    "networking services Kenya contact",
  ],
  openGraph: {
    title: "Contact JSoft Technologies KE",
    description:
      "Get in touch with JSoft Technologies KE for IT services, CCTV installation, networking, and graphic design in Kenya.",
    url: "https://jsofttechnologieske.vercel.app/contact",
    siteName: "JSoft Technologies KE",
    type: "website",
  },
};

export default function ContactsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* SEO HEADER SECTION */}
      <section className="hidden px-6 py-12 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact JSoft Technologies KE
        </h1>

        <p className="mt-4 text-gray-600">
          Need CCTV installation, IT support, networking, or graphic design services?
          Reach out to us today. We serve Kisumu, Nairobi, Mombasa, Nakuru, Eldoret
          and all Kenya.
        </p>
      </section>

      {/* ORIGINAL CONTACT COMPONENT */}
      <ContactPage />
    </div>
  );
}