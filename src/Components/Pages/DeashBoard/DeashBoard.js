import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const DeashBoard = () => {
    // const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-6xl text-primary'>Deash Board</h1>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/deashboard'>Deash Board</Link></li>
                        <li><Link to='/deashboard/myreview'>My Reviews</Link></li>
                        <li><Link to='/deashboard/history'>My history</Link></li>
                       <li><Link to='/deashboard/users'>All Users</Link></li>
                        {/* { admin && <li><Link to='/deashboard/users'>All Users</Link></li>} */}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DeashBoard;