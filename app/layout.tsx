import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashish Kalsara | Full Stack Developer | ASP.NET Core | React | Python",
  description: "Ashish Kalsara is a Full Stack Developer skilled in ASP.NET Core, React.js, Python, Machine Learning, SQL Server, REST APIs, and modern web development.",
  keywords: [
    "Ashish Kalsara",
    "Ashish Portfolio",
    "Full Stack Developer",
    "ASP.NET Core Developer",
    "React Developer",
    "Python Developer",
    "Machine Learning",
    "SQL Server",
    "Portfolio"
  ],
  authors: [{ name: "Ashish Kalsara", url: "https://ashishkalsara.vercel.app/" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ashishkalsara.vercel.app/",
  },
  verification: {
    google: "CABlR8hsqrR9N3y1mqQBxF3gDuj6NOjBTFuZLRunNVs",
  },
  openGraph: {
    type: "website",
    url: "https://ashishkalsara.vercel.app/",
    title: "Ashish Kalsara | Full Stack Developer",
    description: "Portfolio of Ashish Kalsara - Full Stack Developer specializing in ASP.NET Core, React.js, Python, Machine Learning, SQL Server, and modern web applications.",
    siteName: "Ashish Kalsara Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://ashishkalsara.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Ashish Kalsara | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kalsara | Full Stack Developer",
    description: "Explore the portfolio of Ashish Kalsara, Full Stack Developer skilled in ASP.NET Core, React.js, Python, Machine Learning, and SQL Server.",
    images: ["https://ashishkalsara.vercel.app/preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ashish Kalsara",
  "url": "https://ashishkalsara.vercel.app/",
  "image": "https://ashishkalsara.vercel.app/apple-touch-icon.png",
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer specializing in ASP.NET Core, React.js, Python, Machine Learning, SQL Server, and modern web development.",
  "sameAs": [
    "https://github.com/kalsaraashish",
    "https://www.linkedin.com/in/ashish-kalsara-dot-net/"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
