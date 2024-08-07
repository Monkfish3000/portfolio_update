import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedBackCard = ({
  name,
  index,
  testimonial,
  designation,
  company,
  image,
  linkedIn,
}) => {
  return (
    <motion.div
      className="bg-black-200 p-5 rounded-3xl w-full"
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            onClick={() => window.open(linkedIn, '_blank')}
            className="w-10 h-10 rounded-full object-cover"
            src={image}
            alt={`feedback-by-${name}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Friends & Colleagues</p>
          <h2 className={`${styles.sectionHeadText}`}>What Others Say.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-col gap-7`}>
        {testimonials.map((test, idx) => (
          <FeedBackCard key={test.name} index={idx} {...test} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
