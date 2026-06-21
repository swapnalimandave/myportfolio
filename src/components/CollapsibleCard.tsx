import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export function CollapsibleCard({
  id,
  title,
  subtitle,
  icon,
  defaultExpanded = true,
  children
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  return (
    <div
      id={id}
      className="bg-white rounded-[14px] border border-[#0A0A0A]/10 overflow-hidden transition-all duration-300 hover:border-[#1E3AF0] mb-8"
    >
      {/* Header Button Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#1E3AF0] focus:ring-offset-2 focus:ring-offset-white"
      >
        <div className="flex items-center space-x-4">
          {icon && (
            <div className="p-3 bg-[#F5F5F2] text-[#0A0A0A] border border-[#0A0A0A]/10 rounded-[10px] flex items-center justify-center">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A0A0A] tracking-tight uppercase">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 font-black mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-1.5 border border-[#0A0A0A]/10 rounded-full hover:bg-[#F5F5F2] text-[#0A0A0A]/50 hover:text-[#0A0A0A]"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Accordion Content Block */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-[#0A0A0A]/10 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
