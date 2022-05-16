import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
        }

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All Users {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {
                          users.map(user => <UserRow key={user._id} refetch={refetch} user={user}></UserRow>)
                      }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;