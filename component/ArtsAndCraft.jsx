import React from 'react';

const ArtsAndCraft = ({ name, images }) => {
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

export default ArtsAndCraft;