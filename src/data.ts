import { Project, EducationEntry, HackathonEntry, Certificate, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Swapnali Mandave",
  title: "B.Tech Computer Science Student",
  college: "MKSSS's Cummins College of Engineering for Women, Pune",
  bio: "I am a passionate and dedicated Computer Engineering student with strong problem-solving skills and a deep interest in programming, technology, and innovation. I enjoy exploring new tools and concepts, from data structures and algorithms to real-world applications, and continuously strive to improve my technical and analytical abilities with a positive mindset and eagerness to learn.",
  phone: "+91 87883 04785",
  email: "mandaveswapnali2006@gmail.com",
  collegeEmail: "swapnali.mandave@cumminscollege.in",
  github: "https://github.com/swapnalimandave",
  linkedin: "https://linkedin.com/in/swapnali-mandave-9a84a62bb", // clean aesthetic placeholder
  location: "Pune, Maharashtra, India",
};

export const PROJECTS: Project[] = [
  {
    id: "queuecare",
    title: "QueueCare",
    subtitle: "Smart Queue & Appointment Management System",
    description: "A modern, full-featured hospital appointment and queue management platform built to eliminate clinical bottlenecks and reduce patient wait anxiety through real-time visibility. It serves three distinct user roles with tailored, role-based interfaces.",
    features: [
      "Patient Portal: Book appointments, track live queue position, view ML-predicted wait times, and manage bookings.",
      "Doctor Dashboard: Real-time queue management, patient intake tracking, and appointment status updates.",
      "Coordinator View: Hospital-wide queue oversight, multi-doctor coordination, and system administration.",
      "Live Queue Engine: Dynamic position tracking, automatic queue advancement, and fluid wait-time updates.",
      "Security & Sync: Secure role-based authentication simulation, dark/light mode toggle, and persistent state synced with localStorage."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    liveDemoUrl: "https://mellow-starburst-d9806a.netlify.app/",
    githubUrl: "https://github.com/swapnalimandave/queuecare",
    badge: "Featured Project",
    year: "2025"
  },
  {
    id: "ftiapp",
    title: "FTI App",
    subtitle: "Gamified Financial Literacy & Investment Education",
    description: "A bold, gamified financial transformation platform that makes budgeting, investing, and tax planning approachable for first-time learners, combining real money-management tools with interactive financial education.",
    features: [
      "Budget Planner: Manage budgets with detailed disposable income, savings, investment, and EMI breakdowns.",
      "Simulator: Dynamic investment portfolio simulator to practice stock and crypto strategies risk-free.",
      "Tax Suite: Planning tools to explain tax brackets and optimize tax efficiency visually.",
      "Leaderboard: Gamified lesson system with XP, streaks, quizzes, and global community standings.",
      "Multi-Language: Elegant support for English, Hindi, Marathi, Arabic, and French."
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "TanStack Query", "Context API"],
    contributors: ["Swapnali Mandave", "Ravee Fulzele", "Tanisha Dahihande"],
    liveDemoUrl: "https://ftiapp.netlify.app/",
    githubUrl: "https://github.com/swapnalimandave/fti-app",
    badge: "Collaborative Project",
    year: "2024"
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    id: "college",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "MKSSS's Cummins College of Engineering for Women, Pune",
    period: "2025 — Present",
    scoreLabel: "Sem 4 SGPA",
    scoreValue: "7.60",
    details: [
      "Focusing on core engineering fundamentals, algorithms, and practical development.",
      "Active participant in development groups and student technical hacks."
    ],
    statusDotColor: "green"
  },
  {
    id: "mht-cet",
    degree: "MHT-CET Entrance Exam",
    institution: "State Common Entrance Test Cell, Maharashtra",
    period: "2024",
    scoreLabel: "Percentile",
    scoreValue: "96.51%",
    details: ["Highly competitive state engineering entrance examination."],
    statusDotColor: "mauve"
  },
  {
    id: "jee",
    degree: "JEE-Mains Entrance Exam",
    institution: "National Testing Agency, India",
    period: "2024",
    scoreLabel: "Percentile",
    scoreValue: "86.00%",
    details: ["National level premier exam for engineering institutes."],
    statusDotColor: "blue"
  },
  {
    id: "hsc",
    degree: "HSC (Class XII) Science Board",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    period: "2024",
    scoreLabel: "Percentage",
    scoreValue: "79.67%",
    details: ["Majored in Physics, Chemistry, and Mathematics with specialized Computer Science courses."],
    statusDotColor: "pink"
  },
  {
    id: "ssc",
    degree: "SSC (Class X) Board Exam",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    period: "2021 — 2022",
    scoreLabel: "Percentage",
    scoreValue: "95.20%",
    details: ["Graduated top of class with distinction across all core academic streams."],
    statusDotColor: "green"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: ["HTML5", "C", "C++", "Java", "JavaScript", "Node.js (Beginner)", "SQL (Basic)"]
  },
  {
    name: "Core Computer Science",
    skills: ["DSA (Data Structures & Algorithms)", "Object Oriented Programming", "Database Management", "Problem Solving"]
  },
  {
    name: "Professional & Other",
    skills: ["English Communication", "GCC TBC Typing (30-40 WPM)", "Team Collaboration", "Rapid Learning"]
  }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent / Professional", code: "US" },
  { name: "Hindi", level: "Conversational / National", code: "IN" },
  { name: "Marathi", level: "Native / Mother Tongue", code: "IN" }
];

export const CERTIFICATES: Certificate[] = [
  { id: "c-lang", title: "C Programming Language Mastery", issuer: "Tech Certification Board", year: "2024" },
  { id: "cpp-lang", title: "C++ Object-Oriented Development", issuer: "Technical Education Institute", year: "2024" },
  { id: "java-lang", title: "Java Foundations & Applications", issuer: "Engineering Coding Society", year: "2024" }
];

export const HACKATHONS: HackathonEntry[] = [
  {
    id: "rit",
    title: "RIT Hackathon",
    organization: "Rajarambapu Institute of Technology",
    award: "2nd Runner-up",
    badgeType: "winner",
    description: "Built a fully functional real-world solution under strict 36-hour parameters and won 3rd place overall out of competitors."
  },
  {
    id: "sparkulate",
    title: "Sparkulate Business Hackathon",
    organization: "Entrepreneurship Cell",
    award: "Finalist",
    badgeType: "finalist",
    description: "Pitched a tech-driven startup model for real-world environmental problems with dynamic financial projections."
  },
  {
    id: "spit",
    title: "SPIT Mumbai Hackathon",
    organization: "Sardar Patel Institute of Technology",
    award: "Participant",
    badgeType: "participant",
    description: "Collaborated on designing deep-tech tools for smart urban administration workflows."
  },
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    organization: "Government of India Initiative",
    award: "Participant",
    badgeType: "participant",
    description: "Tackled nation-level corporate-led statements in decentralized architecture and public care."
  }
];
