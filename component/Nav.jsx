import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../public/Images/ghoroya_logo.jpg';
import styles from '../styles/NavBar.module.scss';
import CategoryDropDown from './CategoryDropDown';
import NavDropDown from './NavDropDown';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Nav = ({ setFont, font }) => {
      const { t } = useTranslation();
      const location = useRouter();
      const navColor = {
            color: '#000',
      }
      const navActive = {
            color: '#f6c900'
      }
      return (
            <nav className={`${styles.navbar_main_container}`}>
                  <div className={`container ${styles.navbar}`}>
                        <ul className=''>
                              <li>
                                    <Link href={"/"}>
                                          <Image src={Logo} alt='ghoroya, logo' width={60} height={60} />
                                    </Link>
                              </li>
                              <Link href='/'>
                                    <li style={location.pathname === '/' ? navActive : navColor}>{t("nav.home")}</li>
                              </Link>
                              <Link href='/about'>
                                    <li style={location.pathname === '/about' ? navActive : navColor}>{t("nav.about")}</li>
                              </Link>
                              <Link href='/contact'>
                                    <li style={location.pathname === '/contact' ? navActive : navColor}>{t("nav.contact")}</li>
                              </Link>
                              <Link href='/gallery'>
                                    <li style={location.pathname === '/gallery' ? navActive : navColor}>{t("nav.gallery")}</li>
                              </Link>
                              <Link href='/jobs'>
                                    <li style={location.pathname === '/jobs' ? navActive : navColor}>{t("nav.jobs")}</li>
                              </Link>
                              <CategoryDropDown setFont={setFont} font={font} />
                             

                        </ul>
                        <div className={styles.nav_cart_container}>
                              <div className='flex align-items-center'>

                              </div>
                              <NavDropDown setFont={setFont} font={font} />
                              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                    <button className={`button button_2`}>{t("global.button")}</button>
                              </a>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;