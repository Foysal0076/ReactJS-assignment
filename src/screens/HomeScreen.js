import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomeScreen = () => {

    const { userInfo } = useSelector(state => state.userLogin)

    return (
        <div className='py-4'>
            {userInfo ? (
                <h4>Welcome <span className='text-danger' >{userInfo.user.name}</span> </h4>
            ):(
                <h5>Welcome to staff Asia. Please <span className='text-danger' > <Link to='/login'>login</Link> </span> to continue</h5>
            )}

        </div>
    )
}


export default HomeScreen