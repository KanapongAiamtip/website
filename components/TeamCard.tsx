import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  Team: TeamData;
};

type TeamData = {
  website: string;
  img: string;
  name: string;
  nickname: string;
  penname: string;
  github: string;
  fb: string;
  ig: string
};

const TeamCard = (props: Props) => {
  return (
    <motion.div
      transition={{ type: 'spring', duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="text-left flex flex-col focus:outline-none"
    >
      <div className="flex-1 bg-white dark:bg-darkergrey dark:border-transparent rounded-xl transition-shadow duration-400 hover:shadow-xl border-opacity-100 border hover:border-transparent m-1">
        <a href={props.Team.website}>
          <img
            src={props.Team.img}
            alt={props.Team.name}
            className="rounded-t-xl"
          />
        </a>
        <div className="px-4 py-1">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            {props.Team.name}
          </h1>
          <p className="text-darkgrey dark:text-grey pt-1 pb-2">
            {props.Team.nickname}
          </p>
          <p className="text-darkgrey dark:text-grey pt-1 pb-2">
            {props.Team.penname}
          </p>
          <div className="flex justify-start pt-1 pb-4">
            <a href={props.Team.github} className="text-sm text-blue mr-4">
              <img src="assets/contact/Github.svg" className="h-6 md:h-8"></img>
            </a>
            <a href={props.Team.fb} className="text-sm text-blue">
              <img src="assets/fb.svg" className="h-6 md:h-8"></img>
            </a>
            <a href={props.Team.ig} className="text-sm text-blue">
              <img src="assets/ig.svg" className="h-10 md:h-10"></img>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
