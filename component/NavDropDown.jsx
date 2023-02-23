import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import styles from '../styles/NavBar.module.scss';

const NavDropDown = ({setFont, font}) => {
      const {t, i18n} = useTranslation();

      const handleChangeLan = (lan) => {
            i18n.changeLanguage(lan);
            localStorage.setItem("lan", lan);
            setFont(!font)
      }
      return (
            <div className={styles.NavDropDown_container}>
                  <div className={styles.NavDropDown_select}>
                        <span><TbWorld /></span>
                        <span style={{fontSize:'1rem'}}>{t("global.lan")}</span>
                        <span><BiChevronDown /></span>
                  </div>
                  <ul className={styles.NavDropDown_list}>
                        <li onClick={() => handleChangeLan('en')}>English</li>
                        <li onClick={() => handleChangeLan('bn')}>বাংলা</li>
                  </ul>
            </div>
      );
};

export default NavDropDown;