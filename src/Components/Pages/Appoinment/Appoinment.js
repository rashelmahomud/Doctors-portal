import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appoinment = ({date,setDate}) => {
    return (
        <section>

            <div
                style={{
                    backgroundPosition: 'cover',
                    background: `url(${chairBg})`
                }}

                class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='px-5 lg:px-20'>
                        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='px-5 lg:px-20 '>

                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />;
                        

                    </div>
                </div>
            </div>






        </section>
    );
};

export default Appoinment;