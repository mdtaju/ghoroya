import React from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';
import useWindowSize from './useWindowSize';


const MainNav = () => {
      const windowWidth = useWindowSize();
      return (
            <>
                  {
                        windowWidth.width > 781 ?
                        <Nav /> :
                        <MobileNav />
                  }
            </>
      );
};

export default MainNav;