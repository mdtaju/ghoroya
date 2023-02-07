import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Food from './Food';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Slider/Slider.module.css';

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
        <div className={styles.home_slider_restaurant}>
            <ul className='m-5'>
                <Link href={'/'}>
                    <li>{t("nav.home")}</li>
                </Link>
                <li><HiOutlineArrowNarrowRight /></li>
                <Link href={'/category'}>
                    <li>{t("nav.category")}</li>
                </Link>
                <li><HiOutlineArrowNarrowRight /></li>
                <Link href={'/foods'}>
                    <li>{t("nav.foods")}</li>
                </Link>
            </ul>
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