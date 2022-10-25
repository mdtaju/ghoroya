import Image from 'next/image';
import React from 'react';
import Img from '../public/Images/photo-3.png';
import styles from '../styles/FoodOrder/FoodOrder.module.css';

const FoodOrder = () => {
      return (
            <div className={`gap no-top ${styles.FoodOrder_container}`}>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-5 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <Image src={Img} alt='res' />
                                    </div>
                              </div>
                              <div className="col-lg-6 offset-lg-1 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <h1>Food from your favorite restaurants to your table</h1>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis officiis tempore accusantium, exercitationem corrupti porro! Explicabo vel aliquid autem quo?</p>
                                          <button className='button button_2'>Download app</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodOrder;