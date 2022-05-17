import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));
    
    const imageStorageKey = '0973a96babc26f7005cc4abc2ecd613a';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);

            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // sent to your data
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization : `bearer ${localStorage.getItem('accessToken')}`
                        
                    },
                    body: JSON.stringify(doctor),
                    
                })
                .then(res => res.json())
                .then(data => {
                    if(data){
                        alert('Doctor Added successfully');
                        reset();
                    }
                    else{
                        alert('you are wrong');
                    }
                   

                })

                
            }
        })
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-secondary'>Add a New Do</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* name fild this down  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Requird Name',
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>

                {/* name fild this up */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Requird Email',
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'validate your Emai!',
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pettern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                    </label>
                </div>
                {/* passworld for  */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('Specialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                            key={service._id}
                            value={service.name}
                            
                            >{service.name}</option>)
                        }
                    </select>

                </div>
                {/* //passworld for */}


                            {/* Image code started here */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required',
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>
                           {/* Image code ends here */}




                <input className='w-full btn text-white  max-w-xs' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;