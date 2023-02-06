import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUserCheck } from 'react-icons/bi';
import { MdDirectionsBike, MdOndemandVideo } from 'react-icons/md';
import ReactPlayer from 'react-player';
import ImgScr from '../public/Images/app-srcs.png';
import styles from '../styles/Slider/Slider.module.css';

const Slider = () => {
      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
            setOpen(true);
      };

      const handleClose = () => {
            setOpen(false);
      };
      const { t } = useTranslation();
      return (
            <section style={{ paddingBottom: '100px' }} className={styles.slider_container}>
                  <div className="container">
                        <div className='row align-items-center justify-content-between'>
                              <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_restaurant}>
                                          <h1>{t("slider.title")}</h1>
                                          <p>{t("slider.subtitle")}</p>
                                          <div>
                                                {/* <SliderSelect /> */}
                                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.rider" rel="noopener noreferrer">
                                                      <button className={`button button_2`}><MdDirectionsBike style={{ fontSize: "22px" }} /> {t("slider.btnRider")}</button>
                                                </a>
                                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ghoroya.merchant" rel="noopener noreferrer">
                                                      <button style={{ marginLeft: '7px' }} className={`button button_3`}><BiUserCheck style={{ fontSize: "22px" }} /> {t("slider.btnExpert")}</button>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div className='col-lg-5 offset-lg-1' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                                    <div className={styles.home_slider_img_sec}>
                                          <div className={styles.home_slider_img}>
                                                <Image priority={true} className={styles.home_slider_res_img} src={ImgScr} alt='Restauran' />
                                                {/* <div className={styles.home_slider_location_container}>
                                          <GrLocation className={styles.home_slider_location_icon} />
                                          <div>
                                          // height={640} width={339}
                                                <h6>Best Restaurant</h6>
                                                <p>In your city</p>
                                          </div>
                                    </div> */}
                                          </div>
                                          <div onClick={handleClickOpen} className={styles.home_slider_video_sec}>
                                                <div className={styles.slider_video_icon}>
                                                      <MdOndemandVideo style={{ color: 'green', fontSize: '26px' }} />
                                                </div>
                                                <p>Watch video</p>
                                          </div>
                                          <Dialog
                                                // fullScreen={fullScreen}
                                                fullWidth={true}

                                                open={open}
                                                onClose={handleClose}
                                          // aria-labelledby="responsive-dialog-title"
                                          >
                                                <div className={styles.home_slider_video_container}>
                                                      <ReactPlayer playing={true}
                                                            width={'100%'}
                                                            height={'100%'}
                                                            controls url={'/Images/ghoroya-version-7.mp4'} />
                                                </div>

                                          </Dialog>

                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      );
};

export default Slider;