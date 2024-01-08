
import sqrImg from "@/public/imgs/sqr.png";
import avesdoImg from "@/public/imgs/avesdo.png";
import evengenImg from "@/public/imgs/evengen.png";
import planaImg from "@/public/imgs/plana.png";
import churnImg from "@/public/imgs/ChurnDetector.png";
import codeImg from "@/public/imgs/code.jpg";
import vikingImg from "@/public/imgs/viking.png";

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
    tags: ["React", "Go", "AWS", "TypeScript", "Serverless Framework", "Django", "DynamoDB"],
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
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "Google Maps API", "Firebase"],
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