
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Baozhe Zhang",
  initials: "BZ",
  location: "Shenzhen, China",
  locationLink: "",
  about:
    "Robotics software engineer",
  summary:
    "",
  avatarUrl: "https://avatars.githubusercontent.com/u/25413670?v=4",
  personalWebsiteUrl: "https://zhangbaozhe.github.io/",
  contact: {
    email: "zhang.baozhe2000@gmail.com",
    tel: "+8618369940578",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zhangbaozhe",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/baozhezhang",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/baozhezhang",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The Chinese University of Hong Kong, Shenzhen",
      degree: "Bachelor's Degree in Compute Engineering",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   // logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
    {
      company: "Fast Lab, Huzhou Institute of Zhejiang University",
      link: "http://zju-fast.com/", 
      badges: ["Internship"],
      title: "Research Assistant",
      start: "June, 2022",
      end: "August, 2023",
      description:
        "Directed CoNi-MPC project and published it as a first author in RA-L"
    }
  ],
  skills: [
    // "JavaScript",
    // "TypeScript",
    // "React/Next.js/Remix",
    // "Node.js",
    // "GraphQL",
    // "Relay",
    // "WebRTC",
    "C++", "Python", "ROS"
  ],
  // projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   // logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    projects:[
      {
        title: "CoNi-MPC",
        techStack: ["Research Project", "C++", "ROS"],
        description: "A novel solution for UAV control in cooperative multi-robot systems", 
        link: {
          label: "CoNi-MPC",
          href: "https://fast-fire.github.io/CoNi-MPC/"
        }
      }
    ]
  // ],
} as const;
