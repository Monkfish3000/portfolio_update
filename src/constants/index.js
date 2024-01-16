import {
  creator,
  web,
  backend,
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
  graphql,
  lewagon,
  ala,
  learnlight,
  monkflicks,
  spacenews,
  monkfishseaweed,
  threejs,
  selenium,
  jest,
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
  {
    title: 'EdTech Developer',
    icon: backend,
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
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
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
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'selenium',
    icon: selenium,
  },
  {
    name: 'jest',
    icon: jest,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'LearnLight',
    link: 'https://www.learnlight.com/',
    icon: learnlight,
    iconBg: '#fff',
    date: 'Feb 2023 - Present',
    points: [
      "Promoted to be the primary developer responsible for maintaining and developing Learnlight's Analytics product.",
      'Collaborating with the QA team to build out the front-end test architecture using Jest, Selenium and Cucumber.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'LearnLight',
    link: 'https://www.learnlight.com/',
    icon: learnlight,
    iconBg: '#fff',
    date: 'June 2021 - Feb 2023',
    points: [
      'Software engineer helping to build and maintain a number of business-critial products using React, JavaScript/TypeScript, GraphQL, styled components, NodeJS, amongst a host of others.',
      'Working together with diverse teams, including designers, product managers, and fellow developers, to develop top-quality products.',
    ],
  },
  {
    title: 'Le Wagon Coding Bootcamp',
    company_name: 'Le Wagon',
    link: 'https://www.lewagon.com/',
    icon: lewagon,
    iconBg: '#fff',
    date: 'July 2020 - Oct 2020',
    points: [
      'The Le Wagon web development course was both intensely challenging and immensely rewarding. I embarked on this journey to advance my professional growth and explore new possibilities.',
      "Throughout the course, we gained not only the fundamental tools and skills for web development but also became acquainted with contemporary workflows and practices, particularly agile methodology. Collaboration was a major focus, providing real insight into team dynamics in a developer's environment.",
      'Our projects were built on Object-Oriented principles, employing Ruby and the Rails framework, and integrating HTML, CSS, JavaScript, as well as Relational Databases, SQL, and Active Record (ORM). We also delved into API usage, learning how to incorporate them into our projects effectively.',
    ],
  },
  {
    title: 'English Language Trainer',
    company_name: 'Learnlight',
    link: 'https://www.learnlight.com/',
    icon: learnlight,
    iconBg: '#fff',
    date: 'Sept 2016 - July 2020',
    points: [
      'At Learnlight I delivered language training to some of the biggest companies on the planet but my sessions in both tech. start-ups and big tech. companies with groups of developers were always the most exciting for me and sparked something in me that inspired me to learn to code.',
      'I worked as a Language Trainer in Madrid and Barcelona. I offered English language support at major firms like Allianz, CaixaBank, eDreams, Endesa, and Naturgy.',
    ],
  },
  {
    title: 'Academic Coordinator | Platform Administrator',
    company_name: 'American Language Academy',
    link: 'https://www.americanlanguage.es/',
    icon: ala,
    iconBg: '#fff',
    date: 'July 2013 - Sept 2016',
    points: [
      'My first passion was teaching. In 2011 in Greenwich, London I trained as an ESL teacher I moved to Spain about a year later.',
      'At ALA I was also the key administrator of the in-house LMS (Learning Management System) platform. My responsibilities included daily maintenance and updates of the platform, designing new educational content, bug-fixing as well as training teachers on how to use the platform.',
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
    linkedIn: 'https://www.linkedin.com/in/donal-omeara/',
  },
  {
    testimonial:
      "In all the years I've known Michael, he's consistently shown himself to be not only a skilled developer but also a compassionate and supportive friend.",
    name: 'Ryan Corrigan',
    designation: 'BDR',
    company: 'Confluent',
    image: ryanCorriganImg,
    linkedIn: 'https://www.linkedin.com/in/-ryancorrigan/',
  },
  {
    testimonial:
      "Michael's ability to translate complex technical concepts into easy-to-understand language is remarkable. He tackles challenges with patience and ingenuity. He's an excellent teacher and an asset to any team.",
    name: 'Kelsey Shawgo',
    designation: 'Profesora y Coordinadora Académica',
    company: 'Universidad Pontificia Comillas ICAI-ICADE',
    image: kelseyImg,
    linkedIn: 'https://www.linkedin.com/in/kelsey-allyne-shawgo-949a6364/',
  },
  {
    testimonial:
      "Michael's enthusiasm and passion for front-end development are contagious. He's not just doing a job; he's following his calling.",
    name: 'Sean Malkin',
    designation: 'Sales Leader',
    company: 'CRITEO',
    image: seanImg,
    linkedIn: 'https://www.linkedin.com/in/seanmalkin8/',
  },
];

const projects = [
  {
    name: 'MonkFlicks',
    description:
      'A fun Netflix clone I made experimenting with Firebase as the "backend" - Firebase handles user auth. and acts as a store for all the film and series data. In the frontend I made use of styled-components.||I promise it\'s not a dangerous site - Google just thinks I\'m imitating NetFlicks to trick you.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'styledcomponents',
        color: 'pink-text-gradient',
      },
    ],
    image: monkflicks,
    source_code_link: 'https://github.com/Monkfish3000/monkflicks',
    prod_link: 'https://monkflicks.web.app/',
  },
  {
    name: 'Spaaaace News',
    description:
      'Super fast Space News search tool - with instant search as user enters query ||I made this while experimenting with Vite and Tailwind to build out a real time search that queries a Space News API and displays the results immediately without the user having to hit enter.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: spacenews,
    source_code_link: 'https://github.com/Monkfish3000/space-news',
    prod_link: 'https://spaaaace-news.netlify.app/',
  },
  {
    name: 'MonkFish, SeaWeed, Fishing Net',
    description:
      'Based on "Rock, Paper, Scissors". ||I wanted to practice and learn more Typescript but also how to write tests. Built with React, I used Vite for the development and Vitest to write the tests.',
    tags: [
      {
        name: 'react&vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'vitest',
        color: 'pink-text-gradient',
      },
    ],
    image: monkfishseaweed,
    source_code_link:
      'https://github.com/Monkfish3000/monkfish-seaweed-fishingnet',
    prod_link: 'https://monkfish-seaweed-fishingnet.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
