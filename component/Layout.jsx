import React from 'react';
import Footer from './Footer';

const Layout = ({children}) => {
      return (
            <>
                  <>
                        {children}
                  </>
                  {/* <Subscribe /> */}
                  <Footer />
            </>
      );
};

export default Layout;