import React, { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './pages/Navbar';
import Landing from './pages/Landing';
import LineGradient from './components/lineGradient';
import DotGroupNavigation from './pages/DotGroupNavigation';
import MySkills from './pages/MySkills';
import Projects from './pages/Projects';

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

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
    </div>
  );
};

export default App;
