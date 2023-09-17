/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import useMediaQuery from '../hooks/useMediaQuery';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id="home"
      className="md:flex mx-auto w-5/6 md:justify-between md:items-center gap-16 md:h-full py-10"
    >

      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 mt-16 md:mt-32">
        {
            isAboveMediumScreens ? (
              <div className="border-2 p-2 border-blue rounded-t-[400px]">
                <img
                  src="../assets/myProfile.JPG"
                  alt="profile"
                  className="rounded-t-[400px] filter saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                />
              </div>
            ) : (
              <img
                src="../assets/myProfile.JPG"
                alt="profile"
                className="rounded-t-[400px] filter saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              />
            )
        }
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opaacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Ukwishaka
            Levy
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:center md:text-start">
            I can help you build a product, feature or
            website Look through some of my work and experience! If you like what you see and
            have a project you need coded, don’t hesitate to contact me.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opaacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex mt-5 justify-center md:justify-start"
        >
          <a
            className="bg-gradient-rainblue cursor-pointer text-deep-blue rounded-sm py-3 px-7 font-semibold
              hove:bg-blue hover:text-whitw transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            Contact me
          </a>

          <a
            className="bg-gradient-rainblue py-0.5 pr-0.5"
            download
            href="../assets/Levy-Ukwishaka-rsm-1.pdf"
          >
            <div className="flex items-center gap-1 bg-deep-blue hover:text-red transtion duration-500 w-full h-full justify-center font-playfair px-10">
              <HiOutlineDocumentDownload />
              Resume
            </div>

          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ DELAY: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opaacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex mt-5 justify-center md:justify-start"
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
