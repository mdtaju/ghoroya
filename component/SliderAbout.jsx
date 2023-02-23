import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ImgRes from '../public/Images/WhatsApp.jpeg';
import styles from '../styles/Slider.module.scss';

const SliderAbout = () => {
      const {t} = useTranslation();
      return (
            <section style={{marginBottom:'100px'}} className={styles.slider_container}>
                  <div className="container">
                        <div className='row align-items-center justify-content-between'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <ul>
                                                <Link href={'/'}>
                                                <li>{t("nav.home")}</li>
                                                </Link>
                                                <li><HiOutlineArrowNarrowRight /></li>
                                                <Link href={'/about'}>
                                                <li>{t("nav.about")}</li>
                                                </Link>
                                          </ul>
                                          <h1>{t("sliderAbout.title")}</h1>
                                          <p>{t("sliderAbout.description")}</p>
                                          
                                    </div>
                              </div>
                              <div className='col-lg-5 offset-lg-1' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                              <div className={styles.home_slider_img}>
                                    <div style={{textAlign:'center'}}>
                                    <Image width={300} height={372} priority={true} style={{borderRadius:'25px'}} src={ImgRes} alt='Restauran'/>
                                    <p style={{marginTop:'10px', marginBottom:"3px", fontWeight:"bold"}}>{t("sliderAbout.identity")} </p>
                                    <p>{t("sliderAbout.identityTwo")} <span style={{color:'var(--primaryGreen)'}}>Ghoroya.com</span></p>
                                    </div>
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