import React from 'react';

const serviceInfo = ({service}) => {
   const  {name,dec,img} = service;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{dec}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default serviceInfo;