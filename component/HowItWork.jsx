import Image from 'next/image';
import React from 'react';
import Illustration1 from '../public/Images/how-it-work/illustration-1.png';
import Illustration2 from '../public/Images/how-it-work/illustration-2.png';
import Illustration3 from '../public/Images/how-it-work/illustration-3.png';
import styles from '../styles/HowItWorks/HowItWorks.module.css';
const HowItWork = () => {
      return (
            <div className='gap'>
                  <div className="container">
                        <div className={`aos-animate ${styles.HowItWork_heading}`} data-aos="fade-up">
                              <h1>How It Works</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum id suscipit dolorum, maiores reprehenderit excepturi?</p>
                        </div>
                        <div className={styles.HowItWork_illustration_container}>
                              <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration1} alt='illustration' />
                                                <h4><span>01</span> Select Restaurant</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur corporis non. Eveniet quis corporis minus, amet facilis rem iste!</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration2} alt='illustration' />
                                                <h4><span>02</span> Select menu</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur corporis non. Eveniet quis corporis minus, amet facilis rem iste!</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                          <div className={styles.HowItWork_card}>
                                                <Image src={Illustration3} alt='illustration' />
                                                <h4><span>03</span> Wait for delivery</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur corporis non. Eveniet quis corporis minus, amet facilis rem iste!</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HowItWork;