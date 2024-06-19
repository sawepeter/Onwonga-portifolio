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
  ]
}

const Resume = () => {
  return (
    <div>Resume page</div>
  )
}

export default Resume