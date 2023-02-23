import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import styles from '../styles/Slider.module.scss';
import { useTranslation } from 'next-i18next';


const Experts = () => {
    const { t } = useTranslation();
    const [visible, setVisibile] = useState(6)
    const showmoreItems = () => {
        setVisibile((preValue) => preValue + 5)
    }

    const experts = [
        {
            _id: 1,
            name: 'Bangla Medium Version tutor',

        },
        {
            _id: 2,
            name: 'English Medium Version tutor',

        },
        {
            _id: 3,
            name: 'Mathematics/Science tutor',

        },
        {
            _id: 4,
            name: '  Mathematics/General',

        },
        {
            _id: 5,
            name: ' Science All subjects',

        },
        {
            _id: 6,
            name: ' Science Physics',

        },
        {
            _id: 7,
            name: 'Science Chemistry',

        },
        {
            _id: 8,
            name: ' Science Botany',

        },
        {
            _id: 9,
            name: ' Technician experts of Fridges & AC ',

        },
        {
            _id: 10,
            name: 'Technician experts of Electronic',

        },
        {
            _id: 11,
            name: 'Technician experts of pipe fittings',

        },
        {
            _id: 12,
            name: 'Technician experts of sanitization',

        },
        {
            _id: 13,
            name: ' Technician experts of Automobiles',

        },
        {
            _id: 14,
            name: 'Technician expert of Gas stove/oven',

        },
        {
            _id: 15,
            name: ' Technician expert of hardware & computer',

        },
        {
            _id: 16,
            name: 'Technician expert of Interior decor & designer',

        },
        {
            _id: 17,
            name: ' Technician expert of ceiling & concealing',

        },
        {
            _id: 18,
            name: '  Technician expert of Auto Mechanic',

        },
        {
            _id: 19,
            name: ' Technician expert of Auto motor service',

        },
        {
            _id: 20,
            name: ' Outsourcing tutor',

        },
        {
            _id: 21,
            name: ' Graphics tutor',

        },
        {
            _id: 22,
            name: ' Block & boutique trainer',

        },
        {
            _id: 23,
            name: ' Driving school  trainer',

        },
        {
            _id: 24,
            name: 'Cake & pastry trainer',

        },
        {
            _id: 25,
            name: 'Kungfu & karate tutor',

        },
        {
            _id: 26,
            name: 'Mobile Android App Development trainer',

        },
        {
            _id: 27,
            name: 'IELTS/TOEFL tutor',

        },
        {
            _id: 28,
            name: ' Journalists trainer',

        },
        {
            _id: 29,
            name: 'Agro & fisher trainer',

        },
        {
            _id: 30,
            name: 'Merchandising trainer',

        },
        {
            _id: 31,
            name: ' Fashions design trainer',

        },
        {
            _id: 32,
            name: '    Vat & Taxes consultant adviser ',

        },
        {
            _id: 33,
            name: 'Law and Legal consultant  Advisor',

        },
        {
            _id: 34,
            name: 'HR consultant adviser',

        },
        {
            _id: 35,
            name: '  Multi service helper',

        },
        {
            _id: 36,
            name: 'Advance Cutting, Sewing  & Pattern making trainer  ',

        },
        {
            _id: 37,
            name: 'Content writing Trainer',

        },
        {
            _id: 38,
            name: 'Professional Computer Office Management Trainer',

        },
    ]

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
                            <Link href={'/experts'}>
                                <li>{t("Experts")}</li>
                            </Link>
                        </ul>
                    </div>

                </div>

                <h1 className='text-center'>Our Experts</h1>
                <div className=''>
                    <ul class="list-group justify-content-center">
                        {experts.slice(0, visible).map((expert, id) => {
                            return (
                                <li key={expert.id} class="list-group-item text-center">{expert.name}</li>
                            )
                        })}
                    </ul>
                    <div className='d-flex justify-content-center m-5'>
                        <button className='button button_2  ' onClick={showmoreItems}>Load More</button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Experts;

// Technician experts of Fridges & AC
// Technician experts of Electronic
//
// Technician experts of pipe fittings
// Technician experts of sanitization
// Technician experts of Automobiles
// Technician expert of Gas stove/oven
// Technician expert of hardware & computer
// Technician expert of Interior decor & designer
// Technician expert of ceiling & concealing
// Technician expert of Auto Mechanic
// Technician expert of Auto motor service