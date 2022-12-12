import React, { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './pages/Navbar';
import Landing from './pages/Landing';
import DotGroupNavigation from './pages/DotGroupNavigation';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopofPage, setIsTopofPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopofPage(true);
      if (window.scrollY !== 0) setIsTopofPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopofPage={isTopofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="">
        {isAboveMediumScreens && (
          <DotGroupNavigation
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>

      <Landing setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
