import React from 'react';
import Footer from './Footer';
import Slider from './Slider';
import Subscribe from './Subscribe';

const Layout = ({children}) => {
      return (
            <>
                  <Slider />
                  <>
                        {children}
                  </>
                  <Subscribe />
                  <Footer />
            </>
      );
};

export default Layout;