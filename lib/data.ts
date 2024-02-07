import React from "react";

const sqrImg = "/imgs/sqr.png";
const avesdoImg = "/imgs/avesdo.png";
const evengenImg = "/imgs/evengen.png";
const planaImg = "/imgs/PlanA.png";
const churnImg = "/imgs/ChurnDetector.png";
const codeImg = "/imgs/code.jpg";
const vikingImg = "/imgs/Viking.png";

import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiSap } from "react-icons/si";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const GithubLink = "https://github.com/jayjang0209";
export const PortfolioGihuLink =
  "https://github.com/jayjang0209/porfolio-website";
export const LinkedInLink = "https://www.linkedin.com/in/jayjjang/";
export const ResumeLink =
  "https://docs.google.com/document/d/11i0lw4HE6NbtCFTDUtpj5ZYzCPeOjGT88Q2_l7ZrxUM/edit?usp=sharing";
export const EmailLink = "jayjang0209@gmail.com";

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
    tasks: [
      "Migrating the local real estate business website from Django to React, enhancing performance and user interface",
      "Developed a data ingestion pipeline using Go & AWS to streamline the process for the client to effectively update database",
      "Led database design for scalability and configured the project’s infrastructure on AWS using Serverless framework",
      "Implemented a RESTful API for the backend using Go, AWS Lambda, API Gateway, and DynamoDB",
    ],
    imageUrl: sqrImg,
    github: "",
    demo: "",
    video: "",
  },
  {
    title: "Mobile App for Avesdo Technologies Inc.",
    description:
      "A mobile app for Avesdo Technologies Inc(5-week sprint project), as part of BCIT Industry Sponsored Student Project",
    tags: ["React Native", "TypeScript"],
    tasks: [
      "Developed a mobile app for Avesdo Technologies Inc. using React Native and TypeScript",
      "Created and integrated front-end components with backend APIs for efficient data display and interaction",
      "Employed agile methodology to effectively manage the project lifecycle, ensuring timely delivery to the client",
      "Collaborated with a team of 5 to develop the app and ensure the quality of the product",
    ],
    imageUrl: avesdoImg,
    github: "",
    demo: "",
    video: "",
  },
  {
    title: "Eventgen for SAP Hackathon",
    description:
      "A web app for generating social events automatically based on the interests of SAP employees, built a Serverless RESTful API",
    tags: ["Python", "React", "Serverless framework", "JavaScript", "AWS"],
    imageUrl: evengenImg,
    tasks: [
      "Developed a web application for generating social events automatically based on the interests of SAP employees",
      "Implemented automation for creating customized social events and sending invitations utilizing Amazon EventBridge & SES",
      "Built a RESTful API for the backend using Python, AWS Lambda, API Gateway, and DynamoDB",
    ],
    github: "https://github.com/jayjang0209/GrowTeamSpirit-Hacktahon-backend",
    demo: "",
    video: "",
  },
  {
    title: "ChurnDetect",
    description:
      "A Django for predicting bank customer churn rate, trained and built a MLP classifier model with scikit-learn",
    tags: ["Django", "Python", "scikit-learn"],
    tasks: [
      "Developed a web application for predicting whether a bank customer will churn or not, based on their information",
      "Performed Exploratory Data Analysis (EDA) and data preprocessing using Pandas and Numpy",
      "Trained and built a MLP classifier model with scikit-learn, achieving 85% accuracy",
      "Improved the model's performance to 86% accuracy using GridSearchCV to tune hyperparameters",
    ],
    imageUrl: churnImg,
    github: "https://github.com/jayjang0209/BankCustomerChurnPrediction",
    demo: "",
    video: "https://www.youtube.com/embed/xFMkTjfg4oc",
  },
  {
    title: "PlanA",
    description:
      "A android app for planning a road trip with EV, imtegrated with Google Maps API",
    tags: ["Java", "Google Maps API", "Firebase", "Android Studio"],
    imageUrl: planaImg,
    tasks: [
      "Developed an Android application for planning a road trip with an electric vehicle",
      "Integrated Google Maps API to display the route and charging stations along the way",
      "Implemented user authentication and data storage using Firebase",
    ],
    github: "https://github.com/jayjang0209/mobile-PlanA",
    demo: "",
    video: "",
  },
  {
    title: "Automated Web Scraper",
    description:
      "Automated servelress data ETL pipeline for scraping data from a website and storing it in a database on a schedule basis, built a RESTful",
    tags: ["Python", "AWS Lambda", "DdynamoDB", "AWS EventBridge"],
    tasks: [
      "Developed a serverless data ETL app that scrapes data from websites on a schedule basis",
      "Automated the data ETL process by utilizing AWS EventBridge",
      "Developed a RESTful API for the backend using Python, AWS Lambda, API Gateway, and DynamoDB",
    ],
    imageUrl: codeImg,
    github: "https://github.com/jayjang0209/automated_web_scraper_etl",
    demo: "",
    video: "",
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
    tasks: [
      "Developed a mobile-friendly web application for displaying the real-time availability of bike lockers/parkades in Vancouver",
      "Collaborated with a team of 4 to develop the app using Agile methodology",
      "Integrated customized Google Maps API to display the location and availability of bike lockers/parkades",
    ],
    imageUrl: vikingImg,
    github: "",
    demo: "https://viking-eaee3.web.app/",
    video: "https://www.youtube.com/embed/qbOxSivrS_A",
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

export const experiencesData = [
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
    description:
      "Completed a Diploma in Computer Systems Technology at BCIT with Predictive Analytics Option",
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
    icon: React.createElement(SiSap),
    date: "May 2023 - Dec 2023",
  },
] as const;
