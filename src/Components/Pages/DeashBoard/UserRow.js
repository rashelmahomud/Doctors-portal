import React from 'react';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert("failed to make an admin");
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert("Make a admin for All Access!");

                }

            })

        // .then(res => res.json())
        // .then(data => {
        //     refetch();
        //     alert("Make a admin for All Access!");
        // })

    }
    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs bg-red-600">Delete</button></td>
        </tr>

    );
};

export default UserRow;