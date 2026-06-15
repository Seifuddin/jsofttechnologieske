export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jsofttechnologieske.vercel.app/sitemap.xml",
  };
}