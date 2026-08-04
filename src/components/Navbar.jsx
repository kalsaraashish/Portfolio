import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, Command, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3 shadow-lg shadow-slate-900/5' : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              AK
            </div>
            <span>
              Ashish<span className="text-blue-500">.</span>
            </span>
          </a>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Quick Command Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer shadow-sm"
              aria-label="Open Command Search"
            >
              <Search size={14} className="text-blue-500" />
              <span className="hidden sm:inline-block">Search</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                <Command size={10} /> K
              </kbd>
            </button>

            {/* Theme Toggle Button with Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={18} className="text-amber-400" />
                  ) : (
                    <Moon size={18} className="text-slate-700" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </TooltipContent>
            </Tooltip>

            {/* Talk Button */}
            <a href="#contact" className="hidden sm:block">
              <Button variant="glow" size="sm" className="rounded-full gap-1.5 font-semibold">
                <Sparkles size={14} />
                Let's Talk
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-nav border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors flex items-center justify-between"
                  >
                    {link.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60" />
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm"
                  >
                    <Sparkles size={16} /> Let's Connect
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </TooltipProvider>
  );
}
