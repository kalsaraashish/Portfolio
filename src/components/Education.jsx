import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, Award, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const educationData = [
  {
    institution: "LDRP Institute Of Technology and Research",
    degree: "Master of Computer Applications (MCA)",
    duration: "Aug 2025 - Present",
    location: "Gandhinagar, Gujarat",
    description: "Advanced study in computer science, enterprise application development, web architecture, and cloud infrastructure.",
    status: "Currently Pursuing",
    isCurrent: true
  },
  {
    institution: "Kamani Science College And Prataprai Arts College",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "June 2022 - April 2025",
    location: "Amreli, Gujarat",
    description: "Focused on core programming languages, object-oriented design, web technologies, relational database design, and software engineering principles.",
    status: "Completed",
    isCurrent: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-3">
            <Sparkles size={12} className="mr-1" /> Academic Foundation
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Degrees and academic qualifications shaping my technical mindset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full p-8 relative overflow-hidden border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 group transition-all duration-300">
                {/* Decorative Blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />

                <div className="flex flex-col gap-6">
                  {/* Icon & Status */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={28} />
                    </div>

                    <Badge variant={edu.isCurrent ? "glow" : "secondary"} className="text-xs font-mono">
                      {edu.status}
                    </Badge>
                  </div>

                  {/* Institution & Degree */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-blue-500" />
                        {edu.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-indigo-500" />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {edu.institution}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
