import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgRes from '../public/Images/food-thre-burger.png';
import styles from '../styles/Slider/Slider.module.css';

const Slider = () => {
      const {t} = useTranslation();
      return (
            <section style={{paddingBottom:'100px'}} className={styles.slider_container}>
                  <div className="container">
                        <div className='row align-items-center justify-content-between'>
                              <div className='col-lg-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <h1>{t("slider.title")}</h1>
                                          <p>{t("slider.subtitle")}</p>
                                          <div>
                                                {/* <SliderSelect /> */}
                                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                                      <button className={`button button_2`}>{t("global.button")}</button>
                                                </a> 
                                          </div>
                                    </div>
                              </div>
                              <div className='col-lg-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                              <div className={styles.home_slider_img}>
                                    <Image  priority={true} className={styles.home_slider_res_img} src={ImgRes} alt='Restauran'/>
                                    {/* <div className={styles.home_slider_location_container}>
                                          <GrLocation className={styles.home_slider_location_icon} />
                                          <div>
                                          // height={640} width={339}
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