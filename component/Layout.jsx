import React, { useState } from 'react';
import Footer from './Footer';
import MainNav from './MainNav';

const Layout = ({children}) => {
      const [fontStyle, setFontStyle] = useState(true);
      // const [changeLan, setChangeLan] = useState('en');

      // useEffect(() => {
      //       if (typeof window !== 'undefined') {
      //             // Perform localStorage action
      //             const lan = localStorage.getItem('lan')
      //             setChangeLan(lan);
      //             if (lan === 'bn') {
      //                   setFontStyle(false)
      //             }
      //       }
      // }, [changeLan])
      return (
            <div className={!fontStyle ? 'mukti' : 'poppins'}>
                  <MainNav setFont={setFontStyle} font={fontStyle} />
                  <>
                        {children}
                  </>
                  {/* <Subscribe /> */}
                  <Footer />
            </div>
      );
};

export default Layout;