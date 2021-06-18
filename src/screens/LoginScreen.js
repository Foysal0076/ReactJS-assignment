import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'

const schema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required'),
})

const LoginScreen = ({ history }) => {

    const dispatch = useDispatch()
    const { loading, error, userInfo } = useSelector(state => state.userLogin)

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [dispatch, userInfo, history])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitHandler = (data) => {
        const { email, password } = data
        dispatch(login(email, password))
    }

    return (
        <div className="row py-4 h-100">
            <div className="col-md-6 mx-auto ">
                {error && <Message>{error}</Message>}
                {loading ? <Loader /> : (
                    <div className="card shadow bg-light form-container">
                        <div className="card-body">
                            <form noValidate onSubmit={handleSubmit((data) => onSubmitHandler(data))} >
                                <h2 className='text-center p-2' >Login</h2>

                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        {...register('email')}
                                        className={errors.email ? 'form-control is-invalid' : 'form-control'}
                                    />
                                    {errors.email && <p className='invalid-feedback form-text' >{errors.email.message}</p>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        {...register('password')}
                                        className={errors.password ? 'form-control is-invalid' : 'form-control'}
                                    />
                                    {errors.password && <p className='invalid-feedback form-text' >{errors.password.message}</p>}
                                </div>

                                <button type="submit" className="btn btn-outline-success w-100">Submit</button>
                            </form>
                            <div className='row py-3'>
                                <div className='col'>
                                    Don't have an account? <Link style={{ fontSize: '1.2rem'}} to='/register' >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginScreen