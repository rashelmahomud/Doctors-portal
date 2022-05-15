import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyApointment = () => {
    const [apoinment, setApoinment] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {

        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
            method: 'GET',
            headers:{
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('red',res);
                return res.json()
            })

            .then(data => {

                setApoinment(data);
            })


            
    }, [user])

    return (
        <div>
            <h1>My appoinmenta {apoinment.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apoinment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.patient}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApointment;