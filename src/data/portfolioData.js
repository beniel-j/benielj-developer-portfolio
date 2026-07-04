import React from 'react';

// ============================================================
// portfolioData.js — Centralized configuration for BENIEL J's Portfolio
// ============================================================

export const personalInfo = {
  name: "Beniel J",
  firstName: "Beniel",
  brandName: "Beniel J",
  title: "AI Engineer & Full Stack Developer",
  location: "Tirunelveli, Tamil Nadu, India",
  phone: "+91 89250 22181",
  emails: {
    primary: "benielj24@gmail.com",
    secondary: "",
  },
  summary:
    "Dynamic Computer Science Engineering student with strong foundations in software development and an evolving focus on Generative AI pipelines, AI agents, and systems optimization. Skilled in building scalable full-stack applications, optimizing database workflows, and leveraging machine learning techniques.",
  resumeUrl: "/Beniel_J_Resume.pdf", // Update with your actual deployment asset path
};

export const socialLinks = {
  github: "https://github.com/beniel-j",
  linkedin: "https://www.linkedin.com/in/beniel-j-049b26298",
  leetcode: "https://leetcode.com/u/benielj/",
};

export const heroContent = {
  greeting: "Hi, I'm Beniel J",
  titleHighlight: "AI Engineer & Full Stack Developer",
  subtitle:
    "Building scalable full-stack applications, Agentic AI pipelines, and high-performance intelligent systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:benielj24@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Beniel,",
  },
  ctaResume: { text: "Download Resume", href: "/Beniel_J_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Beniel J</span>, an AI Software Engineer based in Tamil Nadu, India. I specialize in translating complex engineering logic and predictive ensemble machine learning pipelines into functional, high-performance web solutions.`,
  techStack: ["Generative AI", "MERN Stack", "FastAPI & Python", "Agentic Frameworks"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research & Logic",
      text: "Understanding system requirements, algorithmic constraints, and model specifications to lay a rock-solid mathematical and logical foundation.",
    },
    {
      number: "02",
      title: "System Architecture",
      text: "Designing modular backends, robust database schemas, and intelligent pipeline workflows using RAG or agentic loops.",
    },
    {
      number: "03",
      title: "Development",
      text: "Writing clean, efficient code for secure RESTful APIs, responsive interfaces, and embedded edge devices like ESP32/ESP8266.",
    },
    {
      number: "04",
      title: "Optimization & Ship",
      text: "Optimizing queries, maximizing responsiveness across devices, running model evaluation, and deploying securely to modern cloud endpoints.",
    },
  ],
  endText: "Ready to compile!",
};

// Comprehensive 6-Category Technical Skills Grid
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 88 },
        { name: "C / C++", level: 85 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "AI / ML & Generative AI",
      skills: [
        { name: "Agentic AI", level: 90 },
        { name: "Prompt Engineering", level: 90 },
        { name: "LangChain & LlamaIndex", level: 88 },
        { name: "RAG & Vector DBs (ChromaDB)", level: 85 },
        { name: "Machine Learning Fundamentals", level: 87 }
      ]
    },
    {
      title: "Frameworks & Backends",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 86 },
        { name: "Express.js", level: 86 },
        { name: "FastAPI", level: 88 },
        { name: "Flask", level: 88 },
        { name: "RESTful APIs", level: 92 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 86 },
        { name: "Firebase", level: 85 },
        { name: "AWS (Basic Deployment)", level: 75 }
      ]
    },
    {
      title: "Tools & AI Productivity",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 95 },
        { name: "Figma (UI/UX Design)", level: 82 },
        { name: "Ollama / LLM Orchestration", level: 84 }
      ]
    },
    {
      title: "Core CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", level: 92 },
        { name: "Object-Oriented Programming", level: 90 },
        { name: "Database Management Systems (DBMS)", level: 90 },
        { name: "Operating Systems (OS)", level: 85 },
        { name: "Computer Networks (CN)", level: 84 }
      ]
    }
  ]
};

// Re-adapted to act as your Research, Paper, and Hackathon Ledger
export const contentCreation = {
  badge: "Research & Innovations",
  heading: "Publications & Hackathon Wins",
  description: "Bridging peer-reviewed theoretical computer science with competitive software hackathons.",
  categories: [
    {
      title: "VISAI’26 National Hackathon",
      description: "Awarded 2nd Prize by Vel Tech for solving a mission-critical transit optimization statement provided directly by Chennai Metro Rail Limited.",
      stats: "2nd Prize / CMRL",
      icon: "trophy",
      link: "https://www.linkedin.com/posts/beniel-j-049b26298_hackathon-visai-smartcities-activity-7436261457241100288-IA6t?utm_source=share&utm_medium=member_android&rcm=ACoAAEgRzrkBAeNku4guyRNuphsECXOSOmRqvl0" 
    },
    {
      title: "Jury Special Award",
      description: "Recognized for high-caliber architecture, UI integration, and immediate market viability during the annual institutional sprint evaluation.",
      stats: "AURA’25 Internal Hackathon",
      icon: "award",
      link: "https://www.linkedin.com/posts/beniel-j-049b26298_hackathonwinner-innovation-technology-activity-7313455345996021763-H6r-?utm_source=share&utm_medium=member_android&rcm=ACoAAEgRzrkBAeNku4guyRNuphsECXOSOmRqvl0" 
    },
    {
      title: "Conference Research Presentations",
      description: "Presented 3 distinct technical research works covering AI Ethics & Responsible AI (ICRTAC 2024), Blue Eye Tech in Patient Care, and Nuclear Plant Cyber Defense (IVCCCCP).",
      stats: "4 Papers Contributed",
      icon: "presentation",
      link: "https://www.linkedin.com/posts/beniel-j-049b26298_cybersecurity-digitalassets-nuclearpower-activity-7217154950596845569-1tMm?utm_source=share&utm_medium=member_android&rcm=ACoAAEgRzrkBAeNku4guyRNuphsECXOSOmRqvl0" 
    },
    {
      title: "Technical Paper Laurels",
      description: "Secured Top placements in competitive paper presentation competitions including 1st Prize at EXCENTRA’24 (GCE Tirunelveli) and 2nd Prize at GYAN MITRA’25 (Mepco Schlenk).",
      stats: "Multiple 1st/2nd Wins",
      icon: "zap",
      link: "https://www.linkedin.com/posts/beniel-j-049b26298_paperpresentation-achievement-iot-activity-7299343524603314176-2XqA?utm_source=share&utm_medium=member_android&rcm=ACoAAEgRzrkBAeNku4guyRNuphsECXOSOmRqvl0" 
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "FXEC Coding Club",
    description: "Coordinated advanced algorithm development tracks, managed routine technical activities, and organized peer student competitive coding engagement sessions.",
    role: "Program Coordinator",
    badge: "Leadership"
  },
  {
    title: "Workshop: From Beginner to Builder: Chatbots & AI Agents",
    description: "Conducted an intensive, hands-on architectural workshop mentoring 50+ junior students on prompt engineering schemas, LLM configurations, and Agentic workflows.",
    role: "Workshop Trainer",
    badge: "Mentorship"
  },
  {
    title: "One Life Job Fair",
    description: "Organized systemic routing layout, handled rapid operational logistics, and synchronized candidate tracking for large-scale corporate recruitment blocks.",
    role: "Core Logistics Volunteer",
    badge: "Volunteering"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Zidio Development",
    role: "MERN Stack Developer Intern",
    duration: "Jun 2025 – Jul 2025",
    skills: ["Full Stack Engineering", "API Optimization", "Data Aggregation Pipelines", "Dashboard Accessibility"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Excel Analytics"]
  },
  {
    organization: "InternPe",
    role: "Web Development Intern",
    duration: "Jun 2025 – Jul 2025",
    skills: ["Mobile Optimization", "Real-Time Subscriptions", "Client-Side Pipeline Integration"],
    tech: ["JavaScript", "Firebase", "RESTful APIs", "Responsive Frameworks"]
  },
  {
    organization: "Infosmite",
    role: "UI/UX Designer Intern",
    duration: "Jun 2024 – Jul 2024",
    skills: ["Design Thinking Principles", "High-Fidelity Wireframes", "Interactive Prototyping"],
    tech: ["Figma Design Workspace", "Layout Usability Auditing"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Technical Leadership", icon: "crown", desc: "Commanding club programming blocks, running student sprints, and guiding technical project completion." },
  { name: "Knowledge Delivery", icon: "mic", desc: "Articulating complex backend configurations, training large assemblies, and presenting peer-reviewed research papers." },
  { name: "Design Thinking", icon: "palette", desc: "Applying analytical UI/UX rules to lower cognitive user-friction, holding a 98% NPTEL HCI Elite badge." },
  { name: "Analytical Problem Solving", icon: "puzzle", desc: "Breaking dense architectural specifications into modular, scalable, and high-performance algorithms." },
  { name: "Team Alignment", icon: "users", desc: "Coordinating development workloads across disciplines, aligning hardware edge telemetry with cloud interfaces." },
  { name: "Adaptability", icon: "sparkles", desc: "Rapidly integrating emerging toolchains, from Agentic LangChain architectures to embedded firmware logic." },
  { name: "Operational Logistics", icon: "clock", desc: "Balancing precise academic metrics (9.48 CGPA) with managing hackathons and community code operations." },
  { name: "System Optimization", icon: "zap", desc: "Profiling running applications to accelerate queries, reduce latency, and enforce mobile responsiveness." }
];

export const projects = [
  {
    id: "cris-agriculture",
    number: "01",
    badge: "Flagship Project",
    title: "Crop Rotation Intelligence System (CRIS)",
    description:
      "An intelligent agricultural advisory platform. Built an advanced multi-model stacking ensemble framework combining CatBoost, XGBoost, and LightGBM models to process soil and ambient telemetry from ESP32 edge components. Delivers sub-second, highly optimized predictive crop rotation tracks via a responsive React interface powered by a secure Python Flask backend workflow.",
    techTags: ["React.js", "Python", "Flask", "CatBoost", "XGBoost", "LightGBM", "ESP32", "IoT"],
    links: {
      github: "https://github.com/beniel-j/Crop-Rotation-Intelligence-System-CRIS-",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "digital-storytelling",
    number: "02",
    badge: "MERN Stack Production",
    title: "Digital Storytelling Platform",
    description:
      "A complete full-stack content publishing web application developed to handle robust media postings. Authored over 10 optimized REST API endpoints to perform safe, secure database CRUD transactions, handling complex relational logic seamlessly with structured MongoDB storage.",
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
    links: {
      github: "https://github.com/beniel-j/lumeo-digital-storytelling-platform",
    },
    isFlagship: false,
  },
  {
    id: "smart-street-lighting",
    number: "03",
    badge: "Hardware & Edge Systems",
    title: "Smart Street Lighting System",
    description:
      "An automated IoT infrastructure project centered on energy conservation. Configured adaptive microchip automated lighting loops triggered by light-dependent sensors and hardware transit tracking. Deployed MOSFET circuits to regulate variable power delivery, resulting in a verified 40% reduction in municipal electrical energy consumption.",
    techTags: ["ESP8266", "Arduino", "LDR Sensor", "MOSFET Electronics", "Automation"],
    links: {
      github: "https://github.com/beniel-j/smart-street-lighting-iot",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Human Computer Interaction (98% - Topper)",
      issuer: "NPTEL Elite",
      icon: "🎨",
    },
    {
      name: "Introduction to Internet of Things (92% - Topper)",
      issuer: "NPTEL Elite",
      icon: "🌐",
    },
    {
      name: "Java Foundations Credentials",
      issuer: "Oracle Academy",
      icon: "☕",
    },
    {
      name: "AWS Cloud Practitioner Path",
      issuer: "AWS Skill Builder",
      icon: "☁️",
    },
    {
      name: "MongoDB Developer Foundations",
      issuer: "MongoDB University",
      icon: "🍃",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      icon: "🔒",
    },
  ],
  viewAllUrl: "https://drive.google.com/file/d/1iUYvLW7zihm237DMt9m9eE-vHzQ3jdEN/view?usp=sharing", // Update with a public Link if needed
};

export const education = {
  degree: "Bachelor of Engineering – Computer Science & Engineering",
  institution: "Francis Xavier Engineering College",
  cgpa: "9.48",
  graduation: "2027",
  twelfth: "Higher Secondary Certificate (HSC) – 88.8%",
  tenth: "10th Grade – 90.8%",
};

export const footerContent = {
  taglines: [
    "AI Systems Architecture · Full Stack Development",
    "Agentic Pipelines · Python · MERN Stack",
    "Optimized Edge Analytics & Systems Automation",
  ],
  credential: "B.E. CSE · CGPA 9.48",
  copyright: `© ${new Date().getFullYear()} Beniel J | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};