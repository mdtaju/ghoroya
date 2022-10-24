import Image from 'next/image';
import React from 'react';
// import Icon1 from '../public/Images/about-us-icons/service-icon-1.svg';
import Icon2 from '../public/Images/about-us-icons/service-icon-2.svg';
import Icon3 from '../public/Images/about-us-icons/service-icon-3.svg';
// import Icon4 from '../public/Images/about-us-icons/service-icon-4.svg';
import Icon5 from '../public/Images/about-us-icons/service-icon-5.svg';
// import Icon6 from '../public/Images/about-us-icons/service-icon-6.svg';
import Icon7 from '../public/Images/about-us-icons/service-icon-7.svg';
// import Icon8 from '../public/Images/about-us-icons/service-icon-8.svg';
import styles from '../styles/AboutUsFeatures/AboutUsFeatures.module.css';

const AboutUsFeatures = () => {
      return (
            <div className={`gap no-top ${styles.aboutUsFeatures_container}`}>
                  <div className="container">
                        <div className="row">
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay='200' data-aos-duration='300'>
                                    <div className={styles.aboutUsFeatures_card}>
                                          
                                          <Image src={Icon2} alt='icon' />
                                          <h4>Free Delivery</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perferendis minima unde consectetur iusto. Maiores tempore dignissimos tenetur ab dolore.</p>
                                    </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay='300' data-aos-duration='400'>
                                    <div className={styles.aboutUsFeatures_card}>
                                          <Image src={Icon3} alt='icon' />
                                          <h4>Save Your Time</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perferendis minima unde consectetur iusto. Maiores tempore dignissimos tenetur ab dolore.</p>
                                    </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay='400' data-aos-duration='500'>
                                    <div className={styles.aboutUsFeatures_card}>
                                          <Image src={Icon5} alt='icon' />
                                          <h4>Regular Discounts</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perferendis minima unde consectetur iusto. Maiores tempore dignissimos tenetur ab dolore.</p>
                                    </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay='500' data-aos-duration='600'>
                                    <div className={styles.aboutUsFeatures_card}>
                                          <Image src={Icon7} alt='icon' />
                                          <h4>Variety Food</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi perferendis minima unde consectetur iusto. Maiores tempore dignissimos tenetur ab dolore.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUsFeatures;