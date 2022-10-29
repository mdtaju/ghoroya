import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImSpoonKnife } from 'react-icons/im';
import ImgGoogle from '../public/Images/google-play-store.png';
import Img from '../public/Images/home-app-slider.jpeg';
import styles from '../styles/HomeAppScreen/HomeAppScreen.module.css';

const HomeAppScreen = () => {
      const {t} = useTranslation();
      return (
            <div className={`gap`}>
                  <div className="container">
                        <div className="row align-items-center justify-content-center">
                              <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.homeAppScreen_text_main_container}>
                                          <div className={styles.homeAppScreen_text_container}>
                                                <span className={styles.homeAppScreen_spoon_icon}><ImSpoonKnife /></span>
                                                <div>
                                                      <h6>{t("homeAppScreen.topTitle.title")}</h6>
                                                      <h3>{t("homeAppScreen.topTitle.subtitle")}</h3>
                                                </div>
                                          </div>
                                          <h1>{t("homeAppScreen.bottomTitle.title")}</h1>
                                          <p>{t("homeAppScreen.bottomTitle.subtitle")}</p>
                                          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                                <Image src={ImgGoogle} height={50} width={154} alt='googleplaystore' />
                                          </a>
                                    </div>
                              </div>
                              <div className="col-lg-5 offset-lg-1 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.homeAppScreen_screen_container}>
                                          <Image height={640} width={339} src={Img} alt='res' />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HomeAppScreen;