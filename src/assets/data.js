import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer,FaDatabase,FaTools } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import banner from '../assets/img.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.avif';
import codeImg from "../assets/code.svg"



export const image = {
    profileImg,
    banner,
    codeImg,
    
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Designing and developing clean, interactive, and responsive user interfaces using modren web technologies.',
    tags: ['React', 'Html', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing robust backend systems, databases, and APIs to power seamless web applications.',
    tags: ['Node.js', 'Express.js', 'Django', 'MongoDB']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Building efficient data models and managing secure database systems to support complex application worlflows.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
      title: 'Tools & Technologies',
      icon: FaTools,
      description: 'Essential tools and technologies I use in my development workflow.',
      tags: ['Git & GitHub', 'Figma', 'Vercel','Postman']
  }
];



export const projects = [
  {
    title: "Shopping Cart",
    description: "A full-Stack e-commerce shopping cart featuring real-time product management, secure checkout integration, and a responsive user interface.",
    image: projectImg1,
    tech: ["React.js", "Tailwind CSS", "Redux", "react-router-dom"],
    demo: "#",
    code: "https://github.com/sagar065/shooping-cart.git",
  },
  {
    title: "Ed-Tech Platform",
    description: "A full-stack learning management syastem(LMS) designed with student dashboards, instructor dashboards, and secure payment integration for premium courses.",
    image: projectImg2,
    tech: ["React.js", "Redux", "Tailwind CSS", "Express.js", "MongoDB"],
    demo: "#",
    code: "https://github.com/sagar065/studynotion-project.git",
  },
  
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg3,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    demo: "#",
    code: "#",
  },
  
];
