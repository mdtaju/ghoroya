import Image from 'next/image';
import React from 'react';
import Sponsor from '../public/Images/SSLCOMMERZ.png';
import styles from '../styles/Footer/Footer.module.css';

const PaySponsor = () => {
      return (
            <div className={styles.paySponsor_container}>
                  <div className={styles.pay_sponsor_rainbow}>
                        <Image src={Sponsor} alt='payment-sponsor' />
                  </div>
            </div>
      );
};

export default PaySponsor;