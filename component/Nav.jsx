import Link from 'next/link';
import React from 'react';
import styles from '../styles/NavBar/NavBar.module.css';
import useWindowSize from './useWindowSize';

const Nav = () => {
      const windowWith = useWindowSize();
      return (
            <nav className={`container ${styles.navbar}`}>
                  <ul>
                        <li>Ghoroya</li>
                        {
                              windowWith.width > 768 &&
                              <>
                                    <Link href='/'>
                                    <li>Home</li>
                                    </Link>
                                    <Link href='/about'>
                                    <li>About Us</li>
                                    </Link>
                                    <Link href='/contact'>
                                    <li>Contact</li>
                                    </Link>
                              </>
                        }
                  </ul>
                  <div className={styles.nav_cart_container}>
                        {
                              windowWith.width > 768 && <button className={`button button_2`}>download app</button>
                        }
                  </div>
            </nav>
      );
};

export default Nav;