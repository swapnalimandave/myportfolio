import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export function HeroTile() {
  const avatarImg = "/src/assets/images/developer_avatar_1781862298444.jpg";
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full mb-12">
      {/* Outer Editorial Layout Grid */}
      <div className="grid grid-cols-1 gap-8 items-stretch">
        
        {/* Large Featured Card (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#1E3AF0] text-white rounded-[14px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-[#0A0A0A]/10 min-h-[380px]"
        >
          {/* Subtle Background Parallax Dot Grid */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
            backgroundImage: "radial-gradient(#FFFFFF 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }} />

          {/* Year/Status Tag in corner */}
          <div className="flex justify-between items-start z-10">
            <span className="px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-[10px] font-bold border border-white/20 tracking-widest uppercase flex items-center gap-1.5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16C172] animate-pulse" />
              ACTIVE • 2024-25
            </span>
            <span className="text-white/60 font-mono text-[10px] uppercase font-bold tracking-widest hidden sm:inline">
                 CS_STUDENT_BIO
            </span>
          </div>

          {/* Oversized Stacked Display Typography */}
          <div className="my-10 z-10">
            <p className="text-[10px] uppercase tracking-widest text-white/60 font-black mb-2">   DETAILED GREETINGS</p>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[76px] leading-[0.85] tracking-tighter text-white uppercase mb-5">
              SWAPNALI<br/>
              MANDAVE
            </h1>
            <h2 className="font-display font-bold text-sm sm:text-base mt-2 text-white uppercase tracking-wider inline-flex items-center gap-2">
              B.Tech Computer Science Student
              <Sparkles className="w-3.5 h-3.5 fill-current text-white/80 animate-bounce" />
            </h2>
            <p className="text-sm text-white/80 max-w-2xl mt-4 leading-relaxed font-sans font-medium">
              Swapnali Mandave is a Computer Engineering student at MKSSS's Cummins College with strong programming, algorithmic, and diagnostic full-stack capabilities. Dedicated to clean architecture and digital innovation.
            </p>
          </div>

          {/* Quick CTA Action & Contact row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 z-10 w-full mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleScrollTo("projects")}
                className="px-6 py-2.5 bg-[#0A0A0A] text-white hover:bg-white hover:text-[#0A0A0A] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                View Projects
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-2.5 border border-white hover:bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Let's Talk
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-white/50 mr-1.5 hidden md:inline">   CONNECT:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1E3AF0] border border-white/10 hover:border-transparent transition-all duration-300 shadow-xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1E3AF0] border border-white/10 hover:border-transparent transition-all duration-300 shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1E3AF0] border border-white/10 hover:border-transparent transition-all duration-300 shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1E3AF0] border border-white/10 hover:border-transparent transition-all duration-300 shadow-xs"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
