import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import styles from '../styles/NavBar/NavBar.module.css';

const NavDropDown = () => {
      return (
            <div className={styles.NavDropDown_container}>
                  <div className={styles.NavDropDown_select}>
                        <span><TbWorld /></span>
                        <span style={{fontSize:'1rem'}}>ENG</span>
                        <span><BiChevronDown /></span>
                  </div>
                  <ul className={styles.NavDropDown_list}>
                        <li>English</li>
                        <li>বাংলা</li>
                  </ul>
            </div>
      );
};

export default NavDropDown;