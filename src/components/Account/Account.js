import React, { useEffect } from 'react';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';

function Account() {
    const { user, logout } = useContext(UserContext);

    let getReq = () => {
        //aciosreq using user
    }

    return (
        // true? showThis:false
        <div>{user ? (
            <div>
                <h2>Welcome, {user.username}!</h2>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <p>Please log in to view your account.<button onClick={logout}>Logout </button></p>
        )}</div>
    )
}

export default Account