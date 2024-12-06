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
    linkedin,
    github,
    instagram,
    ml,
    cloud,
    problem,
    tce,
    techentre,
    python,
    cpp,
    linux,
    energy_demand,
    movie,
    emotion
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "ML Enthusiast",
      icon: ml,
    },
    {
      title: "Web Development Advocate",
      icon: web,
    },
    {
      title: "Cloud and DevOps Enthusiast",
      icon: cloud,
    },
    {
      title: "Problem Solver",
      icon: problem,
    },
  ];
  
  const technologies = [
    {
      name: "python 3",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp
    },
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
      name: "React JS",
      icon: reactjs,
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
    {
      name: "linux",
      icon: linux,
    }
    
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Tata Consulting Engineers Ltd.",
      icon: tce,
      iconBg: "#383E56",
      date: "December 2023 - January 2024",
      points: [
        "Applied Machine Learning Concepts like Time Series and Random Forest",
        "Contributed to a project regarding predictive maintenance of motors",
        
      ],
    },
    {
      title: "Web Intern",
      company_name: "TechEntrepreneurs",
      icon: techentre,
      iconBg: "#E6DEDD",
      date: "February 2023 - April 2023",
      points: [
        "Exposed to various activities in Web Application Development domain",
        "Implemented HTML, CSS, PHP, and MySQL Database skills",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "You have excelled due to your hard work, passion, and dedication. You have the courage to learn advanced technology, and I have full faith in your legitimacy. Keep up the hard work.",
      name: "Dr. Aditi Nautiyal",
      designation: "Assistant Manager",
      company: "Tata Consulting Engineers Ltd.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH0DyFOGjmQjg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705493806312?e=1738800000&v=beta&t=7buEuA-pJCwQ6cm2RmxjTHtt8gwlhuYW6k82Emw4S-s",
    },
  ];
  
  const projects = [
    {
      name: "Renewable Energy Demand Forcasting",
      description:
        "Identifies the most reliabke model for energy demand forcasting and analyses the impact of different features on model performace.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ml",
          color: "green-text-gradient",
        },
        {
          name: "randomforest",
          color: "pink-text-gradient",
        },
      ],
      image: energy_demand,
      source_code_link: "https://github.com/avianage/Renewable-Energy-Demand-Forcasting",
    },
    {
      name: "Movie Recommendor System",
      description:
        "Harnessed the power of the TMDB 5000 dataset to offer movie recommendations and provide detailed movie information.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "nltk",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/avianage/movie-recommender-system",
    },
    {
      name: "Emotion Detection Classifier",
      description:
        "Detects the emotion potrayed by a sentence by analyzing the text by breaking it into tokens using Naive Bayes Classifier.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "naivebayes",
          color: "green-text-gradient",
        },
        {
          name: "classification",
          color: "pink-text-gradient",
        },
      ],
      image: emotion,
      source_code_link: "https://github.com/avianage/emotion-detection-classifier",
    },
  ];

  const socialMediaLinks = [
    {
      id: "linkedin",
      icon: linkedin, // Example icon URL
      link: "https://www.linkedin.com/in/aakash-joshii", // Replace with your LinkedIn profile link
    },
    {
      id: "github",
      icon: github, // Example icon URL
      link: "https://github.com/avianage", // Replace with your GitHub profile link
    },
    {
      id: "instagram",
      icon: instagram, // Example icon URL
      link: "https://www.instagram.com/aakashxjoshi/", // Replace with your GitHub profile link
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects , socialMediaLinks};