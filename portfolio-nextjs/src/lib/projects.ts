// PROJECTS DATA & RENDERING // 
export interface Project {
  id: number;
  index: string;
  title: string;
  desc: string;
  tags: string[];
  badge: string | null;
  image: string;
  url: string;
  isFeatured: boolean;
  onlyFeatured: boolean;
}

export const allProjects: Project[] = [
  {
    id: 1,
    index: "01",
    title: "Interactive Weather Forecasting App",
    desc: "A real-time weather dashboard fetching live data by city name. Features temperature, humidity, wind speed, and multi-day forecasts with a clean, readable UI.",
    tags: ["JavaScript", "OpenWeather API"],
    badge: "Live",
    image: "/assets/weather-app.png",
    url: "https://weather-appplication.pxxl.click/",
    isFeatured: true,
    onlyFeatured: true
  },
  {
    id: 2,
    index: "02",
    title: "Full-Stack Form Website with Firebase",
    desc: "Multi-step form application with real-time database storage, form validation, and user authentication built on Firebase.",
    tags: ["JavaScript", "Firebase"],
    badge: null,
    image: "/assets/multi-step-form.png",
    url: "https://multi-step-js-form.pxxl.click/",
    isFeatured: false,
    onlyFeatured: true
  },
  {
    id: 3,
    index: "03",
    title: "Single Page Room Design App",
    desc: "A React & Tailwind single-page application showcasing innovative interior design concepts with smooth transitions and a polished UI.",
    tags: ["React", "Tailwind CSS"],
    badge: null,
    image: "/assets/room-app.png",
    url: "https://room-master-app.pxxl.click/",
    isFeatured: false,
    onlyFeatured: true
  },
  {
    id: 4,
    index: "04",
    title: "RayzFashionLuxuria brand",
    desc: "Full website for fashioning including all works, carousels, enquiry form, modellings and more.",
    tags: ["JavaScript"],
    badge: "Emailjs",
    image: "/assets/rayzfashion.png",
    url: "https://victusen.github.io/rayzfashion/",
    isFeatured: false,
    onlyFeatured: true
  },
  {
    id: 5,
    index: "05",
    title: "First portfolio",
    desc: "This portfolio designed by me was built from scratch. Many react features were used, lenis scroll, typewriter effect etc",
    tags: ["React", "Tailwind CSS", "Typescript"],
    badge: null,
    // year: 2025,
    url: "https://victorusen.netlify.app/",
    // thumb: "t-portfolio",
    image: "/assets/my-first-portfolio.png",
    isFeatured: false,
    onlyFeatured: false
  },
  {
    id: 6,
    index: "06",
    title: "async API fetching extensions app",
    desc: "This project required fetching API and updating Inactive/active extensions status.",
    tags: ["JavaScript"],
    badge: "json API",
    // year: 2024,
    url: "https://victusen.github.io/extensions-app/",
    // thumb: "t-dash",
    image: "/assets/extensions-app1.png",
    isFeatured: false,
    onlyFeatured: false
  },
  {
    id: 7,
    index: "07",
    title: "SmartIndex",
    desc: "The economies masterpiece in build. Making Africa & economy better/more stable, and accessible to all.",
    tags: ["JavaScript", "Tailwind CSS", "React"],
    badge: null,
    url: "https://smartindex.pxxl.click",
    // thumb: "t-css",
    image: "/assets/smartindex.png",
    isFeatured: false,
    onlyFeatured: false
  },
  {
    id: 8,
    index: "08",
    title: "E-Banking app landing page",
    desc: "E-banking app's full landing page, where users can find out and read more about features and services.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: null,
    // year: 2024,
    url: "https://victusen.github.io/Digital-bank/",
    // thumb: "t-ecomm",
    image: "/assets/digital-bank.png",
    isFeatured: false,
    onlyFeatured: false
  },
  
  
  // {
  //   id: 8,
  //   title: "E-Banking app landing page",
  //   desc: "The full landing page of an e-banking app, where users can find out and learn more about the app.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   badge: null,
  //   year: 2024,
  //   url: "#",
  //   thumb: "t-blog",
  //   image: "../assets/digital-bank1.png"
  // },

];