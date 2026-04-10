import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 relative overflow-hidden flex flex-col items-center text-center md:items-start md:text-left justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Hello! I'm Ashish</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I am a passionate Full Stack Developer specializing in building modern, scalable web applications using React and ASP.NET Core. I enjoy creating clean, user-friendly interfaces and developing efficient RESTful APIs.</p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              Whether it's designing a seamless frontend or building a strong backend with SQL Server, I love turning ideas into real-world applications. </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 items-center justify-between w-full">
              <div className="flex gap-8 justify-around sm:justify-start w-full sm:w-auto">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl md:text-3xl font-bold text-blue-500 font-mono">02</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Projects Built</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl md:text-3xl font-bold text-blue-500 font-mono">100%</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Dedication</span>
                </div>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkalsara@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all border border-blue-500/20 text-center"
              >
                Work With Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: <Laptop className="text-blue-500" size={24} />,
                title: "Frontend Development",
                description: "Building responsive and modern user interfaces using React.js, JavaScript, and Tailwind CSS."
              },
              {
                icon: <Code2 className="text-blue-500" size={24} />,
                title: "Backend Engineering",
                description: "Developing secure and scalable REST APIs using ASP.NET Core and C#."
              },
              {
                icon: <Rocket className="text-blue-500" size={24} />,
                title: "Database Management",
                description: "Designing and managing relational databases using SQL Server for efficient data handling."
              }
            ].map((feature, idx) => (
              <div key={idx} className="glass-panel p-6 flex items-start gap-5 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
