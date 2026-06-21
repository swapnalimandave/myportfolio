import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, Navigation } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { Handshake } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Project Collaboration', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState<'phone' | 'email' | 'collegeEmail' | null>(null);

  const handleCopy = (text: string, type: 'phone' | 'email' | 'collegeEmail') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate real database submission / REST message delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
    }, 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Informative Link Details Card (5 Columns) */}
      <div className="lg:col-span-5 space-y-6">
        <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-mono font-bold mb-2"> DIRECT REACH:</h4>
        
        {/* Contact info row list */}
        <div className="bg-white rounded-[14px] border border-[#0A0A0A]/10 p-6 space-y-5">
          
          {/* Phone block */}
          <div className="flex items-center justify-between p-3 rounded-[10px] border border-[#0A0A0A]/5 hover:bg-[#1E3AF0]/5 transition-colors">
            <div className="flex items-center space-x-3.5">
              <div className="p-3 bg-[#1E3AF0]/10 text-[#0A0A0A] rounded-lg">
                <Phone className="w-4 h-4 text-[#1E3AF0]" />
              </div>
              <div>
                <span className="text-[10px] text-[#0A0A0A]/45 font-mono uppercase block">Phone Contact</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-[#0A0A0A] hover:underline">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="p-2 border border-[#0A0A0A]/10 rounded-lg hover:bg-[#F5F5F2] transition-colors"
              title="Copy phone"
            >
              {copiedText === 'phone' ? (
                <Check className="w-4 h-4 text-[#16C172]" />
              ) : (
                <Copy className="w-4 h-4 text-[#0A0A0A]/50 hover:text-[#0A0A0A]" />
              )}
            </button>
          </div>

          {/* Email block */}
          <div className="flex items-center justify-between p-3 rounded-[10px] border border-[#0A0A0A]/5 hover:bg-[#1E3AF0]/5 transition-colors">
            <div className="flex items-center space-x-3.5 overflow-hidden">
              <div className="p-3 bg-[#1E3AF0]/10 text-[#0A0A0A] rounded-lg">
                <Mail className="w-4 h-4 text-[#1E3AF0]" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#0A0A0A]/45 font-mono uppercase block">Personal Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-[#0A0A0A] hover:underline truncate block">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="p-2 border border-[#0A0A0A]/10 rounded-lg hover:bg-[#F5F5F2] transition-colors shrink-0"
              title="Copy personal email"
            >
              {copiedText === 'email' ? (
                <Check className="w-4 h-4 text-[#16C172]" />
              ) : (
                <Copy className="w-4 h-4 text-[#0A0A0A]/50 hover:text-[#0A0A0A]" />
              )}
            </button>
          </div>

          {/* College Email block */}
          <div className="flex items-center justify-between p-3 rounded-[10px] border border-[#0A0A0A]/5 hover:bg-[#1E3AF0]/5 transition-colors">
            <div className="flex items-center space-x-3.5 overflow-hidden">
              <div className="p-3 bg-[#16C172]/15 text-[#0A0A0A] rounded-lg">
                <Navigation className="w-4 h-4 text-[#16C172]" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#0A0A0A]/45 font-mono uppercase block">College Email</span>
                <a href={`mailto:${PERSONAL_INFO.collegeEmail}`} className="text-xs sm:text-sm font-semibold text-[#0A0A0A] hover:underline truncate block">
                  {PERSONAL_INFO.collegeEmail}
                </a>
              </div>
            </div>
            
            <button
              onClick={() => handleCopy(PERSONAL_INFO.collegeEmail, 'collegeEmail')}
              className="p-2 border border-[#0A0A0A]/10 rounded-lg hover:bg-[#F5F5F2] transition-colors shrink-0"
              title="Copy college email"
            >
              {copiedText === 'collegeEmail' ? (
                <Check className="w-4 h-4 text-[#16C172]" />
              ) : (
                <Copy className="w-4 h-4 text-[#0A0A0A]/50 hover:text-[#0A0A0A]" />
              )}
            </button>
          </div>

          {/* Location block */}
          <div className="flex items-center p-3 rounded-[10px] bg-[#0A0A0A]/5 border border-[#0A0A0A]/5">
            <div className="p-3 bg-white rounded-lg border border-[#0A0A0A]/10">
              <MapPin className="w-4 h-4 text-[#1E3AF0]" />
            </div>
            <div className="ml-3.5">
              <span className="text-[10px] text-[#0A0A0A]/45 font-mono uppercase block">Base Location</span>
              <span className="text-sm font-semibold text-[#0A0A0A]">{PERSONAL_INFO.location}</span>
            </div>
          </div>

        </div>

              {/* Elegant Reminder Box */}
<div className="p-5 bg-[#1E3AF0]/5 border border-[#1E3AF0]/15 rounded-[14px]">
  <p className="text-xs text-[#0A0A0A]/75 font-sans leading-relaxed flex items-start gap-2">
    <Handshake className="w-4 h-4 text-[#1E3AF0] flex-shrink-0 mt-0.5" />
    <span>
      <span className="font-bold text-[#1E3AF0]">
        Eager to Collaborate!
      </span>{" "}
      Feel free to drop an inquiry if you want to collaborate on open-source,
      discuss algorithm implementations, or speak regarding hackathon
      participation.
    </span>
  </p>
</div>
      </div>

      {/* Form Card Input block (7 Columns) */}
      <div className="lg:col-span-7 bg-white rounded-[14px] border border-[#0A0A0A]/10 p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <h4 className="text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 font-black mb-4"> SEND MESSAGE FORM:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-[10px] uppercase font-black text-[#0A0A0A]/65 block mb-1.5">
                    Your Name : <span className="text-[#1E3AF0]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full py-2.5 px-4 rounded-[10px] border border-[#0A0A0A]/15 focus:outline-none focus:ring-2 focus:ring-[#1E3AF0] bg-white text-xs font-sans text-[#0A0A0A]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] uppercase font-black text-[#0A0A0A]/65 block mb-1.5">
                    Email Address : <span className="text-[#1E3AF0]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@gmail.com"
                    className="w-full py-2.5 px-4 rounded-[10px] border border-[#0A0A0A]/15 focus:outline-none focus:ring-2 focus:ring-[#1E3AF0] bg-white text-xs font-sans text-[#0A0A0A]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-[10px] uppercase font-black text-[#0A0A0A]/65 block mb-1.5">
                  Subject Reason :
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full py-2.5 px-4 rounded-[10px] border border-[#0A0A0A]/15 focus:outline-none focus:ring-2 focus:ring-[#1E3AF0] bg-white text-xs font-sans text-[#0A0A0A]"
                >
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Internship / Hiring Openings">Internship / Hiring Openings</option>
                  <option value="Technical Consultation">Technical Consultation</option>
                  <option value="General Greetings">General Greetings</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] uppercase font-black text-[#0A0A0A]/65 block mb-1.5">
                  Message <span className="text-[#1E3AF0]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Explain your project details or inquiries..."
                  className="w-full py-2.5 px-4 rounded-[10px] border border-[#0A0A0A]/15 focus:outline-none focus:ring-2 focus:ring-[#1E3AF0] bg-white text-xs font-sans text-[#0A0A0A] leading-relaxed"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-6 rounded-full bg-[#0A0A0A] hover:bg-[#1E3AF0] disabled:bg-[#0A0A0A]/40 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Completing secure dispatch...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Transmission Message
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#16C172]/15 border-2 border-[#16C172] rounded-full flex items-center justify-center mx-auto text-[#16C172]">
                <Check className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h5 className="font-display font-medium text-2xl text-[#0A0A0A] tracking-tight inline-flex items-center gap-2">
                  Dispatch Complete!
                  <Sparkles className="w-4 h-4 fill-current text-[#1E3AF0] animate-pulse" />
                </h5>
                <p className="text-sm text-[#0A0A0A]/70 max-w-sm mx-auto leading-relaxed font-sans">
                  Thank you for getting in touch. Swapnali will check your inquiry on her Cummins College box or Gmail dashboard shortly!
                </p>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-full border border-[#0A0A0A]/25 text-xs text-[#0A0A0A] hover:bg-[#F5F5F2] transition-all font-medium mt-4 cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}
