import React from 'react';
import { GrClose, GrLinkedinOption } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
// import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <div>
      <GrClose />
      <button type="button">Home</button>
      <button type="button">Services</button>
      <button type="button">Projects</button>
      <button type="button">Testmonials</button>
      <button type="button">Contact</button>
    </div>

    <div>
      <div>
        <GrLinkedinOption />
        <SiGmail />
        <IoLogoGithub />
      </div>

      <div>
        <h3>&#169; LEVY 2022</h3>
        <h3>ALL RIGHTS RESERVED</h3>
      </div>
    </div>
  </nav>
);

export default Menu;
