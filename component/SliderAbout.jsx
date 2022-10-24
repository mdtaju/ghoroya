import Image from 'next/image';
import React from 'react';
import ImgRes from '../public/Images/photo-9.jpg';
import styles from '../styles/Slider/Slider.module.css';
import Nav from './Nav';

const SliderAbout = () => {
      return (
            <section className={styles.slider_container}>
                  <Nav />
                  <div className="container">
                        <div className='row align-items-center'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <h1>Nothing to worry about with Ghoroya</h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                          
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