import Switch from '@mui/material/Switch';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../public/Images/ghoroya_logo.jpg';
import styles from '../styles/NavBar/NavBar.module.css';
import useWindowSize from './useWindowSize';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Nav = () => {
      const location = useRouter();
      const windowWith = useWindowSize();
      const navColor = {
            color: '#000',
      }
      const navActive = {
            color: '#f6c900'
      }
      return (
            <nav className={`container ${styles.navbar}`}>
                  <ul>
                        <li>
                              <Image src={Logo} alt='logo' width={60} height={60} />
                        </li>
                        {
                              windowWith.width > 770 &&
                              <>
                                    <Link href='/'>
                                    <li style={location.pathname === '/' ? navActive : navColor }>Home</li>
                                    </Link>
                                    <Link href='/about'>
                                    <li style={location.pathname === '/about' ? navActive : navColor }>About Us</li>
                                    </Link>
                                    <Link href='/contact'>
                                    <li style={location.pathname === '/contact' ? navActive : navColor }>Contact</li>
                                    </Link>
                              </>
                        }
                  </ul>
                  <div className={styles.nav_cart_container}>
                  <div className='flex align-items-center'>
                        <span>English / বাংলা</span>
                  <Switch {...label} defaultChecked />
                  </div>
                        {
                              windowWith.width > 768 && <button className={`button button_2`}>download app</button>
                        }
                  </div>
            </nav>
      );
};

export default Nav;