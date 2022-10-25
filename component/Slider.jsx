import Image from 'next/image';
import React from 'react';
import ImgRes from '../public/Images/home-page-slider.png';
import styles from '../styles/Slider/Slider.module.css';
import Nav from './Nav';

const Slider = () => {
      return (
            <section className={styles.slider_container}>
                  <Nav />
                  <div className="container">
                        <div className='row'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <h1>The Best Restaurants In Your Home</h1>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                          <div>
                                                {/* <SliderSelect /> */}
                                                <button className='button button_2'>Download app</button>
                                          </div>
                                    </div>
                              </div>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                              <div className={styles.home_slider_img}>
                                    <Image priority={true} className={styles.home_slider_res_img} src={ImgRes} alt='Restauran'/>
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

export default Slider;