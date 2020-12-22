import React from 'react'
import './UserNotFound.scss'
import {Link} from "react-router-dom"


const UserNotFound = () => {
    return (
        <div className='user-not-found'>
            <p>User not Found</p>
            <p>It is possible that the link you have followed is incorrect or the user has been deleted</p>
            <Link to='/'> Back to Home</Link>
        </div>
    )
}

export default UserNotFound
