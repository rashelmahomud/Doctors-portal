import React from 'react';

const TestimonialInfo = ({ testi }) => {
    return (
        <div className='p-10 shadow-xl'>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo libero deleniti deserunt adipisci! Nostrum commodi inventore iusto natus sint, reiciendis accusantium itaque maxime, repudiandae culpa nesciunt at blanditiis fuga?</p>
            </div>
            <div className='flex mt-5'>

                <div className="avatar">
                    <div className="w-20 mr-5 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-accent'>{testi.name}</h2>
                    <h4>{testi.locations}</h4>


                </div>

            </div>

          

        </div>
    );
};

export default TestimonialInfo;