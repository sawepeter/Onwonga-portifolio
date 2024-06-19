"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien et eros posuere malesuada.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sawe Onwong'a",
    },
    {
      fieldName: "Email",
      fieldValue: "sawepeter6@gmail.com",
    },
    {
      fieldName: "Phone number",
      fieldValue: "+254725632415",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Kiswahili",
    },
  ]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description : 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien et eros posuere malesuada.",
  items: [
    {
      company: "Riverbank solutions Inc.",
      position: "Android Intern",
      duration: "2021 - Present",
    },
    {
      company: "Riverbank solutions Inc.",
      position: "Android Intern",
      duration: "2021 - Present",
    },
    {
      company: "Riverbank solutions Inc.",
      position: "Android Intern",
      duration: "2021 - Present",
    },
    {
      company: "Riverbank solutions Inc.",
      position: "Android Intern",
      duration: "2021 - Present",
    },
  ]
}

//education data
const education = {
  icon: "/assets/resume/education.svg",
  title: "My education",
  description : 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien et eros posuere malesuada.",
  items: [
    {
      institution: "Riverbank solutions Inc.",
      degree: "Android Intern",
      duration: "2021 - Present",
    },
    {
      institution: "Riverbank solutions Inc.",
      degree: "Android Intern",
      duration: "2021 - Present",
    },
    {
      institution: "Riverbank solutions Inc.",
      degree: "Android Intern",
      duration: "2021 - Present",
    },
    {
      institution: "Riverbank solutions Inc.",
      degree: "Android Intern",
      duration: "2021 - Present",
    },
  ]
}

//skills data 
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien et eros posuere malesuada.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
          >
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume