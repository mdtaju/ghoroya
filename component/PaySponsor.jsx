import Image from 'next/image';
import React from 'react';
import Sponsor from '../public/Images/SSLCOMMERZ.png';
import styles from '../styles/CounterSection/CounterSection.module.css';

const PaySponsor = () => {
      return (
            <div className='gap' style={{paddingTop:'0px'}}>
                  <div className='container' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="400">
                        <div className={styles.pay_sponsor_rainbow}>
                              <span></span>
                              <span></span>
                              <Image src={Sponsor} alt='payment-sponsor' />
                        </div>
                  </div>
            </div>
      );
};

export default PaySponsor;