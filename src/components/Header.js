import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'

const Header = () => {

    const navStyle = {
        fontSize: '1.1rem',
        fontWeight: '500'
    }

    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <div className="text-white navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <LinkContainer to='/' >
                        <h2>ReactJs Task</h2>
                    </LinkContainer>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" style={navStyle}>
                            <li className='nav-item' >
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>

                            {userInfo ? (
                                <li className='nav-item' >
                                    <p className="nav-link" type='button' onClick={logoutHandler}>Logout</p>
                                </li>
                            ) : (
                                <>
                                    <li className='nav-item' >
                                        <Link className="nav-link" to='/login'>Login</Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className="nav-link" to='/register'>Register</Link>
                                    </li>
                                </>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header