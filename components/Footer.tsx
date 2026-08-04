"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-sky/30 dark:border-sky/15 bg-white/80 dark:bg-navy-dark/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-sky/20 dark:border-sky/15">
          <div className="flex items-center gap-2.5 text-xl font-bold font-serif tracking-tight text-navy dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-teal text-white flex items-center justify-center font-serif text-xs font-bold">
              AK
            </div>
            <span>Ashish Kalsara</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-navy/70 dark:text-sky/80 flex-wrap justify-center">
            <a href="#home" className="hover:text-teal transition-colors">Home</a>
            <a href="#about" className="hover:text-teal transition-colors">About</a>
            <a href="#skills" className="hover:text-teal transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal transition-colors">Projects</a>
            <a href="#education" className="hover:text-teal transition-colors">Education</a>
            <a href="#contact" className="hover:text-teal transition-colors">Contact</a>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-xl border-sky/40 dark:border-sky/20 text-navy dark:text-sky hover:text-teal"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy/60 dark:text-sky/60 font-medium">
          <div>
            &copy; {year} Ashish Kalsara. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            Built with Next.js 14, Tailwind CSS & Shadcn UI
          </div>
        </div>
      </div>
    </footer>
  );
}
