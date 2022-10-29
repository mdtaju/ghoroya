import React from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';
import useWindowSize from './useWindowSize';

const MainNav = ({setFont, font}) => {
      const windowWidth = useWindowSize();
      return (
            <>
                  {
                        windowWidth.width < 782 ?
                        <MobileNav /> : <Nav setFont={setFont} font={font}/>
                  }
            </>
      );
};

export default MainNav;