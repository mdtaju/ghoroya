import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ArtsAndCraft from './ArtsAndCraft';
import styles from '../styles/Slider/Slider.module.css';
import Food from './Food';

const ArtsAndCrafts = () => {
    const { t } = useTranslation();
    const [allfoods, setFoods] = useState([])
    useEffect(() => {
        fetch('arts.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []
    )
    return (
        <section style={{ marginBottom: '100px' }} className={styles.slider_container}>
            <div className='container'>
                <div className={styles.home_slider_restaurant}>
                    <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                        <ul className='m-lg-5'>
                            <Link href={'/'}>
                                <li>{t("Home")}</li>
                            </Link>
                            {/* <li><HiOutlineArrowNarrowRight /></li>
                            <Link href={'/category'}>
                                <li>{t("Category")}</li>
                            </Link> */}
                            <li><HiOutlineArrowNarrowRight /></li>
                            <Link href={'/artsandcrafts'}>
                                <li>{t("Arts and crafts")}</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='row row-cols-1 row-cols-md-4 g-1 m-5 p-5 '>

                        {allfoods.map((allfood, id) => (
                            <ArtsAndCraft
                                key={allfood.id}
                                name={allfood.name}
                                images={allfood.images}

                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>

    );
};

export default ArtsAndCrafts;