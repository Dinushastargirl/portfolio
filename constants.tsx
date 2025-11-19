
import React from 'react';
import { ProjectData, TimelineEvent } from './types';
import { BookOpen, Code, Briefcase, Trophy, Lightbulb, PenTool, Layers, Cpu, Globe, Rocket } from 'lucide-react';

// Using placeholders that you can replace with your actual assets
export const USER_PORTRAIT_MAIN = "https://postimg.cc/ftmLR7dV"; 
export const USER_PORTRAIT_SIDE = "https://postimg.cc/ZCcWNLMP";
export const DESKTOP_WALLPAPER = "https://postimg.cc/ftmLR7dV";

export const CONTACT_INFO = {
  email: "dinushapushparajah@gmail.com",
  linkedin: "https://www.linkedin.com/in/dinusha-pushparajah-747a44215/?skipRedirect=true",
  github: "https://github.com/Dinushastargirl",
  whatsapp: "+94710134406",
  phone: "+94 71 013 4406"
};

export const BIO = {
  headline: "I build. I solve. I evolve.",
  subtext: "A creator turned developer exploring AI, blockchain & product engineering.",
  intro: "I started my career creating engaging content, but my curiosity for tech led me to explore programming, AI, and Blockchain. Now, I focus on building problem-solving products."
};

export const SKILLS = [
  "Python", "Rust", "Go", "TypeScript", "C/C++", 
  "React", "Flask", "Pygame", "PoseNet", "MediaPipe",
  "CyberOps", "Computer Vision", "Blockchain"
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "Origin",
    title: "Content Writer – First Opportunity",
    description: "I started my career as a content writer. My boss noticed my curiosity and gave me the chance to learn about development and programming stacks.",
    icon: 'work'
  },
  {
    year: "Transition",
    title: "Web Developer – First Experience",
    description: "I transitioned into web development and started building websites professionally, laying the groundwork for my technical career.",
    icon: 'tech'
  },
  {
    year: "2023",
    title: "UX/UI Internship",
    description: "Completed a UX/UI internship in 2023 to improve my design skills. Unfortunately, I couldn’t secure a job afterward because I didn’t have a degree yet.",
    icon: 'work'
  },
  {
    year: "2024",
    title: "Back to Content Writing",
    description: "Returned briefly to content writing, but it didn’t work out. I decided to focus on formal education to bridge the gap.",
    icon: 'work'
  },
  {
    year: "2024",
    title: "University Degree – Colombo University",
    description: "Started my Computer Science degree at Colombo University, aiming to strengthen my technical foundation.",
    icon: 'education'
  },
  {
    year: "2024",
    title: "Content Creator – DC Group",
    description: "Began as a content creator at DC Group. My leaders noticed my talent in creating websites, giving me the opportunity to work on real projects.",
    icon: 'work'
  },
  {
    year: "Milestone",
    title: "Key Projects Published",
    description: "Published www.multilaccolorher.com for Women’s Day campaign and www.goyacompetition.com. Other projects allowed me to learn, build, and experiment with new solutions.",
    icon: 'tech'
  },
  {
    year: "Current",
    title: "Hardware Product – One Dial",
    description: "Currently building a hardware product called One Dial, which I am engineering from scratch to streamline communication.",
    icon: 'tech'
  },
  {
    year: "2025",
    title: "Higher Diploma in AI & Data Science",
    description: "Started a Higher Diploma in AI & Data Science. Received a scholarship around August through UoPeople for Computer Science.",
    icon: 'education'
  },
  {
    year: "Vision Today",
    title: "Problem Solver & Builder",
    description: "Now I am focused on becoming a problem-solving professional, building solutions as products to solve real-world challenges.",
    icon: 'tech'
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: "one-dial",
    title: "One Dial (Hardware)",
    description: "A physical hardware product currently in engineering phase designed to streamline communication.",
    tech: ["Hardware Engineering", "IoT", "Embedded Systems"],
    color: "border-orange-500"
  },
  {
    id: "multilac-color",
    title: "Multilac - Color Her",
    description: "Interactive Women's Day campaign allowing users to personalize silhouettes with emotion-based colors. (www.multilaccolorher.com)",
    tech: ["Canvas API", "SVG", "JS"],
    color: "border-purple-500"
  },
  {
    id: "goya-spin",
    title: "Goya Spin The Wheel",
    description: "Web-based interactive spinning wheel with smooth easing, confetti, and audio feedback. (www.goyacompetition.com)",
    tech: ["HTML5 Canvas", "Vanilla JS", "CSS Animations"],
    color: "border-pink-500"
  },
  {
    id: "animal-vision",
    title: "Animal Vision Camera",
    description: "For People's Bank. A web app simulating animal vision (Bee UV, Snake Thermal, etc.) using getUserMedia API.",
    tech: ["JavaScript", "Canvas API", "HTML5"],
    color: "border-yellow-400"
  },
  {
    id: "beat-campaign",
    title: "BEAT Campaign Idea",
    description: "Mental health awareness platform helping youth break the loop of pressure.",
    tech: ["Concept", "Campaign", "UI/UX"],
    color: "border-red-500"
  },
  {
    id: "mental-health",
    title: "Mental Health App",
    description: "Interactive quiz game checking 'How are you feeling?' using neuropsychology concepts.",
    tech: ["HTML", "CSS", "JS", "Netlify"],
    color: "border-blue-400"
  },
  {
    id: "ponds-ai",
    title: "Ponds AI Skin Scanner",
    description: "Web app scanning skin conditions using AI to provide diagnostic insights.",
    tech: ["AI Integration", "Web App"],
    color: "border-rose-300"
  },
  {
    id: "nutriline",
    title: "Nutriline",
    description: "Nutritional analysis tool for parents to check meal value for children.",
    tech: ["HTML/CSS/JS", "APIs"],
    color: "border-green-400"
  },
  {
    id: "pol-parapura",
    title: "Pol Parapura",
    description: "Culturally inspired web experience with interactive hoverable coconut tree elements.",
    tech: ["Canvas API", "Dynamic Logic"],
    color: "border-green-600"
  },
  {
    id: "laptop-mate",
    title: "Find Your Perfect Laptop Mate",
    description: "Recommendation engine matching users to laptops based on budget and usage.",
    tech: ["Custom JS Logic", "Netlify"],
    color: "border-gray-300"
  },
  {
    id: "cyber-typing",
    title: "Cyber Typing Language",
    description: "Cyberpunk-themed typing speed challenge game.",
    tech: ["Neon CSS", "JS Game Logic"],
    color: "border-cyan-400"
  }
];

export const QUALIFICATIONS = [
  { title: "Google Certified UX Designer", issuer: "Google", date: "Jun 2023" },
  { title: "Meta Certified Social Media Marketing Professional", issuer: "Meta", date: "Jun 2023" },
  { title: "Critical Infrastructure Certification", issuer: "OPSWAT Academy" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud" },
  { title: "Machine Learning Foundations", issuer: "AWS" },
  { title: "Cyber Threat Intelligence 101", issuer: "ArcX" },
  { title: "Game Design and Development", issuer: "American Embassy" },
  { title: "Diploma in ICT", issuer: "Bandarawela Education Centre", date: "2018" },
  { title: "AAT Level 1 & 2", issuer: "AAT" },
  { title: "Cambridge English (Starters, Movers, Flyers, KET)", issuer: "Cambridge" },
  { title: "Digital Marketing Certificate", issuer: "Hubspot Academy" },
  { title: "Introduction to Front-End Development", issuer: "Meta", date: "Jun 2023" },
  { title: "Programming with JavaScript", issuer: "Meta", date: "Jun 2023" },
  { title: "Version Control", issuer: "Meta", date: "Jun 2023" },
  { title: "HTML and CSS in depth", issuer: "Meta", date: "Jun 2023" },
  { title: "Introduction to Back-End Development", issuer: "Meta", date: "Jun 2023" },
  { title: "Full Stack Software Developer Assessment", issuer: "IBM", date: "Jun 2023" },
  { title: "Ethical Hacking for Beginners", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Design Thinking for Beginners", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Introduction to Cyber Security", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Digital Transformation", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Introduction to Animation Fundamentals", issuer: "Simplilearn", date: "May 2024" },
  { title: "Game-Theoretic Solution Concept", issuer: "Coursera Project Network", date: "Oct 2024" },
  { title: "Create a Business Marketing Brand Kit", issuer: "Coursera Project Network", date: "Jun 2023" },
  { title: "Get Started with Figma", issuer: "Coursera Project Network", date: "Jun 2023" },
  { title: "Design and Develop a Website using Figma & CSS", issuer: "Coursera Project Network", date: "Jun 2023" }
];
