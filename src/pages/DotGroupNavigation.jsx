/* eslint-disable react/prop-types */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroupNavigation = ({ selectedPage, setSelectedPage }) => {
  const pages = ['home', 'skills', 'projects', 'testmonials', 'contact'];
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
     before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]
  `;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {
        pages.map((page) => (
          <AnchorLink
            key={page}
            className={`${selectedPage === page ? selectedStyles : 'backdrop-opacity-10 backdrop-invert bg-white/30'} w-3 h-3 rounded-full `}
            href={`#${page}`}
            onClick={() => setSelectedPage(page)}
          />
        ))
       }
    </div>
  );
};

export default DotGroupNavigation;
