import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiLocationMarker, HiMail, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdPermPhoneMsg } from 'react-icons/md';
import ImgRes from '../public/Images/contacts-1.png';
import styles from '../styles/Slider/Slider.module.css';

const SliderAbout = () => {
      const {t} = useTranslation();
      return (
            <section className={styles.slider_container}>
                  <div className="container">
                        <div className='row align-items-center'>
                              <div className='col-lg-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <ul>
                                                <Link href={'/'}>
                                                <li>{t("nav.home")}</li>
                                                </Link>
                                                <li><HiOutlineArrowNarrowRight /></li>
                                                <Link href={'/contact'}>
                                                <li>{t("nav.contact")}</li>
                                                </Link>
                                          </ul>
                                          <h1>{t("sliderContact.title")}</h1>
                                          <p>{t("sliderContact.subtitle")}</p>
                                          <div className={styles.sliderContact_contact_container}>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <span className={styles.sliderContact_contact_icon}><HiLocationMarker /></span>
                                                      <h6>{t("footer.secThree.location")}</h6>
                                                </div>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <span className={styles.sliderContact_contact_icon}><HiMail /></span>
                                                      <h6>info@ghoroya.com</h6>
                                                </div>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <span className={styles.sliderContact_contact_icon}><MdPermPhoneMsg /></span>
                                                      <h6>+{t("footer.secThree.phone")}</h6>
                                                      <h6>+{t("footer.secThree.whatsApp")}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='col-lg-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                              <div className={styles.home_slider_img}>
                                    <Image priority={true} className={styles.home_slider_res_img} style={{borderRadius:'25px'}} src={ImgRes} alt='Restauran'/>
                                    {/* <div className={styles.home_slider_location_container}>
                                          <GrLocation className={styles.home_slider_location_icon} />
                                          <div>
                                                <h6>Best Restaurant</h6>
                                                <p>In your city</p>
                                          </div>
                                    </div> */}
                              </div>
                        </div>
                        </div>
                        
                  </div>
            </section>
      );
};

export default SliderAbout;