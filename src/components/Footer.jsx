import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold">
              AK
            </div>
            <span>Ashish Kalsara</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-xl border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <div>
            &copy; {year} Ashish Kalsara. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            Crafted with React, Tailwind CSS & Shadcn/UI
          </div>
        </div>
      </div>
    </footer>
  );
}
