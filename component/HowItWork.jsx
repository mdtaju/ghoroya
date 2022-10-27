import Image from 'next/image';
import React from 'react';
import Illustration1 from '../public/Images/how-it-work/illustration-1.png';
import Illustration2 from '../public/Images/how-it-work/illustration-2.png';
import Illustration3 from '../public/Images/how-it-work/illustration-3.png';
import styles from '../styles/HowItWorks/HowItWorks.module.css';
const HowItWork = () => {
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
                                                <h4><span>01</span> The Best Deals In Town!</h4>
                                                <p>Only at Ghoroya app can you find the finest deals and package deals!</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration2} alt='illustration' />
                                                <h4><span>02</span> There are so many options.</h4>
                                                <p>Browse through our app's hundreds of eateries to find your favorite.</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos='flip-up' data-aos-delay="200" data-aos-duration="300">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration3} alt='illustration' />
                                                <h4><span>03</span> Fastest Delivery</h4>
                                                <p>Receive your food delivery in less an hour! That is the fastest it will go.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HowItWork;