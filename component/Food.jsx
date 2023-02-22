import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Food = ({ name, images }) => {
   
    return (
        <>
       
            <div class="col">
                <div class="card">
                    <img src={images} height={175} width={160} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title">{name}</h6>
                            
                        </div>
                </div>
            </div>
        </>
    );
};

export default Food;