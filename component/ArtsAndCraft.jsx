import Image from 'next/image';
import React from 'react';

const ArtsAndCraft = ({ name, images }) => {
    return (
        <>
            <div className="card-group">
                <div className="card">
                    <img src={images} height={175} width={160} className="card-img-top" alt='arts' />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtsAndCraft;