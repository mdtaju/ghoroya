import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import MainNav from './MainNav';

const Layout = ({children}) => {
      const [fontStyle, setFontStyle] = useState(true);
      console.log(fontStyle)
      const {i18n} = useTranslation();

      useEffect(() => {
            if (typeof window !== 'undefined') {
                  // Perform localStorage action
                  const lan = localStorage.getItem('lan')
                  i18n.changeLanguage(lan);
                  if (lan === 'bn') {
                        setFontStyle(false)
                  }
            }
      }, [i18n]);
      return (
            <div style={!fontStyle ? {fontFamily:'Mukti'} : {fontFamily:'"Poppins", sans-serif'}}>
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