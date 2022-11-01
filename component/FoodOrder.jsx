import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Img from '../public/Images/photo-3.png';
import styles from '../styles/FoodOrder/FoodOrder.module.css';

const FoodOrder = () => {
      const {t} = useTranslation();
      return (
            <div className={`gap no-top ${styles.FoodOrder_container}`}>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-5 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <Image priority={true} src={Img} alt='res' />
                                    </div>
                              </div>
                              <div className="col-lg-6 offset-lg-1 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <h1>{t("foodOrder.title")}</h1>
                                          <p>{t("foodOrder.subtitle")}</p>
                                          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user" rel="noopener noreferrer">
                                                <button className={`button button_2`}>{t("global.button")}</button>
                                          </a> 
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodOrder;