import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCloseCircle, AiFillHome } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImMenu } from 'react-icons/im';
import { RiContactsFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import Logo from '../public/Images/ghoroya_merchant.jpg';
import styles from '../styles/NavBar/NavBar.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function MobileNav({font, setFont}) {
      const location = useRouter();
      const navColor = {
            color: '#808080',
      }
      const navActive = {
            color: '#f6c900'
      }
      const {t, i18n} = useTranslation();

      const handleChangeLan = (lan) => {
            i18n.changeLanguage(lan);
            localStorage.setItem("lan", lan);
            setFont(!font)
      }
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={toggleDrawer(anchor, false)} style={{float:'right'}}><span className={styles.mobileNav_close_icon}><AiFillCloseCircle /></span></Button>
      
      <List>
          <Link href={'/'}>
            <ListItem disablePadding style={location.pathname === '/' ? navActive : navColor }>
                  <ListItemButton>
                  <ListItemIcon>
                        <span 
                              style={location.pathname === '/' ? navActive : navColor }
                              className={styles.mobileNav_menu_item_icon}
                        ><AiFillHome /></span>
                  </ListItemIcon>
                  <ListItemText primary={t("nav.home")} />
                  </ListItemButton>
            </ListItem>
          </Link>
          <Divider />

            <Link href={'/about'}>
                  <ListItem disablePadding style={location.pathname === '/about' ? navActive : navColor }>
                        <ListItemButton>
                        <ListItemIcon>
                              <span 
                                    style={location.pathname === '/about' ? navActive : navColor }
                                    className={styles.mobileNav_menu_item_icon}
                              ><BsInfoSquareFill /></span>
                        </ListItemIcon>
                        <ListItemText primary={t("nav.about")} />
                        </ListItemButton>
                  </ListItem>
            </Link>
          <Divider />

            <Link href={'/contact'}>
                  <ListItem disablePadding style={location.pathname === '/contact' ? navActive : navColor }>
                        <ListItemButton>
                        <ListItemIcon>
                              <span 
                                    style={location.pathname === '/contact' ? navActive : navColor }
                                    className={styles.mobileNav_menu_item_icon}
                                    ><RiContactsFill /></span>
                        </ListItemIcon>
                        <ListItemText primary={t("nav.contact")} />
                        </ListItemButton>
                  </ListItem>
            </Link>
          <Divider />
      </List>
      
    </Box>
  );

  return (
    <div className={styles.mobileNav_container}>
      <div className='container'>
            <div className={styles.mobileNav_inner_container}>
                  <Image src={Logo} alt='ghoroya,logo' width={60} height={60} priority={true} />
                  {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                  <span onClick={toggleDrawer(anchor, true)} className={styles.mobileNav_icon}><ImMenu /></span>
                  <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                  >
                        {list(anchor)}
                        <div className={styles.mobileNav_lan_area}>
                              <span className={styles.mobileNav_lan_icon}><TbWorld /></span>
                              <span>{t("global.language")}</span>
                              <span style={{fontSize:'1.5rem'}}><BiChevronDown /></span>
                        </div>
                        <Divider />
                        <div onClick={() => handleChangeLan('en')} className={styles.mobileNav_lan_area_lan}>
                              <span>English</span>
                        </div>
                        <Divider />
                        <div onClick={() => handleChangeLan('bn')} className={styles.mobileNav_lan_area_lan}>
                              <span>???????????????</span>
                        </div>
                        <Divider />

                  </Drawer>
                  </React.Fragment>
                  ))}
            </div>
      </div>
    </div>
  );
}
