// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE — every resume section pulls its content from here
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  contact :"https://wa.me/9548129002?text=Hello%20I'm%20interested",
  name: "SAMANVAYA VATS",
  role: "Full Stack Developer",
  location: "India",
  summary:
    "I build fast, well-structured web applications end to end — from database schema to pixel-perfect UI. Comfortable across the stack, obsessive about clean code, and always shipping something.",
  photo: "/crtimgportfolio.png", 
  email: "you@example.com",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  resumeFile: "/resume.pdf", 
}

export const SKILLS: { label: string; items: string[] }[] = [
  { label: "languages", items: ["TypeScript", "JavaScript", "C++", "Python"] },
  { label: "frontend", items: ["React", "Next.js", "TailwindCSS", "Redux"] },
  { label: "backend", items: ["Node.js", "Express", "REST", "GraphQL"] },
  { label: "database", items: ["MongoDB", "PostgreSQL", "Redis"] },
  { label: "tooling", items: ["Git", "Docker", "Vercel", "Figma"] },
]

export const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "Company Name",
    period: "2024 — Present",
    points: [
      "Shipped feature X that improved metric Y by Z%.",
      "Owned the module responsible for A, reducing B.",
      "Collaborated with design/product to ship C.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Company Name",
    period: "2023 — 2024",
    points: [
      "Built internal tool used by N teammates.",
      "Wrote tests raising coverage from X% to Y%.",
    ],
  },
]

export const PROJECTS = [
  {
    name: "Weather",
    image: "/projects/weather.png",

    description:
      "7-day weather forecasting powered by OpenWeather API.",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
    ],

    status: "READY",

    build: "SUCCESS",

    version: "v2.3.1",

    updated: "JUL 2026",

    live: "#",

    src: "#",
  },

  {
    name: "AI-Trainer",

    image: "/projects/ai-trainer.png",

    description:
      "AI fitness coach that creates personalized workout plans.",

    stack: [
      "Next.js",
      "Gemini",
      "MongoDB",
      "Tailwind",
    ],

    status: "READY",

    build: "SUCCESS",

    version: "v1.8.0",

    updated: "JUN 2026",

    live: "#",

    src: "#",
  },

  {
    name: "DevHub",

    image: "/projects/devhub.png",

    description:
      "Developer dashboard for projects, tasks and collaboration.",

    stack: [
      "React",
      "Node",
      "MongoDB",
      "Socket.io",
    ],

    status: "READY",

    build: "SUCCESS",

    version: "v3.0.2",

    updated: "MAY 2026",

    live: "#",

    src: "#",
  },
]

export const EDUCATION = [
  {
    school: "Your University / College",
    degree: "B.Tech in Computer Science",
    period: "2021 — 2025",
    note: "CGPA: 0.00 / 10",
  },
]