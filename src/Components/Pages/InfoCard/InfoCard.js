import React from 'react';

const InfoCard = ({img,CartTitle,Dec,bgclassName}) => {
    return (
        <div>
           
            <div className={`card lg:card-side p-3 shadow-xl ${bgclassName}`}>
                <figure className='pl-5'><img src={img} alt="Album"/></figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">{CartTitle}</h2>
                    <p>{Dec}.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default InfoCard;