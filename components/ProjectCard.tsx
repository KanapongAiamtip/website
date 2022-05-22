import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  project: ProjectData;
};

type ProjectData = {
  redirect: string;
  img: string;
  title: string;
  subtitle: string;
  github: string;
  link: string;
};

const ProjectCard = (props: Props) => {
  return (
    <motion.div
      transition={{ type: 'spring', duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="text-left flex flex-col focus:outline-none"
    >
      <div className="flex-1 bg-white dark:bg-darkergrey dark:border-transparent rounded-xl transition-shadow duration-400 hover:shadow-xl border-opacity-100 border hover:border-transparent m-1">
        <a href={props.project.redirect}>
          <img
            src={props.project.img}
            alt={props.project.title}
            className="rounded-t-xl"
          />
        </a>
        <div className="px-4 py-1">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            {props.project.title}
          </h1>
          <p className="text-darkgrey dark:text-grey pt-1 pb-2">
            {props.project.subtitle}
          </p>
          <div className="flex justify-start pt-1 pb-4">
            <a href={props.project.github} className="text-sm text-blue mr-4">
              <img src="assets/contact/Github.svg" className="h-6 md:h-8"></img>
            </a>
            <a href={props.project.link} className="text-sm text-blue">
              <img src="assets/projects/link.svg" className="h-6 md:h-8"></img>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
