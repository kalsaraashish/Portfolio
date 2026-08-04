import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandSearch from './components/CommandSearch';
import { ToastProvider } from './components/ui/toast';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <CommandSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      </div>
    </ToastProvider>
  );
}

export default App;