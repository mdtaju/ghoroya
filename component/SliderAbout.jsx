import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ImgRes from '../public/Images/photo-9.jpg';
import styles from '../styles/Slider/Slider.module.css';

const SliderAbout = () => {
      return (
            <section style={{marginBottom:'100px'}} className={styles.slider_container}>
                  <div className="container">
                        <div className='row align-items-center justify-content-between'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <ul>
                                                <Link href={'/'}>
                                                <li>Home</li>
                                                </Link>
                                                <li><HiOutlineArrowNarrowRight /></li>
                                                <Link href={'/about'}>
                                                <li>About</li>
                                                </Link>
                                          </ul>
                                          <h1>What is the function of Ghoroya?</h1>
                                          <p>New and small entrepreneurs of Chittagong and all over Bangladesh offer home made food such as: breakfast, lunch, evening snacks, dinner, bread, cake, pitha, pudding, biryani and various homemade cooking spices etc. Besides, various types of hand-made goods such as woven products, cane products, all furniture made of bashen, nakshi kantha, boutique sewing products, handpaint, wallpaint etc. are sold directly to the consumer and work with the facility of easy and short delivery.
So, Ghoroya.com is enabling small and medium entrepreneurs to sell and buy their manufactured products at home through home app.</p>
                                          
                                    </div>
                              </div>
                              <div className='col-lg-5 offset-lg-1' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                              <div className={styles.home_slider_img}>
                                    <Image priority={true} className={styles.home_slider_res_img} style={{borderRadius:'25px'}} src={ImgRes} alt='Restauran'/>
                                    {/* <div className={styles.home_slider_location_container}>
                                          <GrLocation className={styles.home_slider_location_icon} />
                                          <div>
                                                <h6>Best Restaurant</h6>
                                                <p>In your city</p>
                                          </div>
                                    </div> */}
                              </div>
                        </div>
                        </div>
                        
                  </div>
            </section>
      );
};

export default SliderAbout;