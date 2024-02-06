export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Tobi Adesokan';

const bio = [
  'As a graduate in Mathematics and a Software Engineer, I am driven by a passion for leveraging technology to tackle real-world challenges. Equipped with a robust understanding of Computer Science and Engineering principles, along with proficiency in programming languages like JavaScript, Python, Kotlin, and Java, I am continuously exploring avenues to expand my knowledge and apply my expertise in novel and inventive ways.',
  'Beyond my academic endeavors, I have undertaken internships with prominent technology firms, enriching my skill set through involvement in intricate software initiatives. I thrive as a collaborative team member, relishing opportunities to engage with peers and contribute insights.',
  'I am thrilled to embark on a journey of continual learning and advancement as a software engineer. I am enthusiastic about utilizing my skills and expertise to address complex challenges and contribute positively to our world.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'Paybuddy [Full time]',
    role: 'Frontend & Mobile Engineer',
    startDate: 'mar 2023',
    endDate: 'present',
    achievements: [
      'Collaborated with a cross-functional agile team of software engineers on the development, and deployment of 2+ web/mobile applications',
      'Successfully implemented the user interface (UI) and user experience (UX) designs provided by UI/UX designers. This involves creating responsive and visually appealing layouts with a great user experience.',
      'Collaborated with backend developers and UX designers to meet project goals and create compelling user experience.',
      "Excellently implemented state management solutions, such as Redux, Zustand, and React-Query, to manage the application's data and ensure it is consistent and easily accessible.",
      'Successfully conducted regular code reviews and provided constructive feedback to ensure code quality and adherence to coding standards',
      'Stayed abreast of the latest frontend technologies and frameworks, incorporating them into the development process to enhance efficiency and maintainability.',
      'Ensured seamless user experiences across various devices by implementing responsive design principles, and accommodating a diverse user base.',
      'Employed Git for version control, facilitating collaboration, and ensuring codebase integrity.',
      'Utilized the following technologies: JavaScript, Typescript, React Native, NodeJs, Redux, Zustand, React-Query.',
    ],
  },
  {
    company: 'Wave5wireless Limited [Contact]',
    role: 'Frontend Engineer',
    startDate: 'DEC 2023',
    endDate: 'JAN 2023',
    achievements: [
      "Successfully worked with a team of 8 (two Product Designers, three Frontend Developers, a Product Manager, and two Backend Engineers) in developing and deploying a medium-scale real estate application and admin dashboard for the company's subsidiary.",
      'Successfully implemented the user interface (UI) and user experience (UX) designs for the admin and the business dashboard provided by UI/UX designers.',
      'Maintained comprehensive documentation for the frontend codebase, ensuring a smooth onboarding process for new developers.',
      'Leveraged cutting-edge frontend technologies, including HTML5, CSS3, TailwindCSS, JavaScript (ES6+), and popular frameworks such as React.js, to build dynamic and interactive user interfaces.',
      'Utilized the following technologies: JavaScript, Typescript, NextJS, ReactJS, and Redux',
    ],
  },
  {
    company: 'Letbud [Contact]',
    role: 'Frontend Engineer',
    startDate: 'JUN 2023',
    endDate: 'DEC 2023',
    achievements: [
      "Successfully worked with a team of 4 (two Product Designers, a Frontend Developer, and a Backend Engineer) in developing and deploying a medium-scale real estate application and admin dashboard for the company's subsidiary.",
      'Successfully implemented the user interface (UI) and user experience (UX) designs provided by UI/UX designers.',
      'Maintained comprehensive documentation for the frontend codebase, ensuring a smooth onboarding process for new developers.',
      'Identified and resolved frontend-related issues through troubleshooting and debugging, ensuring a high-quality end product.',
      'Leveraged cutting-edge frontend technologies, including HTML5, CSS3, TailwindCSS, JavaScript (ES6+), and popular frameworks such as React.js, to build dynamic and interactive user interfaces.',
      'Utilized the following technologies: JavaScript, Typescript, Next, NodeJs, Redux, and React-Query',
    ],
  },
  {
    company: 'IT 99 Solutions [Contract]',
    role: 'Frontend Engineer',
    startDate: 'may 2022',
    endDate: 'sep 2022',
    achievements: [
      'Identified and resolved frontend-related issues through troubleshooting and debugging, ensuring a high-quality end product.',
      'Successfully implemented responsive design principles, ensuring optimal user experience across various devices and screen sizes.',
      'Worked with a team of 3 (a Product Designer, a Frontend Developer, and two Backend Engineer) and I maintained the user-facing of an e-commerce web application using Reactjs.',
      'Actively participated in agile development methodologies, attending sprint planning, daily stand-ups, and retrospective meetings.',
      'Participated in the full software development lifecycle, from initial concept to deployment and maintenance.',
      'Utilized the following technologies: JavaScript, Typescript, Next, NodeJs, Redux, GSAP, and React-Query,',
    ],
  },
  {
    company: 'DotEightPlus [Remote]',
    role: 'Junior Frontend Developer',
    startDate: 'may 2021',
    endDate: 'mar 2022',
    achievements: [
      "Worked with a team of 5 (two Product Designers, two Frontend Engineers, and a Backend Engineer) in developing a medium-scale estate management application and admin dashboard for the company's subsidiary.",
      'Successfully developed a new version of the company’s website using Vue, Sass, and TailwindCSS.',
      'Utilized Vuex for state management across the components.',
      'Participated in code reviews to ensure code quality, correctness, and efficient solutions to problems.',
      'Maintained an organized workflow using GitHub.',
      'Utilized the following technologies: Vuejs · Vuex · Sassy Cascading Style Sheets (SCSS) · Git · Tailwind CSS',
    ],
  },
  {
    company: 'HNG [Remote]',
    role: 'Software Enginer Intern',
    startDate: 'Aug 2021',
    endDate: 'Oct 2021',
    achievements: [
      'Successfully worked on difficult tasks and problems in the two projects (Live Chat Application) and the Stack Application Clone and also worked with new technologies like centrifugal and single page application SPA',
      'Shared knowledge with team members through knowledge-sharing sessions, fostering a collaborative and learning-oriented environment.',
      'Designed and implemented the API logic and flexible database models. Integrated Cloudinary for image uploads and Websockets to build a real-time admin dashboard.',
      'Gained hands-on experience in database management, utilizing technologies like MongoDB and MySQL to ensure efficient data storage and retrieval.',
      'Proficiently used Git for version control, ensuring a streamlined collaborative development process within the team.',
      'Utilized the following technologies: JavaScript, NodeJs, ExpressJs, ReactJs, MongoDB, and (Sequelize ORM).',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Java'],
  },
  {
    title: 'Frameworks/Libraries',
    body: [
      'React',
      'Vue',
      'React Native',
      'Nodejs',
      'Next',
      'Redux',
      'Redux-Toolkit',
      'Zustand',
      'Mobx',
      'React-Query',
    ],
  },
  {
    title: 'Storages/Databases',
    body: ['SQL', 'MongoDB', 'Kafka'],
  },
  {
    title: 'Tooling',
    body: ['Linux', 'Git', 'Vercel', 'Netlify', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Mathematics at University of Lagos',
    endDate: 'Dec 2023',
    relevant: [
      'Introduction to Computing',
      'Introduction to Programming',
      'Calculus I & II & III',
      'Vector Analysis',
      'Data Structures & Algorithms',
    ],
  },
  {
    title: 'Exblun College, Ogun state',
    startDate: 'SEP 2011',
    endDate: 'JUL 2016',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'ReactJS Zero To Mastery by Andrei. - Udemy',
    date: 'MAY 2020',
  },
  {
    title: 'Python for Data Science - Coursera',
    date: 'JAN 2020',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'Yoruba',
    level: 'PROFICIENT',
  },
  {
    name: 'French',
    level: 'BEGINNER',
  },
];

const hobbies = ['Learning', 'Playing the piano', 'Coding', 'Football/Soccer'];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
