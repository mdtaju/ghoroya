import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { BiUserCheck } from 'react-icons/bi';
import { MdDirectionsBike, MdOndemandVideo } from 'react-icons/md';
import ReactPlayer from 'react-player';
import ImgScr from '../public/Images/app-srcs.png';
import styles from '../styles/Slider.module.scss';
import Dialog from '@mui/material/Dialog';


const Jobs = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
          setOpen(true);
    };

    const handleClose = () => {
          setOpen(false);
    };
    const {t} = useTranslation();
    return (
        <section style={{ paddingBottom: '100px' }} className={styles.slider_container}>
        <div className="container">
              <div className='row align-items-center justify-content-between'>
                    <div className='col-lg-12' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                          <div className={styles.home_slider_restaurant}>
                                <h1>{t("slider.jobtitle")}</h1>
                                <p>{t("slider.subtitle")}</p>
                                <div className=''>
                                      {/* <SliderSelect /> */}
                                      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.rider" rel="noopener noreferrer">
                                            <button className={`button button_2`}><MdDirectionsBike style={{ fontSize: "22px" }} /> {t("slider.btnRider")}</button>
                                      </a>
                                      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.merchant" rel="noopener noreferrer">
                                            <button style={{ marginLeft: '7px' }} className={`button button_3`}><BiUserCheck style={{ fontSize: "22px" }} /> {t("slider.btnExpert")}</button>
                                      </a>
                                      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.rider" rel="noopener noreferrer">
                                            <button style={{ marginLeft: '7px' }} className={`button button_2`}><MdDirectionsBike style={{ fontSize: "22px" }} /> {t("slider.btnCustomer")}</button>
                                      </a>
                                      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.user&pli=1" rel="noopener noreferrer">
                                            <button style={{ marginLeft: '7px', marginTop:"5px" }} className={`button button_3`}><BiUserCheck style={{ fontSize: "22px" }} /> {t("slider.btnMerchant")}</button>
                                      </a>
                                </div>
                          </div>
                    </div>
                    
              </div>

        </div>
  </section>
    );
};

export default Jobs;

