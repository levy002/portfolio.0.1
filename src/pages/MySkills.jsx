import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import LineGradient from '../components/lineGradient';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="skills" className="pt-10 pb-24">

      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opaacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY
            {' '}
            <span className="text-blue">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Building a successful product is a challenge. I am a fast pace lerner and
            still hungry to acquire new technologies. Check out my skills.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opaacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {
                isAboveMediumScreens && (
                  <div className="border-2 p-2 border-blue rounded-md">
                    <img
                      src="../assets/skills-bg.jpg"
                      alt="profile"
                      className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                    />
                  </div>
                )
            }

        </motion.div>

        {/* SKILLS */}
      </div>

      <div className="flex justify-between md:mt-32 gap-2 flex-wrap items-center md:w-1/2 mx-auto">
        {/* <img
          src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          alt="bootstrap"
          className="skill"
        /> */}
        <img
          src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
          alt="javascript"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="reactjs"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
          alt="redux"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
          alt=""
          rails
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"
          alt="Ruby"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
          alt="postgres"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
          alt="jest"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
          alt="mongo"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
          alt="express"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
          alt="postman"
          className="skill"
        />
        {/* <img
          src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
          alt="vue"
          className="skill"
        /> */}
        <img
          src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          alt="github"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
          alt="nodejs"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="tailwind"
          className="skill"
        />
        <img
          src="https://img.shields.io/badge/Typescript-0000FF?style=for-the-badge&logo=typescript&logoColor=white"
          alt="typescript"
          className="skill"
        />
      </div>
    </section>
  );
};

export default MySkills;
