import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiTailwindcss, SiNestjs } from "react-icons/si";

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-yellow-500" />,
    text: "Proficient in JavaScript for building dynamic and interactive web applications.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Experienced in React for building reusable UI components and managing complex state.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-green-500" />,
    text: "Skilled in building scalable server-side applications with Node.js.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-600" />,
    text: "Strong understanding of TypeScript for writing type-safe and maintainable code.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-teal-500" />,
    text: "Proficient in using Tailwind CSS for fast and customizable UI design.",
  },
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <SiPostgresql className="h-16 w-16 text-blue-400" />,
    text: "Experience in managing relational databases with PostgreSQL.",
  },
  {
    id: nanoid(),
    title: "NestJS",
    icon: <SiNestjs className="h-16 w-16 text-red-500" />,
    text: "Skilled in building efficient and scalable backend applications using NestJS.",
  },
];

export const links = [
  { id: nanoid(), href: "#home", text: "Home" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#projects", text: "Projects" },
];