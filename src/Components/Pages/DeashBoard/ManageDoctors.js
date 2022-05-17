import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DoctorRow from '../../Pages/DeashBoard/DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Manage Doctor {doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SI:</th>
                            <th>Avater</th>
                            <th>Doctor: Name</th>
                            <th>Specialty</th>
                            <th>Acction</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow refetch={refetch} key={doctor._id} index={index} doctor={doctor}></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;