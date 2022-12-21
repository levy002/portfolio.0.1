/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
            hover:text-yellow transition duration-500
        `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopofPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const pages = ['Home', 'Skills', 'Projects', 'Contact'];
  const navbarBackground = isTopofPage ? '' : 'bg-blue';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">UL</h4>

        {/* DESKTOP NAV */}

        { isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {
                pages.map((page) => (
                  <Link
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))
            }
          </div>
        ) : (
          <button
            className="rounded-full bg-yellow p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            type="button"
          >
            <img src="../assets/menu-icon.svg" alt="menu" />
          </button>
        )}

        {/* MOBILE NAV */}

        {
            !isAboveSmallScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button type="button" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src="../assets/close-icon.svg" alt="close-menu" />
                  </button>
                </div>

                {/* MENU ITEMS */}

                <div className="flex flex-col gap-20 ml-[33%] text-2xl text-deep-blue">
                  {
                pages.map((page) => (
                  <Link
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                ))
            }
                </div>
              </div>
            )
        }
      </div>
    </nav>
  );
};

export default Navbar;
