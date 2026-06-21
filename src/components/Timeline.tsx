import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Clock, MapPin } from 'lucide-react';
import { EducationEntry, HackathonEntry } from '../types';

interface TimelineProps {
  education?: EducationEntry[];
  hackathons?: HackathonEntry[];
}

export function Timeline({ education, hackathons }: TimelineProps) {
  // Map our data status colors to actual system aesthetic hex codes or classes
  const statusColors = {
    mauve: "bg-[#1E3AF0] ring-[#1E3AF0]/20",
    green: "bg-[#16C172] ring-[#16C172]/20",
    blue: "bg-[#1E3AF0] ring-[#1E3AF0]/20",
    pink: "bg-[#1E3AF0] ring-[#1E3AF0]/20"
  };

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'winner':
        return 'bg-[#16C172]/15 text-[#16C172] font-bold border border-[#16C172]/30';
      case 'finalist':
        return 'bg-[#1E3AF0]/10 text-[#1E3AF0] font-semibold border border-[#1E3AF0]/20';
      case 'participant':
      default:
        return 'bg-[#0A0A0A]/5 text-[#0A0A0A] border border-[#0A0A0A]/10';
    }
  };

  if (education) {
    return (
      <div className="relative pl-2 sm:pl-6 space-y-6">
        {/* Invisible Vertical Track Line */}
        <div className="absolute left-[13px] sm:left-[29px] top-4 bottom-4 w-[1px] bg-[#0A0A0A]/10" />

        {education.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 group"
          >
            {/* Year/date column */}
            <div className="flex items-center space-x-3 md:space-x-0 md:flex-col md:items-center min-w-[70px] z-10">
              {/* Year badge */}
              <div className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full bg-[#F5F5F2] text-[#0A0A0A] border border-[#0A0A0A]/10 shadow-xs">
                {entry.period.split(" ")[0]} {/* First word/year */}
              </div>

              {/* Status pulsating circle */}
              <div className="md:mt-3 flex items-center justify-center">
                <span className={`w-3 h-3 rounded-full ${statusColors[entry.statusDotColor || 'mauve']} ring-4`} />
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 bg-white p-5 sm:p-6 rounded-[14px] border border-[#0A0A0A]/10 transition-all duration-300 hover:border-[#1E3AF0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] tracking-tight uppercase">
                    {entry.degree}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 flex items-center gap-1.5 mt-1">
                    <GraduationCap className="w-4 h-4 text-[#1E3AF0]" />
                    {entry.institution}
                  </p>
                </div>

                {/* Score badge block */}
                <div className="shrink-0 flex items-center self-start sm:self-center gap-2 bg-[#F5F5F2] px-3 py-1.5 rounded-[8px] border border-[#0A0A0A]/10">
                  <span className="text-[10px] uppercase font-mono text-[#0A0A0A]/50 tracking-wider">
                    {entry.scoreLabel}:
                  </span>
                  <span className="text-sm font-mono font-bold text-[#1E3AF0]">
                    {entry.scoreValue}
                  </span>
                </div>
              </div>

              {/* Detail bullets */}
              {entry.details && entry.details.length > 0 && (
                <ul className="text-xs sm:text-sm text-[#0A0A0A]/70 space-y-2 mt-4 pl-4 list-disc marker:text-[#1E3AF0]">
                  {entry.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              )}

              {/* Small Date Indicator inside card */}
              <div className="flex items-center gap-1.5 mt-4 text-[11px] font-mono text-[#0A0A0A]/45 tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                <span>Range: {entry.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (hackathons) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((hack, index) => (
          <motion.div
            key={hack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white p-6 rounded-[14px] border border-[#0A0A0A]/10 hover:border-[#1E3AF0] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header block */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#0A0A0A]/5 text-[#0A0A0A] rounded-xl group-hover:bg-[#1E3AF0]/10 transition-colors">
                  <Award className="w-5 h-5 text-[#1E3AF0]" />
                </div>
                {/* Result Pill */}
                <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full ${getBadgeClass(hack.badgeType)} shadow-xs`}>
                  {hack.award}
                </span>
              </div>

              {/* Content text */}
              <h4 className="font-display font-bold text-lg text-[#0A0A0A] mb-1 group-hover:text-[#1E3AF0] transition-colors">
                {hack.title}
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-mono mb-3">
                 {hack.organization}
              </p>
              
              {hack.description && (
                <p className="text-sm text-[#0A0A0A]/75 leading-relaxed font-sans mt-2">
                  {hack.description}
                </p>
              )}
            </div>

            {/* Footer metric/anchor */}
            <div className="mt-5 pt-3 border-t border-[#0A0A0A]/5 flex items-center justify-between text-xs text-[#0A0A0A]/40 font-mono">
              <span>STATUS: COMPLETE</span>
              <span>   </span>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}
