import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../public/Images/ghoroya_logo.jpg';
import styles from '../styles/NavBar/NavBar.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Nav = () => {
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
                        <ul>
                              <li>
                                    <Image src={Logo} alt='logo' width={60} height={60} />
                              </li>
                              <Link href='/'>
                              <li style={location.pathname === '/' ? navActive : navColor }>Home</li>
                              </Link>
                              <Link href='/about'>
                              <li style={location.pathname === '/about' ? navActive : navColor }>About Us</li>
                              </Link>
                              <Link href='/contact'>
                              <li style={location.pathname === '/contact' ? navActive : navColor }>Contact</li>
                              </Link>
                        </ul>
                        <div className={styles.nav_cart_container}>
                        <div className='flex align-items-center'>
                              
                        </div>
                              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                    <button className={`button button_2`}>download app</button>
                              </a> 
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;