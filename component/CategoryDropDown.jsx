import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import styles from '../styles/NavBar.module.scss';

const CategoryDropDown = ({ setFont, font }) => {
      //     const {t, i18n} = useTranslation();
      const { t } = useTranslation();
      const location = useRouter();
      const navColor = {
            color: '#000',
      }
      const navActive = {
            color: '#f6c900'
      }
      // const handleChangeLan = (lan) => {
      //       i18n.changeLanguage(lan);
      //       localStorage.setItem("lan", lan);
      //       setFont(!font)
      // }
      return (
            <div className={styles.NavDropDown_container}>
                  <div className={styles.NavDropDown_select}>
                        <li className=''>{t("nav.category")}</li>
                        {/* <span style={{fontSize:'1rem'}}>{t("global.link")}</span> */}
                        <span><BiChevronDown /></span>
                  </div>
                  <ul className={styles.NavDropDown_list}>
                        <Link href='/foods'>
                              <li style={location.pathname === '/foods' ? navActive : navColor}>{t("nav.foods")}</li>
                        </Link>
                        <Link href='/artsandcrafts'>
                              <li style={location.pathname === '/artsandcrafts' ? navActive : navColor}>{t("nav.artsandcrafts")}</li>
                        </Link>
                        <Link href='/experts'>
                              <li style={location.pathname === '/experts' ? navActive : navColor}>{t("nav.experts")}</li>
                        </Link>
                        {/* <li onClick={() => handleChangeLan('bn')}>বাংলা</li>
                        <li onClick={() => handleChangeLan('bn')}>বাংলা</li> */}
                  </ul>
            </div>
      );
};

export default CategoryDropDown;



{/* <div className={styles.NavDropDown_container}>
                  <div className={styles.NavDropDown_select}>
                        <li className=''>Category</li>
                  //       {/* <span style={{fontSize:'1rem'}}>{t("global.link")}</span> */}
                  //       <span><BiChevronDown /></span>
                  // </div>
                  // <ul className={styles.NavDropDown_list}>
                        {/* <Link href='/contact'>
                              <li style={location.pathname === '/contact' ? navActive : navColor}>{t("nav.foods")}</li>
                        </Link>
                        <Link href='/contact'>
                              <li style={location.pathname === '/contact' ? navActive : navColor}>{t("nav.arts")}</li>
                        </Link>
                        <Link href='/contact'>
                              <li style={location.pathname === '/contact' ? navActive : navColor}>{t("nav.experts")}</li>
                        </Link> */}
                        {/* <li onClick={() => handleChangeLan('bn')}>বাংলা</li>
                        <li onClick={() => handleChangeLan('bn')}>বাংলা</li> */}
            //       </ul>
            // </div> */}