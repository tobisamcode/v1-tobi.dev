import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'v1-tobi.dev 🌍',
    description: 'My Portfolio Website',
    github: 'https://github.com/tobisamcode/v1-tobi.dev',
    live: '',
    stack: 'React + TypeScript + SASS + TailwindCSS',
    isPrivate: false,
    isLive: false,
  },

  {
    id: uuid(),
    title: 'Chisom Nwokwu 🌍',
    description: 'A Portfolio Website built for a software engineer at Microsoft',
    github: '',
    live: 'https://www.chisomnwokwu.com/',
    stack: 'React + JavaScript + React Router + GSAP',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Covid-19 Stat Tracker 💹',
    description: 'A tracker that displays the latest stats of Covid-19 Virus',
    github: 'https://github.com/tobisamcode/iQube-frontend-assessment2',
    live: 'https://i-qube-frontend-assessment2.vercel.app/',
    stack: 'React + JavaScript + ChartJS',
    isPrivate: false,
    isLive: true,
  },

  {
    id: uuid(),
    title: 'DMD-WEB 🌍',
    description: 'A Portfolio Website built for a creative digital product designer',
    github: 'https://github.com/tobisamcode/dmd-web',
    live: 'https://dmd-web.vercel.app/',
    stack: 'React + TypeScript + Next + TailwindCSS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Movie App 🎬',
    description: 'An Application that displays the latest trends of movies',
    github: 'https://github.com/tobisamcode/nuxt-movie-app',
    live: '',
    stack: 'Vue + Vuex + Nuxt + Axios + themoviedb.com',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'E-commerce REST API 💰',
    description: 'A real-life e-commerce 💰🤑application',
    github: '',
    live: '',
    stack: 'nodejs + Express + Mongodb',
    isPrivate: true,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Chat Bot 💬',
    description: 'A restaurant Chat Bot Application .',
    github: 'https://github.com/tobisamcode/chat-bot',
    live: 'chatbot-assessment.onrender.com',
    stack: 'Nodejs + Express + Web socket + Mongodb',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'E-Clothing 👔',
    description: 'A Full Stack E-commerce Application built with Reactjs and stripe integration for payment',
    github: 'https://github.com/tobisamcode/e-clothing',
    live: '',
    stack: 'React + Firebase/Forestore + Stripe ',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Capstone Project',
    description: 'A Fullstack shopping cart 🛒 Application - Node Shop Capstone Project (Udemy)',
    github: 'https://github.com/tobisamcode/nodeshop',
    live: '',
    stack: 'EJS + JavaScript + Express + CSS',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'Book Service API 📚',
    description: 'A Book service API ',
    github: 'https://github.com/tobisamcode/book-service-api',
    live: '',
    stack: 'Node + Express + Mysql(Sequelize) + TypeScript',
    isPrivate: false,
    isLive: false,
  },

  {
    id: uuid(),
    title: 'Blog Service API ',
    description: 'A simple Blog service API ',
    github: 'https://github.com/tobisamcode/blog-service-api',
    live: '',
    stack: 'Node + Express + Mongodb + TypeScript',
    isPrivate: false,
    isLive: false,
  },
];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Tobi Adesokan's Projects" />
      <div className=" portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/features">
          <button>Features ➜ </button>
        </Link>
      </div>
    </div>
  );
}
