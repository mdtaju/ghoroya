import Image from 'next/image';
import React from 'react';
import Illustration from '../public/Images/subscribe.png';
import styles from '../styles/Subscribe.module.scss';

const Subscribe = () => {
      return (
            <div className={`gap ${styles.subscribe_container}`}>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-6" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.subscribe_illustration_area}>
                                          <Image src={Illustration} alt='illustration' />
                                    </div>
                              </div>
                              <div className="col-lg-5 offset-lg-1" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.subscribe_input_area}>
                                          <h1>Put your 11 digit number and do subscribe</h1>
                                          <form action="#">
                                                <input type="number" name="number" id="" placeholder='Enter your number' maxLength={11} />
                                                <button className='button button_2' type="submit">subscribe</button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Subscribe;