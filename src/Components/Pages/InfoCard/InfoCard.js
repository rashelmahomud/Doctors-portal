import React from 'react';

const InfoCard = ({img,CartTitle,Dec,bgClass}) => {
    return (
        <div>
           
            <div class={`card lg:card-side p-3 shadow-xl ${bgClass}`}>
                <figure className='pl-5'><img src={img} alt="Album"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title ">{CartTitle}</h2>
                    <p>{Dec}.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default InfoCard;