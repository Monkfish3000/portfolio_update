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
  shopify,
  lewagon,
  ala,
  learnlight,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

import ryanCorriganImg from '../assets/images/ryan.png';
import seanImg from '../assets/images/sean.png';
import kelseyImg from '../assets/images/kelsey.png';
import donalImg from '../assets/images/donal.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: reactjs,
  },
  {
    title: 'Front End Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Academic Coordinator | Platform Administrator',
    company_name: 'American Language Academy',
    icon: ala,
    iconBg: '#fff',
    date: 'July 2013 - September 2016',
    points: [
      'Key administrator of the in-house LMS (Learning Management System) platform. My responsibilities included daily maintenance and updates of the platform, designing new educational content, bug fixing as well as training teachers on how to use the platform.',
    ],
  },
  {
    title: 'Le Wagon Coding Bootcamp',
    company_name: 'Le Wagon',
    icon: lewagon,
    iconBg: '#fff',
    date: 'July 2020 - October',
    points: [
      'The Le Wagon web development course was both intensely challenging and immensely rewarding. I embarked on this journey to advance my professional growth and explore new possibilities.',
      "Throughout the course, we gained not only the fundamental tools and skills for web development but also got acquainted with contemporary workflows and practices, particularly agile methodology. Collaboration was a major focus, providing real insight into team dynamics in a developer's environment.",
      ' Our projects were built on Object-Oriented principles, employing Ruby and the Rails framework, and integrating HTML, CSS, JavaScript, as well as Relational Databases, SQL, and Active Record (ORM). We also delved into API usage, learning how to incorporate them into our projects effectively. ',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'LearnLight',
    icon: learnlight,
    iconBg: '#fff',
    date: 'Jun 2021 - Feb 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'LearnLight',
    icon: learnlight,
    iconBg: '#fff',
    date: 'Feb 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I worked with Michael for more than 4 years and it was a pleasure to do so. A constant professional and someone who obviously cared a lot about our product and about our clients getting the most from it!',
    name: "Donal O'Meara",
    designation: 'Product Manager',
    company: 'ePages',
    image: donalImg,
  },
  {
    testimonial:
      "In all the years I've known Michael, he's consistently shown himself to be not only a skilled developer but also a compassionate and supportive friend.",
    name: 'Ryan Corrigan',
    designation: 'BDR',
    company: 'Confluent',
    image: ryanCorriganImg,
  },
  {
    testimonial:
      "Michael's enthusiasm and passion for frontend development are contagious. He's not just doing a job; he's following his calling.",
    name: 'Sean Malkin',
    designation: 'Sales Leader',
    company: 'CRITEO',
    image: seanImg,
  },
  {
    testimonial:
      "Michael's ability to translate complex technical concepts into easy-to-understand language is remarkable. He tackles challenges with patience and ingenuity. He's an excellent teacher and an asset to any team.",
    name: 'Kelsey Shawgo',
    designation: 'Profesora y Coordinadora Académica',
    company: 'Universidad Pontificia Comillas ICAI-ICADE',
    image: kelseyImg,
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
