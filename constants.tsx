import React from 'react';
import { ProjectData, TimelineEvent } from './types';
import { BookOpen, Code, Briefcase, Trophy, Lightbulb } from 'lucide-react';

// Using placeholders that you can replace with your actual assets
export const USER_PORTRAIT_MAIN = "https://picsum.photos/seed/dinusha1/800/800"; 
export const USER_PORTRAIT_SIDE = "https://picsum.photos/seed/dinusha2/600/800";

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
    year: "Present",
    title: "Hardware Product Engineering",
    description: "Currently engineering 'One Dial', a hardware product designed to solve daily communication problems.",
    icon: 'tech'
  },
  {
    year: "2025 - 2026",
    title: "Higher Diploma in AI & Data Science",
    description: "Started focusing on advanced data concepts and AI models after completing web projects like Goya.",
    icon: 'education'
  },
  {
    year: "Aug 2024",
    title: "BSc Computer Science (Scholarship)",
    description: "University of the People. Awarded scholarship to pursue formal Computer Science education.",
    icon: 'education'
  },
  {
    year: "2024",
    title: "Web Developer @ DC Group",
    description: "Pivoted from Content Creator to Developer. Built 'Color Her' (Multilac) and 'Goya Spin the Wheel' campaigns.",
    icon: 'work'
  },
  {
    year: "2024",
    title: "Undergraduate IT",
    description: "Started Information Technology degree at Colombo University.",
    icon: 'education'
  },
  {
    year: "2023",
    title: "UX/UI Internship",
    description: "Gained practical design experience. Faced challenges securing full-time roles due to degree requirements, fueling the drive to upskill.",
    icon: 'work'
  },
  {
    year: "Career Origin",
    title: "Content Writer & Creator",
    description: "Started after ALs. Given opportunity to learn development stacks by leadership, sparking the transition to Web Development.",
    icon: 'work'
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