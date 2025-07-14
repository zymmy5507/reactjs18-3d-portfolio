import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud Enthusiast",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/Ml Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Research Intern",
    companyName: "NIT Jamshedpur",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Worked on sarcasm detection in text using NLP techniques.",
      "Implemented handcrafted feature extraction, traditional ML models (e.g., SVM, Random Forest), and deep learning models (LSTM, BERT).",
      "Published the research paper titled “Sarcasm Detection using Machine Learning and Deep Learning” in Procedia Computer Science (Elsevier).",
      "Tools & Technologies: Python, scikit-learn, NLTK, PyTorch, Google Colab.",
    ],
  },
  {
    title: "DwinXbridge Application",
    companyName: "Raimech Aero Pvt.Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Mar 2025",
    points: [
      "Developed a real-time file monitoring system for DWIN SET folder, eliminating manual SD card uploads and reducing downtime by 80%.",
      "Implemented ESP32 communication using HEX command protocols and built a one-click custom command panel.",
      "Engineered intelligent file detection with auto folder selection, batch uploads, and logging for efficient hardware debugging.",
      "Designed a multi-page app with splash screen, persistent IP display, WiFi info, and power management features.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Vending Machine Dashboard",
    companyName: "Raimech Aero Pvt.Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Present",
    points: [
      "Developed a real-time vending machine management system using React (TypeScript) for frontend and Node.js with Express for backend, ensuring a responsive and interactive user interface.",
      "Integrated AWS Cognito for secure user authentication and role-based access control, enhancing system security and scalability.",
      "Utilized PostgreSQL via AWS RDS for robust and reliable data storage, handling inventory, transactions, and machine statuses.",
      "Built a real-time dashboard to monitor vending machine activity, inventory levels, and sales insights, leveraging WebSocket-based updates for seamless admin experience.",
    ],
  },
];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects: TProject[] = [
  {
    name: "Connections",
    description:
      "A include user authentication, post creation, likes, comments, follow/unfollow, and profile management. The platform supports CRUD operations for users and posts, providing a dynamic and interactive social networking experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js/Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://connectionss.onrender.com/",
  },
  {
    name: "Sorting Visualizer",
    description:
      "It include visualization of sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort. The tool offers customizable array size and speed, providing an interactive and educational experience for understanding sorting logic.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://sorting-visualizer-theta-seven.vercel.app/",
  },
  {
    name: "Bloggy",
    description:
      "It include user authentication, blog post creation, editing, deletion, and commenting functionality. Built using the PERN stack. it enables full CRUD(Create, Read, Update, Delete) operations and a responsive user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js/Express.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/zymmy5507/pern-boilerplate-main/tree/main/pern-boilerplate-main",
  },
];

export { services, technologies, experiences, projects };
