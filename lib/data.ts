export const profile = {
  name: "Dalia Shabana",
  role: "Backend Developer",
  tagline:
    "Backend Developer specializing in Node.js, TypeScript, Express.js, and NestJS, with hands-on experience building secure and scalable backend applications, RESTful APIs, and real-world systems.I also have basic experience with frontend development using React.js and Next.js, which helps me understand and integrate both sides of a web application.",
  taglineHighlightTerms: [
    "Node.js",
    "Express.js",
    "NestJS",
    "TypeScript",
    // "RESTful APIs",
    // "secure, scalable backend applications",
  ],
  aboutParagraphs: [
    "I'm Dalia, a Backend-Focused Full-Stack Developer specializing in the MERN Stack.",
    "I'm an ITI Full-Stack Web Development graduate and a Route Academy graduate, where I built a strong foundation in backend development and worked on real-world projects.",
    "My main strength is Backend Development using Node.js, Express.js, MongoDB, and Mongoose. I enjoy designing RESTful APIs, building authentication and authorization systems, working with databases, and developing scalable backend solutions.",
    "I also have experience with technologies such as TypeScript, NestJS, Redis, Socket.IO, GraphQL, Cloudinary, AWS S3, and Stripe.",
    "I'm passionate about building reliable systems, solving problems, and continuously improving my development skills.",
    "I also have basic experience with frontend development using React.js and Next.js, which helps me understand and integrate both sides of a web application.",
  ],
  aboutHighlightTerms: [
    "Backend-Focused Full-Stack Developer",
    "MERN Stack",
    "ITI Full-Stack Web Development",
    "Route Academy",
    "Backend Development",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RESTful APIs",
    "authentication and authorization systems",
    "TypeScript",
    "NestJS",
    "Redis",
    "Socket.IO",
    "GraphQL",
    "Cloudinary",
    "AWS S3",
    "Stripe",
    "React.js",
    "Next.js",
  ],
  availability: "Available for hybrid, remote, or on-site roles in Mansoura or Cairo.",
  // TODO: Replace with your real phone number, including country code, e.g. "+20 1XX XXX XXXX".
  phone: "+20 155 645 0041",
  // TODO: Replace with real links.
  links: {
    github: "https://github.com/Dalia1199",
    linkedin: "https://www.linkedin.com/in/dalia-shabana-56b255249/",
    email: "mailto:dalia.shabana1199@gmail.com",
    phone: "tel:+201556450041",
    // Put your real CV file at /public/cv.pdf (just name it exactly "cv.pdf").
    // The button below will then download/open it automatically.
    cv: "/cv.pdf",
  },
};

export const skillGroups = [
  {
    label: "Backend",
    // route: "/backend",
    skills: ["Node.js", "Express.js", "NestJS", "TypeScript", "JavaScript"],
  },
  {
    label: "Databases",
    // route: "/databases",
    skills: ["MongoDB", "Mongoose", "Redis", "SQL", "MySQL"],
  },
  {
    label: "APIs & Communication",
    // route: "/apis",
    skills: ["REST APIs", "GraphQL", "WebSockets", "Socket.IO"],
  },
  {
    label: "Authentication & Security",
    // route: "/auth",
    skills: ["JWT", "Authentication", "Authorization", "Google Authentication"],
  },
  {
    label: "Cloud & Integrations",
    route: "/integrations",
    skills: ["AWS S3", "Cloudinary", "Firebase", "Stripe", "Kashier"],
  },
  {
    label: "Tools",
    // route: "/tools",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    label: "Practices & Concepts",
    // route: "/practices",
    skills: ["OOP", "Agile Methodology"],
  },
];

export type Project = {
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  stack: string[];
  features: string[];
  github?: string; // TODO: replace placeholder with real repo link
  demo?: string; // only set if a real, provided URL exists
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    slug: "carehub",
    name: "CareHub",
    subtitle: "Hospital Management System — ITI Graduation Project",
    description:
      "A scalable hospital management platform supporting patients, doctors, and administrators.",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "Kashier"],
    features: [
      "Collaborated with a development team on architecture, sprint planning, and task coordination",
      "Owned multiple backend modules and core business features end to end",
      "Built secure, scalable RESTful APIs",
      "Integrated online payment workflows and real-time communication",
      "Implemented authentication, role-based authorization, file management, and third-party integrations",
    ],
    github: "https://github.com/Dalia1199/hospital_managment_backend",
    size: "large",
  },
  {
    slug: "ecommerce-backend",
    name: "E-commerce Backend System",
    description: "A scalable e-commerce backend built with NestJS and TypeScript.",
    stack: ["NestJS", "TypeScript", "MongoDB", "Redis", "AWS S3", "WebSockets", "Stripe"],
    features: [
      "Built a modular e-commerce backend",
      "Developed RESTful APIs for products, carts, orders, coupons, categories, and authentication",
      "Integrated Stripe for payments and AWS S3 for media storage",
      "Implemented JWT authentication and role-based authorization",
      "Used Redis for caching and OTP management",
      "Implemented real-time notifications using WebSockets",
    ],
    github: "https://github.com/Dalia1199/Ecommerce_nestjs",
    size: "large",
  },
  {
    slug: "social-media-backend",
    name: "Social Media Backend",
    description:
      "A social media backend supporting content management, authentication, real-time chat, and notifications.",
    stack: ["TypeScript", "Express.js", "MongoDB", "GraphQL", "Redis", "Socket.IO", "AWS S3"],
    features: [
      "Built backend APIs using Express.js and TypeScript",
      "Implemented REST APIs and GraphQL",
      "Integrated Google Authentication",
      "Built real-time chat using Socket.IO",
      "Implemented Firebase push notifications",
      "Used AWS S3 for media storage and Redis for caching",
    ],
    github: "https://github.com/Dalia1199/socialapp",
    size: "large",
  },
  {
    slug: "saraha",
    name: "Saraha",
    subtitle: "Anonymous Messaging Platform",
    description: "A secure anonymous messaging platform focused on user privacy.",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Cloudinary"],
    features: [
      "Built RESTful APIs using Node.js and Express.js",
      "Implemented JWT authentication, email verification, and OTP-based account activation",
      "Implemented anonymous messaging while preserving sender privacy",
      "Integrated Cloudinary for media management and Redis for OTP handling",
    ],
    github: "https://github.com/Dalia1199/saraha-app",
    size: "large",
  },
  {
    slug: "blog-api",
    name: "Blog API",
    description:
      "A RESTful blog backend with authentication, user management, posts, and media uploads.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "ImageKit"],
    features: [],
    github: "https://github.com/Dalia1199/blog_app",
    size: "small",
  },
];

export const education = [
  {
    school: "Information Technology Institute (ITI)",
    program: "Full-Stack Web Development Training",
    period: "Jan 2026 – Jul 2026",
    description:
      "Completed an intensive Full-Stack Web Development training program focused on building modern, scalable web applications through hands-on individual and team-based projects. The training covered both frontend and backend development, with a strong focus on backend engineering using Node.js, Express.js, NestJS, TypeScript, and MongoDB. Gained practical experience in RESTful API development, authentication and authorization, database management, third-party integrations, real-time communication, and cloud services. Worked collaboratively using Git and GitHub and followed practical software development workflows.",
    secondary: false,
  },
  {
    school: "Route Academy",
    program: "Backend Development — Node.js",
    period: undefined,
    description:
      "Completed a practical Backend Development training program focused on server-side application development using Node.js and Express.js. Gained hands-on experience in designing and developing RESTful APIs, implementing authentication and authorization, working with MongoDB and Mongoose, handling validation and error management, and building backend business logic. The training included practical projects that strengthened problem-solving skills and provided experience with real-world backend development practices.",
    secondary: false,
  },
  // Optional: earlier academic background, shown secondary to software training.
  // Fill in your university name and years, or delete this entry entirely.
  {
    school: "Horus University",
    program: "Bachelor's Degree in Physical Therapy",
    period: undefined,
    description: undefined,
    secondary: true,
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
