import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsArrowRight, BsFillTelephoneFill } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { RiInstagramLine } from 'react-icons/ri';
import Logo from '../public/Images/ghoroya_merchant.jpg';
import styles from '../styles/Footer/Footer.module.css';

const Footer = () => {
      return (
            <footer className={`gap no-top ${styles.footer_container}`}>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className={styles.footer_description}>
                                          <Image src={Logo} alt='logo' width={70} height={70} />
                                          <h1>The Best Restaurants in Your Home</h1>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, autem? Corrupti atque dignissimos incidunt quas voluptate labore quia tempore ipsum!</p>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className={styles.footer_menu}>
                                          <h4>Menu</h4>
                                          <ul>
                                                <Link href={'/'}>
                                                      <li>Home <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                                <Link href={'/about'}>
                                                      <li>About Us <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                                <Link href={'/contact'}>
                                                      <li>Contact <span className={styles.footer_menu_icon}><BsArrowRight /></span></li>
                                                </Link>
                                          </ul>
                                    </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className={styles.footer_contract}>
                                          <h4>Contract</h4>
                                          <div className={styles.footer_location}>
                                                <HiLocationMarker />
                                                <p>Chattagram, Bangladesh</p>
                                          </div>
                                          <div className={styles.footer_mail}>
                                                <HiMail />
                                                <p>ghoroya@info.com</p>
                                          </div>
                                          <div className={styles.footer_phone}>
                                                <BsFillTelephoneFill />
                                                <p>+00923984</p>
                                          </div>
                                    </div>
                                    <ul className={styles.footer_social_icon}>
                                          <li><GrFacebookOption /></li>
                                          <li><RiInstagramLine /></li>
                                          <li><AiOutlineTwitter /></li>
                                    </ul>
                              </div>
                        </div>
                        <div className={styles.footer_bottom_part}>
                              <p>Copyright © 2022. Ghoroya.com All rights reserved.</p>
                              <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                                    <span>Privacy Policy</span>
                                    <span>Terms & Services</span>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;