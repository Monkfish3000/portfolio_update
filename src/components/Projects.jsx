import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, live } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  prod_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/*TODO - update urls */}
            <div
              className="blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(prod_link, '_blank')}
            >
              <img
                src={live}
                alt={live}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {description.split('||').map((paragraph, index) => (
            <p key={index} className="mt-2 text-secondary text-[14px]">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(({ name, color }) => (
            <p key={name} className={`text-[14px] ${color}`}>
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are some examples of my own personal projects that I have worked
          on over the last 3 years. With each project I was always trying to
          learn a specific technology or library. Here I have included a brief
          description, the GitHub repo and, if it is live, a link to see the
          project itself.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, idx) => (
          <ProjectCard key={`project-${idx}`} index={idx} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, '');
