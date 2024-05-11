import React from 'react';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    if (user){
        return children
    }
     return <span className="loading loading-bars loading-lg"></span>
};

export default PrivateRoute;