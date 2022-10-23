import React from 'react';
import styles from '../styles/CounterSection/CounterSection.module.css';
const CounterSection = () => {
      return (
            <div className='gap no-top'>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-3 col-md-6 col-12">
                                    <div className={styles.CounterSection_title_area}>
                                          <h3>Service shows good taste.</h3>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>2k+</h3>
                                          <p>Satisfied<br/>
							Customer</p>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>12+</h3>
                                          <p>Food<br/>
							Items</p>
                                    </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-12">
                                    <div className={styles.CounterSection_cart}>
                                          <h3>2.5k+</h3>
                                          <p>Food<br/>
							Delivered</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CounterSection;