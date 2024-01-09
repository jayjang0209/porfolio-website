import React from "react";

import sqrImg from "@/public/imgs/sqr.png";
import avesdoImg from "@/public/imgs/avesdo.png";
import evengenImg from "@/public/imgs/evengen.png";
import planaImg from "@/public/imgs/plana.png";
import churnImg from "@/public/imgs/ChurnDetector.png";
import codeImg from "@/public/imgs/code.jpg";
import vikingImg from "@/public/imgs/viking.png";

import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const GithubLink = "https://github.com/jayjang0209";
export const LinkedInLink = "https://www.linkedin.com/in/jayjjang/";
export const ResumeLink =
  "https://docs.google.com/document/d/11i0lw4HE6NbtCFTDUtpj5ZYzCPeOjGT88Q2_l7ZrxUM/edit?usp=sharing";

export const projectsData = [
  {
    title: "Squamish Real Estate",
    description:
      "Migrating a business website from Django to React, created a Golang and AWS-based data ingestion pipeline for easy database updates, and setup AWS infrastructure for the backend",
    tags: [
      "React",
      "Go",
      "AWS",
      "TypeScript",
      "Serverless Framework",
      "Django",
      "DynamoDB",
    ],
    imageUrl: sqrImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "Mobile App for Avesdo Technologies Inc.",
    description:
      "A mobile app for Avesdo Technologies Inc(5-week sprint project), as part of BCIT Industry Sponsored Student Project",
    tags: ["React Native", "TypeScript"],
    imageUrl: avesdoImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "Eventgen for SAP Hackathon",
    description:
      "A web app for generating social events automatically based on the interests of SAP employees, built a Serverless RESTful API",
    tags: ["Python", "React", "Serverless framework", "JavaScript", "AWS"],
    imageUrl: evengenImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "PlanA",
    description:
      "A android app for planning a road trip with EV, imtegrated with Google Maps API",
    tags: ["Java", "Google Maps API", "Firebase", "Android Studio"],
    imageUrl: planaImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "ChurnDetect",
    description:
      "A Django for predicting bank customer churn rate, trained and built a MLP classifier model with scikit-learn",
    tags: ["Django", "Python", "scikit-learn"],
    imageUrl: churnImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "Automated Web Scraper",
    description:
      "Automated servelress data ETL pipeline for scraping data from a website and storing it in a database on a schedule basis, built a RESTful",
    tags: ["Python", "AWS Lambda", "DdynamoDB", "AWS EventBridge"],
    imageUrl: codeImg,
    github: "test",
    demo: "test",
    video: "test",
  },
  {
    title: "Viking",
    description:
      "A mobile-friendly web app for displaying the real-time availability of bike lockers/parkades in Vancouver",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Google Maps API",
      "Firebase",
    ],
    imageUrl: vikingImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Go",
  "Java",
  "C",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Vue",
  "React Native",
  "Django",
  "NestJS",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "SQL",
  "R",
  "AWS",
  "Azure",
  "Alicloud",
  "Linux",
  "Docker",
  "Bash",
  "Terraform",
  "Ansible",
  "Jenkins",
  "Servelss Framework",
  "Packer",
  "Grafana",
] as const;

export const experienceData = [
  {
    type: "School",
    title: "Computer Systems Technology Diploma",
    place: "BCIT",
    description: "I Started a Diploma in Computer Systems Technology at BCIT",
    details: null,
    icon: React.createElement(FaUniversity),
    date: "Jan 2021",
  },
  {
    type: "Work",
    title: "Sotware Developer Co-op",
    place: "IOTO International Inc.",
    description:
      "Experienced in full-stack web development, I've worked with technologies like Python, Vue.js, TypeScript, and AWS for a data-driven web application for tracking political trends, featuring secure user authentication, building RESTful APIs, and automated data collection web scrapers with robust CI/CD deployment processes",
    details: {
      skills: [
        "Python",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Nest.js",
        "Jest",
        "PostgresSQL",
        "AWS",
        "Serverless Framework",
      ],
      tasks: [
        "Implemented user authentication & authorization to control user access to the application using AWS Cognito & Vuex",
        "Led the database design and developed a RESTful API to enable users to follow their favorite politicians",
        "Built a CI/CD pipeline for API deployment automation with AWS CodePiepline",
        "Built automated web scrapers to collect data and load it into PostgresSQL using Python, Panda, Selenium",
      ],
    },
    icon: React.createElement(MdOutlineWorkOutline),
    date: "Jan 2022 - Aug 2022",
  },
  {
    type: "School",
    title: "Graduated from BCIT",
    place: "BCIT",
    description: "Completed a Diploma in Computer Systems Technology at BCIT with Predictive Analytics Option",
    details: null,
    icon: React.createElement(FaUserGraduate),
    date: "May 2023",
  },
  {
    type: "Work",
    title: "Agile Developer Intern",
    place: "SAP",
    description:
      "Experienced in cloud infrastructure, I leverage IaC for efficient HANA service management on multiple clouds(AWS, Azure, Alicloud) using Terraform & Golang, ensure system performance through DevOps practices using Linux, Bash, and Jenkins, and monitor & troubleshotting systems with Grafana, patch the system with Ansible",
    details: {
      skills: [
        "Go",
        "Python",
        "Linux",
        "Terraform",
        "Ansible",
        "Docker",
        "Bash",
        "Grafana",
        "Jenkins",
        "Packer",
        "AWS",
        "Azure",
        "Alicloud",
      ],
      tasks: [
        "Implemented dynamic tag modification for VMs across multiple clouds (AWS, Azure, and Alicloud) using Go and Terraform",
        " DevOps-oriented monitoring, and troubleshooting microservices on Linux VMs and distributed systems such as Consul and Elasticsearch clusters in a cloud environment, ensuring optimal performance and reliability",
        "Upgraded Docker images and internal SDK to incorporate the latest SAP HANA database API",
        "Updated an administration tool for SAP HANA systems on Linux systems using Ansible",
      ],
    },
    icon: React.createElement(MdOutlineWorkOutline),
    date: "Jan 2022 - Aug 2022",
  },
] as const;
