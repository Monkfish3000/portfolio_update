import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn('right', 'spring', 0.5 * index, 0.74)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
        <motion.p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn('', '', 0.1, 1)}
        >
          I’ve been living in Spain for almost a decade now. I love the food
          here and in Barcelona I’ve found the perfect combination of fantastic
          city (with a thriving tech. scene), spectacular coastlines and
          breathtaking mountain ranges. I love this city. I also love technology
          and literally learn something new everyday given how rapidly new tech.
          is developed. Recently I have been trying to get my head around web3
          and blockchain technology, particularly Solana.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} index={idx} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
