import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyApointment = () => {
    const [apoinment, setApoinment] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();


    useEffect(() => {

        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('red', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');

                    navigate('/');

                }

                return res.json()
            })

            .then(data => {

                setApoinment(data);
            })



    }, [user])

    return (
        <div>
            <h1>My appoinmenta {apoinment.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
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