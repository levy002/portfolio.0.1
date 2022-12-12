import React from 'react';

const SocialMediaIcons = () => (
  <div className=" flex justify-center items-center md:justify-start my-10 gap-7">
    <a
      className="w-100 h-100 hover:opacity-50 transtion duration-500"
      href="https://github.com/levy002"
      target="_blank"
      rel="nonreferrer noreferrer"
    >
      <img src="../assets/Github.png" alt="github" />
    </a>

    <a
      className="hover:opacity-50 transtion duration-500"
      href="https://www.linkedin.com/in/levy-ukwishaka/"
      target="_blank"
      rel="nonreferrer noreferrer"
    >
      <img src="../assets/linkedin.png" alt="linkerdin" />
    </a>

    <a
      className="hover:opacity-50 transtion duration-500"
      href="https://twitter.com/LevyUkwishaka"
      target="_blank"
      rel="nonreferrer noreferrer"
    >
      <img src="../assets/twitter.png" alt="twitter" />
    </a>
  </div>
);

export default SocialMediaIcons;
