import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../public/Images/gallery/celebrate.jpg';
import Img2 from '../public/Images/gallery/celebrate1.jpg';
import Img3 from '../public/Images/gallery/celebrate2.jpg';
import Img4 from '../public/Images/gallery/celebrate3.jpg';
import Img5 from '../public/Images/gallery/celebrate4.jpg';
import Img6 from '../public/Images/gallery/celebrate5.jpg';
import Img7 from '../public/Images/gallery/celebrate6.jpg';
import Img8 from '../public/Images/gallery/celebrate7.jpg';
import Img9 from '../public/Images/gallery/celebrate8.jpg';
import Img10 from '../public/Images/gallery/celebrate9.jpg';
import Img11 from '../public/Images/gallery/celebrate10.jpg';
import Img12 from '../public/Images/gallery/celebrate11.jpg';
import Img13 from '../public/Images/gallery/celebrate12.jpg';
import Img14 from '../public/Images/gallery/celebrate13.jpg';
import Img15 from '../public/Images/gallery/celebrate14.jpg';
import Img16 from '../public/Images/gallery/celebrate15.jpg';
import Img17 from '../public/Images/gallery/celebrate16.jpg';
import Img18 from '../public/Images/gallery/celebrate17.jpg';
import Img19 from '../public/Images/gallery/celebrate18.jpg';
import Img20 from '../public/Images/gallery/celebrate19.jpg';
import Img21 from '../public/Images/gallery/celebrate20.jpg';
import Img22 from '../public/Images/gallery/celebrate21.jpg';
import Img23 from '../public/Images/gallery/celebrate22.jpg';
import Img24 from '../public/Images/gallery/celebrate23.jpg';

import styles from '../styles/Gallery.module.scss';
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
                              <GalleryChild
                                    Img={Img10}
                              />
                              <GalleryChild
                                    Img={Img11}
                              />
                              <GalleryChild
                                    Img={Img12}
                              />
                              <GalleryChild
                                    Img={Img13}
                              />
                              <GalleryChild
                                    Img={Img14}
                              />
                              <GalleryChild
                                    Img={Img15}
                              />
                              <GalleryChild
                                    Img={Img16}
                              />
                              <GalleryChild
                                    Img={Img17}
                              />
                              <GalleryChild
                                    Img={Img18}
                              />
                              <GalleryChild
                                    Img={Img19}
                              />
                              <GalleryChild
                                    Img={Img20}
                              />
                              <GalleryChild
                                    Img={Img21}
                              />
                              <GalleryChild
                                    Img={Img22}
                              />
                              <GalleryChild
                                    Img={Img23}
                              />
                              <GalleryChild
                                    Img={Img24}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default GalleryComponent;