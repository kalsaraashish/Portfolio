"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, Database, ArrowUpRight, Sparkles, BrainCircuit } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function About() {
  const highlights = [
    {
      icon: <Laptop className="text-teal" size={24} />,
      title: "Frontend Development",
      description: "Crafting modern, responsive, and pixel-perfect UIs with React.js, JavaScript, and Tailwind CSS."
    },
    {
      icon: <Code2 className="text-teal" size={24} />,
      title: "Backend Engineering",
      description: "Developing secure, high-performance REST APIs and microservices using C# and ASP.NET Core."
    },
    {
      icon: <BrainCircuit className="text-teal" size={24} />,
      title: "Python & Machine Learning",
      description: "Building intelligent data models, data analysis scripts, and machine learning solutions using Python."
    },
    {
      icon: <Database className="text-teal" size={24} />,
      title: "Database Management",
      description: "Designing and managing relational databases with SQL Server for optimized data querying and persistence."
    }
  ];

  return (
    <section id="about" className="py-28 relative bg-sky/20 dark:bg-navy-dark/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3 font-mono">
            <Sparkles size={12} className="mr-1" /> Get To Know Me
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-navy dark:text-white mb-4">
            About <span className="text-gradient">Ashish</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-sky mx-auto rounded-full" />
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
            <Card className="flex-1 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between border-sky/40 dark:border-sky/15 bg-white/90 dark:bg-navy/80 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-teal" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal font-mono">Full Stack Developer</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-navy dark:text-white mb-6">
                  Hello! I'm Ashish Kalsara
                </h3>

                <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg leading-relaxed mb-4">
                  I am a passionate Full Stack Developer specializing in building modern, scalable web applications using <strong className="text-navy dark:text-white">React.js</strong> and <strong className="text-navy dark:text-white">ASP.NET Core</strong>. I enjoy creating clean, user-friendly interfaces and developing efficient RESTful APIs.
                </p>

                <p className="text-navy/70 dark:text-sky/80 text-base sm:text-lg leading-relaxed mb-8">
                  Additionally, I work with <strong className="text-navy dark:text-white">Python</strong>, <strong className="text-navy dark:text-white">Machine Learning</strong> concepts, and <strong className="text-navy dark:text-white">SQL Server</strong> databases. Whether it's designing a seamless frontend or constructing robust backend services, I love turning ideas into real-world applications.
                </p>
              </div>

              {/* Metrics & CTA */}
              <div className="pt-6 border-t border-sky/30 dark:border-sky/15 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold font-serif text-teal font-mono">02+</div>
                    <div className="text-xs font-semibold text-navy/60 dark:text-sky/70 uppercase tracking-wider mt-1">Full Apps</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-serif text-teal font-mono">100%</div>
                    <div className="text-xs font-semibold text-navy/60 dark:text-sky/70 uppercase tracking-wider mt-1">Dedication</div>
                  </div>
                </div>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="default" className="w-full sm:w-auto gap-2 font-semibold">
                    Work With Me
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4 justify-between"
          >
            {highlights.map((item, idx) => (
              <Card key={idx} className="p-5 flex items-start gap-4 hover:border-teal/50 hover:bg-white dark:hover:bg-navy/90 transition-all duration-300 group">
                <div className="p-3 rounded-xl bg-teal/10 dark:bg-navy-light/60 shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold font-serif text-navy dark:text-white mb-1 group-hover:text-teal transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-navy/70 dark:text-sky/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
