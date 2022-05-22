import React from 'react';

const Footer = () => {
  return (
    <div className="text-darkgrey py-3 bg-gray-50 dark:bg-black dark:text-grey">
      <div className="flex justify-center w-11/12 mx-auto mt-1 items-center text-sm">
        © {new Date().getFullYear()} | Made in Phitsanulok 💜💜💜
        &nbsp;by&nbsp;&nbsp;sea_talay
      </div>
      <div className="flex justify-center w-11/12 mx-auto mt-1 items-center text-sm">
      <a href="https://nextjs.org/">Next JS</a>&nbsp;&nbsp;<a href="https://www.typescriptlang.org/">Typescript</a>&nbsp;&nbsp;<a href="https://tailwindcss.com">Tailwind CSS</a>
      </div>
    </div>
  );
};

export default Footer;
