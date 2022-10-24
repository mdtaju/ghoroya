import React from 'react';
import Footer from './Footer';
import Subscribe from './Subscribe';

const Layout = ({children}) => {
      return (
            <>
                  <>
                        {children}
                  </>
                  <Subscribe />
                  <Footer />
            </>
      );
};

export default Layout;