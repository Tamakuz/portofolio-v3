const siteUrl = "https://jovan.riztama.my.id";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jovan Panji Pratama",
    url: siteUrl,
    image: `${siteUrl}/my-profile.png`,
    jobTitle: "AI Integration & Full-Stack Web Developer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    knowsAbout: [
      "AI Integration",
      "AI Orchestration",
      "AI Agents",
      "LLM API Integration",
      "Workflow Automation",
      "OpenAI API",
      "Claude API",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Architecture",
      "Frontend Engineering",
      "Full-Stack Development",
      "SaaS Development",
      "API Integration",
    ],
    sameAs: [siteUrl],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jovan Panji Pratama Portfolio",
    url: siteUrl,
    description:
      "Portfolio of Jovan Panji Pratama, an Indonesia-based developer specializing in AI integration, AI orchestration, workflow automation, Next.js, React, TypeScript, Node.js, and web architecture.",
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]),
      }}
    />
  );
}
