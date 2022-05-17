import React from 'react';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, email } = doctor;

    const deleteDoctor = email => {

        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert(`Are Your in Delete D:${name} Person?`)
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>Pora dibo</td>
            <td><button onClick={() => deleteDoctor(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;