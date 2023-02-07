import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Food = ({ name, images }) => {
    const {t, i18n} = useTranslation();
    return (
        <>
       
            <div class="col">
                <div class="card">
                    <img src={images} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            
                        </div>
                </div>
            </div>
        </>
    );
};

export default Food;