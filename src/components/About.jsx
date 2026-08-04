import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Database, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function About() {
  const highlights = [
    {
      icon: <Laptop className="text-blue-500" size={24} />,
      title: "Frontend Engineering",
      description: "Crafting interactive, responsive, and pixel-perfect UIs with React.js, Tailwind CSS, and modern component systems."
    },
    {
      icon: <Code2 className="text-indigo-500" size={24} />,
      title: "Backend Development",
      description: "Designing secure, scalable RESTful Web APIs and microservices using C# and ASP.NET Core."
    },
    {
      icon: <Database className="text-cyan-500" size={24} />,
      title: "Database Architecture",
      description: "Managing relational database schemas, complex SQL queries, and Entity Framework Core migrations."
    }
  ];

  return (
    <section id="about" className="py-28 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3">
            <Sparkles size={12} className="mr-1" /> Get To Know Me
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            About <span className="text-gradient">Ashish</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <Card className="flex-1 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500 font-mono">Full Stack Engineer</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Passionate about building software that solves real-world problems.
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-4">
                  Hello! I'm <strong className="text-slate-900 dark:text-white">Ashish Kalsara</strong>, a Full Stack Developer currently pursuing my Master of Computer Applications (MCA) at LDRP Institute of Technology and Research, Gandhinagar.
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                  My core technical expertise lies in building modern React web applications coupled with high-performance ASP.NET Core backend services. From desktop tools (.NET 8 WPF) to complex Web APIs, I enjoy crafting seamless experiences end-to-end.
                </p>
              </div>

              {/* Metrics & CTA */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">02+</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Full Apps</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">100%</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Clean Code</div>
                  </div>
                </div>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="default" className="w-full sm:w-auto gap-2">
                    Work With Me
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Specializations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-5 justify-between"
          >
            {highlights.map((item, idx) => (
              <Card key={idx} className="p-6 flex items-start gap-5 hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900/90 transition-all duration-300 group">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}

            {/* Quick Skills Checklist Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <h5 className="font-bold text-base">Looking for a Full Stack Developer?</h5>
                <p className="text-xs text-blue-100">Ready to contribute to web applications & APIs immediately.</p>
              </div>
              <a href="#contact">
                <Button variant="secondary" size="sm" className="bg-white text-blue-700 hover:bg-slate-100 font-bold">
                  Contact Ashish
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
