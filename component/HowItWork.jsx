import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Illustration1 from '../public/Images/how-it-work/illustration-1.png';
import Illustration2 from '../public/Images/how-it-work/illustration-2.png';
import Illustration3 from '../public/Images/how-it-work/illustration-3.png';
import styles from '../styles/HowItWorks.module.scss';
const HowItWork = () => {
      const {t} = useTranslation();
      return (
            <div className='gap no-top'>
                  <div className="container">
                        {/* <div className={`${styles.HowItWork_heading}`} data-aos="fade-up">
                              <h1>What is the function of ghoroya.com?</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum id suscipit dolorum, maiores reprehenderit excepturi?</p>
                        </div> */}
                        <div className={styles.HowItWork_illustration_container}>
                              <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration1} alt='illustration' />
                                                <h4><span>{t("howItWork.secOne.num")}</span> {t("howItWork.secOne.title")}</h4>
                                                <p>{t("howItWork.secOne.subtitle")}</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration2} alt='illustration' />
                                                <h4><span>{t("howItWork.secTwo.num")}</span> {t("howItWork.secTwo.title")}</h4>
                                                <p>{t("howItWork.secTwo.subtitle")}</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration3} alt='illustration' />
                                                <h4><span>{t("howItWork.secThree.num")}</span> {t("howItWork.secThree.title")}</h4>
                                                <p>{t("howItWork.secThree.subtitle")}</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HowItWork;