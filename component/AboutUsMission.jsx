import Image from 'next/image';
import React from 'react';
import Img from '../public/Images/illustration-5.png';

const AboutUsMission = () => {
      return (
            <div className={`gap no-top`}>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-5 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <Image src={Img} alt='res' />
                                    </div>
                              </div>
                              <div className="col-lg-6 offset-lg-1 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div>
                                          <h1>Our mission is to save you time</h1>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis officiis tempore accusantium, exercitationem corrupti porro! Explicabo vel aliquid autem quo?</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUsMission;