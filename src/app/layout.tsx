import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jovan.riztama.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jovan Panji Pratama | AI Integration & Full-Stack Web Developer",
    template: "%s | Jovan Panji Pratama",
  },
  description:
    "Portfolio Jovan Panji Pratama, Indonesia-based full-stack web developer specializing in AI integration, AI orchestration, Next.js, React, TypeScript, Node.js, automation, and modern web architecture.",
  keywords: [
    "Jovan Panji Pratama",
    "Jovan developer",
    "AI integration developer",
    "AI orchestration developer",
    "AI agent developer",
    "AI automation engineer",
    "LLM integration",
    "OpenAI API developer",
    "Claude API developer",
    "workflow automation developer",
    "full-stack developer Indonesia",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "web architect",
    "remote web developer",
    "SaaS developer",
    "API integration developer",
  ],
  authors: [{ name: "Jovan Panji Pratama", url: siteUrl }],
  creator: "Jovan Panji Pratama",
  publisher: "Jovan Panji Pratama",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jovan Panji Pratama Portfolio",
    title: "Jovan Panji Pratama | AI Integration & Full-Stack Web Developer",
    description:
      "Indonesia-based developer building AI integrations, AI orchestration workflows, automation systems, and scalable web products with Next.js, React, TypeScript, and Node.js.",
    images: [
      {
        url: "/my-profile.png",
        width: 1200,
        height: 630,
        alt: "Jovan Panji Pratama full-stack web developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovan Panji Pratama | AI Integration & Full-Stack Web Developer",
    description:
      "Developer specializing in AI integration, AI orchestration, automation, Next.js, React, TypeScript, Node.js, and modern web architecture.",
    images: ["/my-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
