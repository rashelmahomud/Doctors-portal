import React from 'react';
import img from '../../../assets/images/treatment.png';

const Health = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl p-5 lg:mx-20">
            <figure><img className='text-center' style={{width:"400px"}} src={img} alt="Album" /></figure>
            <div class="card-body justify-center">
                <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div class="card-actions">
                    <button class="btn btn-primary">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Health;