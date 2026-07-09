// Centralized content — sourced from Fanelesibonge Hlebani's resume.
export const profile = {
  name: "Fanelesibonge Hlebani",
  firstName: "Fanelesibonge",
  lastName: "Hlebani",
  title: "Software Engineer",
  tagline:
    "Full-stack developer building systems that solve real-world problems.",
  summary:
    "IT graduate skilled in C#, Java, Python, and JavaScript, with experience in full-stack development using Node.js and Angular. Strong foundation in OOP and software design, with hands-on project experience and a passion for building systems that solve real-world problems.",
  location: "Gqeberha, South Africa",
  email: "fanelehlebani@gmail.com",
  phone: "+27 63 632 7769",
  github: "https://github.com/Sov3r3ign",
  linkedin: "https://www.linkedin.com/in/fanelesibonge-hlebani-032806236/",
};

export const about = {
  personalBackground:
    "Based in Gqeberha, South Africa, I'm a curious builder who enjoys turning ideas into working software. From early tinkering with hardware to shipping full-stack apps, I've always been drawn to understanding how systems fit together.",
  professionalBackground:
    "I work across the stack with C#, Java, Python, and JavaScript, and have built production-style projects with Node.js, ASP.NET Core, Flutter, React Native, and Android (Java). I care about clean OOP design, collaborative Git workflows, and shipping things that actually get used.",
  vision:
    "To build software that meaningfully improves everyday life — secure, accessible, and grounded in real user needs — building systems that help communities thrive.",
  mission:
    "Combine solid engineering fundamentals with empathy for users and teammates, and contribute to products that scale responsibly.",
  goals: [
    "Grow into a junior software developer role on a product-focused team.",
    "Deepen my backend expertise across Node.js and ASP.NET Core.",
    "Contribute to open-source projects in the African tech ecosystem.",
  ],
  interests: [
    "Full-stack development",
    "VR engineering",
    "Game development",
  ],
};

export const education = [
  {
    period: "Completed · Conferral Apr 2026",
    title: "Bachelor of Information Technology",
    org: "Nelson Mandela University",
    detail:
      "Completed all required academic obligations. Coursework across programming, databases, networks, software engineering, and information systems.",
  },
  {
    period: "Completed",
    title: "National Senior Certificate",
    org: "Hector Petersen High School",
    detail:
      "Completed high school with a focus on academic excellence and a growing interest in technology.",
  },
];

export const achievements = [
  {
    period: "2025",
    title: "Telkom 10x Hackathon — SheGuardian",
    detail:
      "Built the smartwatch helper component for a React Native women's-safety app. Recognised for social impact through practical problem-solving.",
  },
  {
    period: "2024 – 2025",
    title: "Member — Computer Society",
    detail:
      "Active member of the university Computer Society; participated in webinars, seminars, and a hackathon.",
  },
];

export const experience = [
  {
    period: "2026 – Present",
    role: "IT Intern",
    org: "CAPACITI",
    location: "Hybrid",
    summary:
      "Within CAPACITI through the Youth Employment Service programme, I am engaging in structured workplace learning and skills development, contributing to real-world tasks while advancing my professional capabilities.",
    bullets: [
      "Assisting in the execution of assigned projects, ensuring timely delivery and attention to detail.",
      "Developing foundational and technical skills relevant to industry practices and workplace environments.",
      "Collaborating with team members to solve problems and improve workflow efficiency.",
      "Participating in training sessions and applying learned concepts to practical tasks.",
      "Strengthening communication, adaptability, and professional conduct within a structured corporate setting.",
      "Supporting day-to-day operational tasks as required by supervisors and team leads.",
    ],
  },
  {
    period: "University",
    role: "Peer Technical Support",
    org: "Nelson Mandela University Residence",
    location: "On-campus",
    bullets: [
      "Provided technical assistance to students within residence.",
      "Troubleshot software and basic network-related issues.",
      "Supported users with system setup and general IT challenges.",
    ],
  },
];

export const projects = [
  {
    name: "SafeZone",
    overview:
      "A community crime-reporting mobile app empowering neighbourhoods with real-time incident reporting and live location tracking.",
    role: "Full-stack developer",
    stack: ["Flutter", "Supabase", "PostgreSQL", "Git"],
    outcomes:
      "First-time implementation of Flutter and Supabase; secure auth, incident management, and a real-time reporting pipeline.",
    url: "https://github.com/Sov3r3ign/SafeZone-Project",
  },
  {
    name: "SheGuardian",
    overview:
      "A women's-safety React Native app with a smartwatch helper that triggers real-time alerts, location sharing, and emergency notifications.",
    role: "Smartwatch component developer (team)",
    stack: ["React Native", "Smartwatch APIs", "Git"],
    outcomes:
      "Built at the Telkom 10x Hackathon (Gqeberha); recognised for social impact and a working prototype delivered on deadline.",
    url: "https://github.com/Sov3r3ign/Smart-Safety-Watch-App",
  },
  {
    name: "IoT Access Control System",
    overview:
      "A Python TCP server integrated with Cisco Packet Tracer to manage a double-door access control system for an office automation scenario. Demonstrates IoT network security, real-time access data handling, and secure communication between simulated hardware and software control layers.",
    role: "Backend / IoT developer",
    stack: ["Python", "TCP Sockets", "Cisco Packet Tracer", "Network Security"],
    outcomes:
      "Built secure socket communication for access events, simulated double-door and emergency-exit logic, and applied IoT security principles for authenticated, reliable data exchange.",
    url: "https://github.com/Sov3r3ign/Python-and-IoT-",
  },
  {
    name: "StudyQuest — Learning Management System",
    overview:
      "A native Android LMS for managing student records, course content, and academic tracking. Led the database integration layer — designing SQLite schemas and ensuring seamless backend-to-frontend data flow in a structured team build.",
    role: "Android developer · DB integration lead (team)",
    stack: ["Android", "Java", "SQLite", "Git"],
    outcomes:
      "Designed the SQLite schema for students, courses, and progress; contributed UI and navigation flows; documented integration across a collaborative Git workflow.",
    url: "https://github.com/Sov3r3ign/LearningManagementSystem",
  },
];

// Category keys — display order on the Credentials page.
export const certificationCategories = [
  { key: "yes", label: "YES Programme" },
  { key: "google-ai-essentials", label: "Google AI Essentials" },
  { key: "ai-bootcamp", label: "AI Bootcamp" },
  { key: "candidate-pd", label: "Candidate Professional Development" },
  { key: "others", label: "Others" },
] as const;

export type CertificationCategory =
  (typeof certificationCategories)[number]["key"];

export const certifications: Array<{
  period: string;
  title: string;
  issuer: string;
  url: string;
  category: CertificationCategory;
}> = [
  // — Google AI Essentials —
  { category: "google-ai-essentials", period: "2025", title: "Google AI Essentials (Specialization)", issuer: "Google · Coursera", url: "https://coursera.org/verify/specialization/PE8HWUL545PX" },
  { category: "google-ai-essentials", period: "2025", title: "Introduction to AI", issuer: "Google · AI Essentials", url: "/certificates/google-ai-essentials/Fanelesibonge_Hlebani_Introduction_to_AI.pdf" },
  { category: "google-ai-essentials", period: "2025", title: "Maximize Productivity With AI Tools", issuer: "Google · AI Essentials", url: "/certificates/google-ai-essentials/Fanelesibonge_Hlebani_Maximize_Productivity_With_AI_Tools.pdf" },
  { category: "google-ai-essentials", period: "2025", title: "Discover the Art of Prompting", issuer: "Google · AI Essentials", url: "/certificates/google-ai-essentials/Fanelesibonge_Hlebani_Discover_the_Art_of_Prompting.pdf" },
  { category: "google-ai-essentials", period: "2025", title: "Use AI Responsibly", issuer: "Google · AI Essentials", url: "/certificates/google-ai-essentials/Fanelesibonge_Hlebani_Use_AI_Responsibly.pdf" },
  { category: "google-ai-essentials", period: "2025", title: "Stay Ahead of the AI Curve", issuer: "Google · AI Essentials", url: "/certificates/google-ai-essentials/Fanelesibonge_Hlebani_Stay_Ahead_of_the_AI_Curve.pdf" },

  // — YES Programme —
  { category: "yes", period: "Jun 2026", title: "Work Readiness (Digital Learning)", issuer: "YES — Youth Employment Service", url: "/certificates/yes-programme/work_readiness_certificate.pdf" },
  { category: "yes", period: "Jun 2026", title: "AI Explorer & AI Pathfinder (Digital Learning)", issuer: "YES — Youth Employment Service", url: "/certificates/yes-programme/digital_certificate.pdf" },
  { category: "yes", period: "Jul 2026", title: "Entrepreneurship (Digital Learning)", issuer: "YES — Youth Employment Service", url: "/certificates/yes-programme/entrepreneurship_certificate.pdf" },


  // — Others (miscellaneous certifications) —
  { category: "others", period: "Sep 2025", title: "Agile Project Management", issuer: "HP LIFE", url: "/certificates/yes/Agile_Project_Management.pdf" },
  { category: "others", period: "Sep 2025", title: "AI for Beginners", issuer: "HP LIFE", url: "/certificates/yes/AI_for_Beginners.pdf" },
  { category: "others", period: "Sep 2025", title: "Cybersecurity Awareness", issuer: "HP LIFE", url: "/certificates/yes/Introduction_to_Cybersecurity_Awareness.pdf" },
  { category: "others", period: "Jun 2025", title: "Microsoft AI Fluency", issuer: "Microsoft", url: "/Microsoft_AI_Fluency.jpg" },

  // — AI Bootcamp —
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Generative AI: Prompt Engineering Basics", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Generative_AI_-_Prompt_Engineering_Basics.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "AI For Everyone", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/AI_For_Everyone.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Introduction to Artificial Intelligence (AI)", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Intro_to_AI.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Introduction to Generative AI", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Intro_to_Gen_AI.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "AI Essentials", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/AI_Essentials.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Generative AI with Large Language Models", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Generative_AI_with_LLMs.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "AI Foundations: Prompt Engineering with ChatGPT", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/AI_Foundations.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Python for Data Science, AI & Development", issuer: "AI Bootcamp", url: "#" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Supervised Machine Learning: Regression and Classification", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Supervised_ML.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Advanced Learning Algorithms", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Advanced_Learning_Algorithms.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Unsupervised Learning, Recommenders, Reinforcement Learning", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Unsupervised_Learning.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Trustworthy AI: Managing Bias, Ethics, and Accountability", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Trustworthy_AI.pdf" },
  { category: "ai-bootcamp", period: "AI Bootcamp", title: "Introduction to Responsible AI", issuer: "AI Bootcamp", url: "/certificates/ai-bootcamp/Introduction_to_Responsible_AI.pdf" },

  // — Candidate Professional Development —
  { category: "candidate-pd", period: "Prof. Development", title: "Write Professional Emails in English", issuer: "Candidate PD", url: "/certificates/candidate-pd/Write_Professional_Emails_in_English.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Verbal Communications and Presentation Skills", issuer: "Candidate PD", url: "/certificates/candidate-pd/Verbal_Communications_and_Presentation_Skills.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Active Listening: Enhancing Communication Skills", issuer: "Candidate PD", url: "/certificates/candidate-pd/Active_Listening.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Developing Interpersonal Skills", issuer: "Candidate PD", url: "/certificates/candidate-pd/Developing_Interpersonal_Skills.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", issuer: "Candidate PD", url: "/certificates/candidate-pd/Work_Smarter,_Not_Harder.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Emotional Intelligence in the Workplace", issuer: "Candidate PD", url: "/certificates/candidate-pd/Emotional_Intelligence_in_the_Workplace.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Finding Your Professional Voice: Confidence & Impact", issuer: "Candidate PD", url: "/certificates/candidate-pd/Finding_Your_Professional_Voice_-_Confidence_and_Impact.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Introduction to Personal Branding", issuer: "Candidate PD", url: "/certificates/candidate-pd/Introduction_to_Personal_Branding.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Leading with Impact: Team Dynamics, Strategy and Ethics", issuer: "Candidate PD", url: "/certificates/candidate-pd/Leading_with_Impact.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Financial Planning for Young Adults", issuer: "Candidate PD", url: "#" },
  { category: "candidate-pd", period: "Prof. Development", title: "Preparation for Job Interviews", issuer: "Candidate PD", url: "/certificates/candidate-pd/Preparation_for_Job_Interviews.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Job Interview Preparation Mastery", issuer: "Candidate PD", url: "/certificates/candidate-pd/Job_Interview_Preparation_Mastery.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Prepare and Practice for Interviews with AI", issuer: "Candidate PD", url: "/certificates/candidate-pd/Prepare_and_Practice_for_Interviews_with_AI.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Psychology of the Self", issuer: "Candidate PD", url: "#" },
  { category: "candidate-pd", period: "Prof. Development", title: "Managing Conflicts with Cultural and Emotional Intelligence", issuer: "Candidate PD", url: "/certificates/candidate-pd/Managing_Conflicts_with_Cultural_and_Emotional_Intelligence.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Positive Psychology: Resilience Skills", issuer: "Candidate PD", url: "/certificates/candidate-pd/Positive_Psychology.pdf" },
  { category: "candidate-pd", period: "Prof. Development", title: "Grit and Growth Mindset", issuer: "Candidate PD", url: "#" },
  { category: "candidate-pd", period: "Prof. Development", title: "Solving Problems with Creative and Critical Thinking", issuer: "Candidate PD", url: "#" },
  { category: "candidate-pd", period: "Prof. Development", title: "Negotiation skills: Negotiate and resolve conflict", issuer: "Candidate PD", url: "#" },

  { category: "others", period: "2024", title: "Cybersecurity Awareness Programme", issuer: "Nelson Mandela University", url: "https://www.linkedin.com/feed/update/urn:li:activity:7275072572403122176/" },
  { category: "others", period: "May 2022", title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/b412d4c6-67aa-4068-87d6-e12aa6071027/linked_in_profile" },
  { category: "others", period: "May 2022", title: "Introduction to Internet of Things", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/6618a9aa-0351-4bdf-a82e-fe0ee96608bb/linked_in_profile" },
];
