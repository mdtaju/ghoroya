import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../public/Images/gallery/gallery-1.jpeg';
import Img2 from '../public/Images/gallery/gallery-2.jpeg';
import Img3 from '../public/Images/gallery/gallery-3.jpeg';
import Img4 from '../public/Images/gallery/gallery-4.jpeg';
import Img5 from '../public/Images/gallery/gallery-5.jpeg';
import Img6 from '../public/Images/gallery/gallery-6.jpeg';
import Img7 from '../public/Images/gallery/gallery-7.jpeg';
import Img8 from '../public/Images/gallery/gallery-8.jpeg';
import Img9 from '../public/Images/gallery/gallery-9.jpeg';
import styles from '../styles/Gallery/Gallery.module.css';
import GalleryChild from './GalleryChild';

const GalleryComponent = () => {
      const { t } = useTranslation();
      return (
            <div className='gap'>
                  <div className="container">
                        <h1 className={styles.gallery_main_title}>{t("gallery.galleryTitle")}</h1>
                        <div className={styles.gallery_main_container}>
                              <GalleryChild
                                    Img={Img1}
                              />
                              <GalleryChild
                                    Img={Img2}
                              />
                              <GalleryChild
                                    Img={Img3}
                              />

                              <GalleryChild
                                    Img={Img4}
                              />
                              <GalleryChild
                                    Img={Img5}
                              />
                              <GalleryChild
                                    Img={Img6}
                              />
                              <GalleryChild
                                    Img={Img7}
                              />
                              <GalleryChild
                                    Img={Img8}
                              />
                              <GalleryChild
                                    Img={Img9}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default GalleryComponent;