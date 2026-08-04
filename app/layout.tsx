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
  title: "Ashish Kalsara | Full Stack Developer",
  description: "Portfolio of Ashish Kalsara — Full Stack Developer skilled in ASP.NET Core, React.js, Python, Machine Learning, SQL Server, and REST APIs.",
  keywords: [
    "Ashish Kalsara",
    "Full Stack Developer",
    "ASP.NET Core",
    "React.js",
    "Python",
    "Machine Learning",
    "SQL Server",
    "REST API",
    "MCA Student"
  ],
  authors: [{ name: "Ashish Kalsara", url: "https://ashishkalsara.vercel.app/" }],
  openGraph: {
    title: "Ashish Kalsara | Full Stack Developer",
    description: "Full Stack Developer skilled in ASP.NET Core, React.js, Python, Machine Learning, SQL Server, and REST APIs.",
    url: "https://ashishkalsara.vercel.app/",
    siteName: "Ashish Kalsara Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#2F4156",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
