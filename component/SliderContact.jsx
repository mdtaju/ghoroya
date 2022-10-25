import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
// import { HiLocationMarker, HiMail } from 'react-icons/hi';
// import { BsArrowRight, BsFillTelephoneFill } from 'react-icons/bs';
import ImgRes from '../public/Images/contacts-1.png';
import styles from '../styles/Slider/Slider.module.css';
import MainNav from './MainNav';

const SliderAbout = () => {
      return (
            <section className={styles.slider_container}>
                  <MainNav />
                  <div className="container">
                        <div className='row align-items-center'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <ul>
                                                <Link href={'/'}>
                                                <li>Home</li>
                                                </Link>
                                                <li><HiOutlineArrowNarrowRight /></li>
                                                <Link href={'/contact'}>
                                                <li>Contact</li>
                                                </Link>
                                          </ul>
                                          <h1>Contact us</h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                          <div className={styles.sliderContact_contact_container}>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <h6>Hello</h6>
                                                </div>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <h6>Hello</h6>
                                                </div>
                                                <div className={styles.sliderContact_contact_card}>
                                                      <h6>Hello</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
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