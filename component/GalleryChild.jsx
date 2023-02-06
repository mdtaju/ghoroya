import Image from 'next/image';
import React from 'react';
import styles from '../styles/Gallery/Gallery.module.css';

const GalleryChild = ({ Img }) => {

      return (
            <div className={styles.gallery_img_container}>
                  <Image
                        src={Img}
                        alt="gallery-img"
                        width={"100%"}
                        height={"100%"}
                        layout='responsive'
                        objectFit='cover'
                        className={styles.gallery_img}
                        priority={true}
                  />
            </div>
      );
};

export default GalleryChild;