import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsFillTelephoneFill } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { IoLogoYoutube } from 'react-icons/io';
// IoLogoGooglePlaystore
import { RiInstagramLine, RiWhatsappFill } from 'react-icons/ri';
import Logo from '../public/Images/ghoroya_merchant.jpg';
import GooglePlay from '../public/Images/google-play-store.png';
import styles from '../styles/Footer/Footer.module.css';
import PaySponsor from './PaySponsor';

const Footer = () => {
      const {t} = useTranslation();
      return (
            <footer className={`gap no-top ${styles.footer_container}`}>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className={styles.footer_description}>
                                          <Image priority={true} style={{borderRadius:'10px'}} src={Logo} alt='logo' width={70} height={70} />
                                          <h1>{t("footer.secOne.title")}</h1>
                                          <p>{t("footer.secOne.subtitle")}</p>
                                          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                          <Image priority={true} height={50} width={154} src={GooglePlay} alt='googleplaystore' />
                                          </a> 
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className={styles.footer_menu}>
                                          <h4>{t("footer.secTwo.menu")}</h4>
                                          <ul>
                                                <Link href={'/'}>
                                                      <li>{t("footer.secTwo.menuOne")} <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                                <Link href={'/about'}>
                                                      <li>{t("footer.secTwo.menuTwo")} <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                                <Link href={'/contact'}>
                                                      <li>{t("footer.secTwo.menuThree")} <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                          </ul>
                                    </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className={styles.footer_contract}>
                                          <h4>{t("footer.secThree.title")}</h4>
                                          <div className={styles.footer_location}>
                                                <span><HiLocationMarker /></span>
                                                <p>{t("footer.secThree.location")}</p>
                                          </div>
                                          <div className={styles.footer_mail}>
                                                <HiMail />
                                                <p>info@ghoroya.com</p>
                                          </div>
                                          <div className={styles.footer_phone}>
                                                <BsFillTelephoneFill />
                                                <p>+{t("footer.secThree.phone")}</p>
                                          </div>
                                          <div className={styles.footer_phone}>
                                                <RiWhatsappFill />
                                                <p>+{t("footer.secThree.whatsApp")}</p>
                                          </div>
                                    </div>
                                    <ul className={styles.footer_social_icon}>
                                          <a target="_blank" href="https://www.facebook.com/Ghoroya.comapps" rel="noopener noreferrer">
                                                <li>
                                                      <GrFacebookOption />
                                                </li>
                                          </a>
                                          <a target="_blank" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fghoroya.app%3Ffbclid%3DIwAR2K3384KUNiRoi8EnTQtijzFlMunBRcQD4slxEZ6sM8oX71P0VzGhSop8I&h=AT0uhUEBWEL1gYQ-oqXkh2UhfkRWOS1GxNh4esMJ5g-peVAApG1Y__gocQnEkC18332aCGKIlD3cgFqq9a2NYe-xxgTYDu7B1CSM8EvISr4Sxq5-eXjdHjzgra6LnBbnCAtZ" rel="noopener noreferrer">
                                                <li>
                                                      <RiInstagramLine />
                                                </li>
                                          </a>
                                          <a target="_blank" href="https://www.youtube.com/channel/UC01sI-y0s3ZkQGX-NlYismw" rel="noopener noreferrer">
                                                <li>
                                                <IoLogoYoutube />
                                                </li>
                                          </a>
                                          {/* <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                                <li>
                                                <IoLogoYoutube />
                                                </li>
                                          </a> */}
                                    </ul>
                              </div>
                        </div>
                        <PaySponsor />
                        <div className={styles.footer_bottom_part}>
                              <p>{t("footer.bottomArea.copyWrite")}</p>
                              <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                                    <span>{t("footer.bottomArea.policy")}</span>
                                    <span>{t("footer.bottomArea.terms")}</span>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;