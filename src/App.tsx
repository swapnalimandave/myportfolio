import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  User, GraduationCap, Code, Trophy, Award, Globe, Github,
  Linkedin, Mail, Phone, ChevronDown, Check, Send, Sparkles,
  Layers, ArrowUp, Briefcase, Heart, BookOpen, ExternalLink, RefreshCw
} from "lucide-react";

import { PERSONAL_INFO, PROJECTS, EDUCATION, CERTIFICATES, SKILL_CATEGORIES, HACKATHONS, LANGUAGES } from './data';
import { CollapsibleCard } from './components/CollapsibleCard';
import { TabsNavigation } from './components/TabsNavigation';
import { HeroTile } from './components/HeroTile';
import { Timeline } from './components/Timeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ContactForm } from './components/ContactForm';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to automatically update active floating tab
  useEffect(() => {
    const sectionIds = ["about", "education", "skills", "projects", "hackathons", "contact"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -65% 0px" // Trigger when section occupies focal center
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveTab("about");
  };

  // Skill colors mapping for mixed filled & outline pills design
  const skillBgColors = [
    "bg-[#1E3AF0]/10 text-[#1E3AF0] border-transparent",
    "bg-white text-[#0A0A0A] border-[#0A0A0A]/20",
    "bg-[#0A0A0A]/5 text-[#0A0A0A] border-transparent",
    "bg-[#16C172]/10 text-[#16C172] border-transparent"
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#0A0A0A] pb-12 overflow-x-hidden font-sans select-none">
      
      {/* Decorative Parallax Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#1E3AF0]/5 blur-2xl pointer-events-none" />
      <div className="absolute top-[800px] right-20 w-32 h-32 rounded-full bg-[#16C172]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[200px] left-5 w-44 h-44 rounded-full bg-[#0A0A0A]/5 blur-3xl pointer-events-none" />

      {/* Floating Layout Navigation Header */}
      <div className="pt-6 pb-2 shrink-0">
        <TabsNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
      </div>

      {/* Primary Layout Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Section 1: Hero Featured Board */}
        <section id="about" className="scroll-mt-40">
          <HeroTile />
          
          {/* About Me Details Collapsible Card */}
          <CollapsibleCard
            title="Who Am I?"
            subtitle="Philosophy & Core Interests"
            icon={<User className="w-5 h-5" />}
            defaultExpanded={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-2">
              <div className="md:col-span-8 space-y-4">
                <p className="text-[#0A0A0A]/90 leading-relaxed font-sans text-base sm:text-lg">
                  {PERSONAL_INFO.bio}
                </p>
                
                {/* Visual quote accent card */}
                <div className="p-4 bg-[#1E3AF0]/5 border-l-4 border-[#1E3AF0] rounded-r-xl">
                  <p className="text-sm font-mono text-[#0A0A0A]/85 italic">
                    "I am constantly solving, continually learning. My goal is to build software products that streamline patient care workflows and expand public micro-knowledge networks."
                  </p>
                </div>
              </div>

              {/* Get In Touch Row separated by thin lines */}
              <div className="md:col-span-4 bg-white/50 border border-[#0A0A0A]/10 rounded-[14px] p-5 space-y-4">
                <h5 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-bold">
                     Contact Details
                </h5>
                
                <div className="space-y-3 font-sans text-sm divide-y divide-[#0A0A0A]/10">
                  <div className="pt-0 pb-2">
                    <span className="text-[10px] font-mono text-[#1E3AF0] uppercase block">Personal Email:</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold block hover:underline text-[#0A0A0A] text-xs">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="pt-2 pb-2">
                    <span className="text-[10px] font-mono text-[#1E3AF0] uppercase block">College Email:</span>
                    <a href={`mailto:${PERSONAL_INFO.collegeEmail}`} className="font-semibold block hover:underline text-[#0A0A0A] text-xs">
                      {PERSONAL_INFO.collegeEmail}
                    </a>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-[#1E3AF0] uppercase block">Contact Number:</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold block hover:underline text-[#0A0A0A] text-xs">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleCard>
        </section>

        {/* Section 2: Education Metrics */}
        <section id="education" className="scroll-mt-28">
          <CollapsibleCard
            title="Educational Milestones"
            subtitle="Academics & Competitive Standing"
            icon={<GraduationCap className="w-5 h-5" />}
            defaultExpanded={true}
          >
            <Timeline education={EDUCATION} />
          </CollapsibleCard>
        </section>

        {/* Section 3: Skill Blocks & Languages */}
        <section id="skills" className="scroll-mt-28">
          <CollapsibleCard
            title="Technical Core & Capabilities"
            subtitle="Stack & Spoken Languages"
            icon={<Code className="w-5 h-5" />}
            defaultExpanded={true}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-2">
              {/* Left Skills Layout (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                {SKILL_CATEGORIES.map((category, catIdx) => (
                  <div key={category.name} className="space-y-3">
                    <h5 className="font-display font-bold text-sm sm:text-base text-[#1E3AF0] flex items-center gap-2 uppercase">
                      <span className="text-xs font-mono font-normal text-[#0A0A0A]/40">0{catIdx + 1}.</span>
                      {category.name}
                    </h5>
                    
                    {/* Hashtag-style tags separated or in pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => {
                        // Alternate colors based on index
                        const colKey = (catIdx + sIdx) % skillBgColors.length;
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 text-xs sm:text-sm font-medium border rounded-full font-mono transition-transform duration-200 hover:scale-105 shadow-xs ${skillBgColors[colKey]}`}
                          >
                            #{skill.replace(/\s+/g, '')}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Languages Layout (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-[14px] border border-[#0A0A0A]/10 p-6 flex flex-col justify-between">
                <div>
                  <h5 className="font-display font-semibold text-lg text-[#0A0A0A] mb-2 inline-flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#1E3AF0]" />
                    Languages
                  </h5>
                  <p className="text-xs text-[#0A0A0A]/60 font-mono mb-4 leading-relaxed uppercase"> Fluent communication matrix</p>
                  
                  <div className="space-y-4">
                    {LANGUAGES.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between p-3 bg-white rounded-[10px] border border-[#0A0A0A]/5 shadow-xs">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-[#1E3AF0]/15 flex items-center justify-center font-display font-bold text-xs shadow-xs text-[#1E3AF0]">
                            {lang.name.charAt(0)}{lang.name.charAt(1)}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-[#0A0A0A] block">{lang.name}</span>
                            <span className="text-[10px] text-[#0A0A0A]/40 block uppercase tracking-wider">{lang.level}</span>
                          </div>
                        </div>
                        {/* Custom flag badge */}
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 text-gray-500 rounded font-semibold uppercase">
                          {lang.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro metrics typing */}
                <div className="mt-8 pt-3 border-t border-[#0A0A0A]/10 text-center">
                  <span className="text-[11px] font-mono font-bold text-[#0A0A0A]/55">
                    GCC TBC typing speeds verified
                  </span>
                </div>
              </div>
            </div>
          </CollapsibleCard>

          {/* Certificates Board Nested Rows */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-mono font-bold mb-4"> LICENSES & ACCREDITATIONS:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-[14px] border border-[#0A0A0A]/10 p-5 hover:border-[#1E3AF0] transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-[#0A0A0A]/5 border border-[#0A0A0A]/5 text-[#1E3AF0] rounded-[10px] group-hover:bg-[#1E3AF0] group-hover:text-white transition-all shadow-xs">
                      <Award className="w-5 h-5 text-inherit" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-sm sm:text-base text-[#0A0A0A] leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] font-mono text-[#0A0A0A]/50 mt-0.5 uppercase tracking-wide">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-[#1E3AF0] bg-white border border-[#0A0A0A]/10 px-2 py-0.5 rounded shadow-2xs font-bold">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Projects (Open block for recruiter immediate visibility) */}
        <section id="projects" className="scroll-mt-28 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#1E3AF0] uppercase tracking-widest block"> PORTFOLIO HIGHLINES:</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                Engineering Projects
              </h2>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[#0A0A0A]/60">
              <span> </span>
              
            </div>
          </div>

          <ProjectsGrid />
        </section>

        {/* Section 5: Hackathons & Accomplishments */}
        <section id="hackathons" className="scroll-mt-28">
          <CollapsibleCard
            title="Sprints & Hackathons"
            subtitle="Competitive Design Marathons"
            icon={<Trophy className="w-5 h-5" />}
            defaultExpanded={true}
          >
            <Timeline hackathons={HACKATHONS} />
          </CollapsibleCard>
        </section>

        {/* Section 6: Contact & Form Direct Layout */}
        <section id="contact" className="scroll-mt-28">
          <CollapsibleCard
            title="Let's Initiate Contact"
            subtitle="Email, Phone, details or Mailboxes"
            icon={<Mail className="w-5 h-5" />}
            defaultExpanded={true}
          >
            <ContactForm />
          </CollapsibleCard> 
        </section>

      </main>

      {/* Professional Footer */}
     <footer className="mt-2 border-t border-[#0A0A0A]/10">
  <div className="max-w-6xl mx-auto px-4 py-5">

    <div className="flex flex-col items-center gap-4">

      <p className="text-sm text-[#0A0A0A]/60">
        Available for internships & collaborations
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1E3AF0] transition-colors"
        >
          GitHub
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1E3AF0] transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1E3AF0] transition-colors"
        >
          Resume
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:text-[#1E3AF0] transition-colors"
        >
          Email
        </a>

      </div>

      <div className="w-full flex items-center justify-between pt-4">

        <span className="text-xs text-[#0A0A0A]/40">
          © {new Date().getFullYear()}
        </span>

        <button
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full border border-[#0A0A0A]/10 hover:border-[#1E3AF0] hover:text-[#1E3AF0] transition-all"
        >
          <ArrowUp className="w-4 h-4 mx-auto" />
        </button>

      </div>

    </div>

  </div>
</footer>


      {/* Floating print/viewable Resume Overlay Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}

