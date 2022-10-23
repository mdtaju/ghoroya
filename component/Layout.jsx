import React from 'react';
import Footer from './Footer';
import Slider from './Slider';

const Layout = ({children}) => {
      return (
            <>
                  <Slider />
                  <>
                        {children}
                  </>
                  <Footer />
            </>
      );
};

export default Layout;