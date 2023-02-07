import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ArtsAndCraft from './ArtsAndCraft';
import styles from '../styles/Slider/Slider.module.css';

const ArtsAndCrafts = () => {
    const { t } = useTranslation();
    const [allArts, setAllArts] = useState([])
    useEffect(() => {
        fetch('arts.json')
            .then(res => res.json())
            .then(data => setAllArts(data))
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
        <div className='row  row-cols-md-4 row-cols-1 g-1 m-5 p-5 '>

            {allArts.map((allfood, id) => (
                <ArtsAndCraft
                    key={allfood.id}
                    name={allfood.name}
                    images={allfood.images}
                />
            ))}

        </div>
    </div>
    );
};

export default ArtsAndCrafts;