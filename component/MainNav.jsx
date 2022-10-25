import React from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';
import useWindowSize from './useWindowSize';


const MainNav = () => {
      const windowWidth = useWindowSize();
      console.log(windowWidth)
      return (
            <>
                  {
                        windowWidth.width < 782 ?
                        <MobileNav /> :
                        <Nav />
                  }
            </>
      );
};

export default MainNav;