import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/CounterSection.module.scss';
const CounterSection = () => {
      const {t} = useTranslation();
      return (
            <div className='gap'>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-3 col-md-6 col-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.CounterSection_title_area}>
                                          <h3>{t("counterSec.mainTitle")}</h3>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12" data-aos='flip-up' data-aos-delay="300" data-aos-duration="400">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>{t("counterSec.areaOne.num")}+</h3>
                                          <p>{t("counterSec.areaOne.des")}<br/>
							{t("counterSec.areaOne.desTwo")}</p>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12" data-aos='flip-up' data-aos-delay="400" data-aos-duration="500">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>{t("counterSec.areaTwo.num")}+</h3>
                                          <p>{t("counterSec.areaTwo.des")}<br/>
							{t("counterSec.areaTwo.desTwo")}</p>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12" data-aos='flip-up' data-aos-delay="500" data-aos-duration="600">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>{t("counterSec.areaThree.num")}+</h3>
                                          <p>{t("counterSec.areaThree.des")}<br/>
							{t("counterSec.areaThree.desTwo")}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CounterSection;