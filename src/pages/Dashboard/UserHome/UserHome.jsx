import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-3xl '>
            <p>Welcome to the user dashboard.</p>
            {
                user?. displayName ? user.displayName :'Back'
            }

            </h2>
            
        </div>
    );
};

export default UserHome;