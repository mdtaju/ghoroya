import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Food from './Food';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Slider.module.scss';

const Foods = () => {
    const { t } = useTranslation();
    const [allfoods, setFoods] = useState([])
    useEffect(() => {
        fetch('foods.json')
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
                            {/* <li><HiOutlineArrowNarrowRight /></li> */}
                            {/* <Link href={'/category'}>
                                <li>{t("Category")}</li>
                            </Link> */}
                            <li><HiOutlineArrowNarrowRight /></li>
                            <Link href={'/foods'}>
                                <li>{t("Foods")}</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='row row-cols-1 row-cols-md-4 g-1 m-5 p-5 '>

                        {allfoods.map((allfood, id) => (
                            <Food
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

export default Foods;
{/* <ul>
                <Link href={'/'}>
                    <li>{t("nav.home")}</li>
                </Link>
                <li><HiOutlineArrowNarrowRight /></li>
                <Link href={'/contact'}>
                    <li>{t("nav.contact")}</li>
                </Link>
            </ul> */}