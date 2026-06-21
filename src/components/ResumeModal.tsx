import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Printer, Download, Sparkles, GraduationCap, Code, Trophy, Eye } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, CERTIFICATES, SKILL_CATEGORIES } from '../data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
 const handlePrint = () => {
  const printContents = document.getElementById("print-resume");

  if (!printContents) {
    alert("Resume not found");
    return;
  }

  const newWindow = window.open("", "_blank");

  if (!newWindow) {
    alert("Popup blocked");
    return;
  }

  newWindow.document.write(`
    <html>
      <head>
        <title>Swapnali Mandave Resume</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            color: black;
          }
        </style>
      </head>
      <body>
        ${printContents.innerHTML}
      </body>
    </html>
  `);

  newWindow.document.close();
  newWindow.focus();

  setTimeout(() => {
    newWindow.print();
    newWindow.close();
  }, 500);
};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0A0A0A]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Closer overlay click */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Modal box */}
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-4xl relative z-10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header controls inside modal */}
            <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-4 mb-6 shrink-0 text-[#0A0A0A]">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-[#1E3AF0]" />
                <h4 className="font-display font-bold text-lg sm:text-xl">
                  Interactive Resume Sheet
                </h4>
              </div>
              <div className="flex items-center space-x-2">
                {/* Print Trigger */}
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg text-xs bg-[#F5F5F2] text-[#0A0A0A] border border-[#0A0A0A]/10 font-bold hover:bg-[#1E3AF0]/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-[#0A0A0A]"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable Document Container */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-8 text-[#0A0A0A] bg-white border border-gray-100 p-6 rounded-2xl shadow-inner select-text">
              
              {/* PRINTABLE AREA STARTS HERE */}
              <div id="print-resume" className="space-y-8 text-[#0A0A0A] selection:bg-gray-200">
                
                {/* Document Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 pb-6 border-b border-gray-300">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-[#1E3AF0] text-sm font-mono uppercase font-bold tracking-wider mt-1">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{PERSONAL_INFO.college}</p>
                  </div>
                  
                  <div className="space-y-1 text-xs sm:text-right font-mono text-gray-600">
                    <p>Phone: {PERSONAL_INFO.phone}</p>
                    <p>Email: {PERSONAL_INFO.email}</p>
                    <p>College Box: {PERSONAL_INFO.collegeEmail}</p>
                    <p>Location: {PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Grid - About and Skills */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-gray-200/60">
                  <div className="md:col-span-8 space-y-3">
                    <h5 className="font-mono text-xs uppercase font-extrabold text-gray-400">
                         PROFESSIONAL SUMMARY
                    </h5>
                    <p className="text-sm font-normal text-gray-700 leading-relaxed font-sans">
                      {PERSONAL_INFO.bio}
                    </p>
                  </div>
                  
                  <div className="md:col-span-4 space-y-3">
                    <h5 className="font-mono text-xs uppercase font-extrabold text-gray-400">
                         CORE EXPERTISE
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {SKILL_CATEGORIES.flatMap(c => c.skills).slice(0, 8).map(s => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono border border-gray-200 rounded text-gray-700 bg-gray-50">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section - Education */}
                <div className="space-y-4 pb-6 border-b border-gray-200/60">
                  <h5 className="font-mono text-xs uppercase font-extrabold text-gray-400 inline-flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    ACADEMIC WORK HISTORY
                  </h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {EDUCATION.map(edu => (
                      <div key={edu.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200/40 text-xs">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-gray-800">{edu.degree}</span>
                          <span className="font-mono font-bold text-[#1E3AF0] bg-white px-2 py-0.5 rounded border border-gray-100">
                            {edu.scoreValue}
                          </span>
                        </div>
                        <p className="text-gray-500 font-sans mt-0.5">{edu.institution}</p>
                        <p className="text-gray-400 font-mono text-[10px] mt-2">DUR: {edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section - Projects */}
                <div className="space-y-4 pb-6 border-b border-gray-200/60">
                  <h5 className="font-mono text-xs uppercase font-extrabold text-gray-400 inline-flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-gray-400" />
                    ACCLAIMED TECHNICAL PROJECTS
                  </h5>

                  <div className="space-y-4">
                    {PROJECTS.map(proj => (
                      <div key={proj.id} className="text-xs">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-bold text-gray-900 text-sm">{proj.title} — {proj.subtitle}</span>
                          <span className="font-mono text-gray-400 text-[10px]">{proj.year}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{proj.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {proj.techStack.map(ts => (
                            <span key={ts} className="text-[10px] font-mono text-gray-400">#{ts}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section - Certificates */}
                <div className="space-y-3">
                  <h5 className="font-mono text-xs uppercase font-extrabold text-gray-400 inline-flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-gray-400" />
                    CERTIFICATES & ACCREDITATIONS
                  </h5>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    {CERTIFICATES.map(cert => (
                      <div key={cert.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200/40">
                        <p className="font-bold text-gray-800 leading-tight">{cert.title}</p>
                        <p className="text-gray-400 text-[10px] font-mono mt-1">{cert.issuer} ({cert.year})</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              {/* PRINTABLE AREA ENDS HERE */}
              
            </div>

            <div className="mt-4 text-center shrink-0">
              <span className="text-[11px] text-gray-400 font-mono tracking-wider block">
                   GENERATED VIA DEEP-TECH PORTFOLIO MAKER    PRIVACY CONFIRMED
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
