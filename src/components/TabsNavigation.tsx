import React from 'react';
import { motion } from 'motion/react';
import { User, FileText, Send } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
}

interface TabsNavigationProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onOpenResumeModal: () => void;
}

export function TabsNavigation({
  activeTab,
  setActiveTab,
  onOpenResumeModal,
}: TabsNavigationProps) {
  const tabs: Tab[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'WORK' },
    { id: 'hackathons', label: 'TIMELINE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    const element = document.getElementById(tabId);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-4 z-40 w-full max-w-6xl mx-auto px-4 md:px-0">
      <div className="bg-white/95 backdrop-blur-md rounded-[14px] border border-[#0A0A0A]/10 py-3.5 px-4 sm:px-6 flex items-center justify-between shadow-xs">
        {/* Logo */}
        <div
          className="flex items-center space-x-2.5 cursor-pointer"
          onClick={() => handleTabClick('about')}
        >
          <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-display font-black text-xs">
            SM
          </div>

          <span className="hidden sm:inline font-display font-black tracking-tighter uppercase text-[#0A0A0A]">
            Swapnali M.
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto no-scrollbar scroll-smooth">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative pb-1 text-[11px] sm:text-xs font-bold tracking-wider transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                  isActive
                    ? 'text-[#1E3AF0]'
                    : 'text-[#0A0A0A]/45 hover:text-[#0A0A0A]'
                }`}
              >
                <span>{tab.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E3AF0]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleTabClick('about')}
            title="Profile details"
            className="w-9 h-9 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center hover:bg-[#F5F5F2] text-[#0A0A0A] transition-all hover:scale-105 duration-200"
          >
            <User size={16} />
          </button>

          <button
            onClick={onOpenResumeModal}
            title="View Resume"
            className="w-9 h-9 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center hover:bg-[#F5F5F2] text-[#0A0A0A] transition-all hover:scale-105 duration-200"
          >
            <FileText size={16} />
          </button>

          <button
            onClick={() => handleTabClick('contact')}
            title="Send Message"
            className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#1E3AF0] transition-all duration-200"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}