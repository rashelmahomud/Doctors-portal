import React from 'react';

const serviceInfo = ({service}) => {
   const  {name,dec,img} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{dec}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default serviceInfo;