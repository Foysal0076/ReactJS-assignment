import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(15, 'Password cannot be more than 15 characters')
        .required('password is required'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null]),
    phone: yup.string()
        .test('len', 'Invalid phone number', (val) => val.length === 11)
})

const RegisterScreen = ({ history }) => {

    const dispatch = useDispatch()
    const { loading, error, userInfo } = useSelector(state => state.userRegister)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [dispatch, userInfo, history])

    const onSubmitHandler = (data) => {
        const { name, email, password, password_confirmation, phone } = data
        dispatch(registerUser(name, email, password, password_confirmation, phone))
    }

    return (
        <div className="row py-4 h-100">
            <div className="col-md-6 mx-auto ">
                {error && <Message>{error}</Message>}
                {loading ? <Loader /> : (
                    <div className="card shadow bg-light form-container">
                        <div className="card-body">
                            <form noValidate onSubmit={handleSubmit((data) => onSubmitHandler(data))} >
                                <h2 className='text-center p-2' >Registration</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        {...register('name')}
                                        className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                    />
                                    {errors.name && <p className='invalid-feedback form-text' >{errors.name.message}</p>}
                                </div>

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

                                <div className="form-group">
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    <input
                                        type="password"
                                        {...register('password_confirmation')}
                                        className={errors.password_confirmation ? 'form-control is-invalid' : 'form-control'}
                                    />
                                    {errors.password_confirmation && <p className='invalid-feedback form-text' >Password must match</p>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        {...register('phone')}
                                        className={errors.phone ? 'form-control is-invalid' : 'form-control'}
                                    />
                                    {errors.phone && <p className='invalid-feedback form-text' >{errors.phone.message}</p>}
                                </div>
                                <button type="submit" className="btn btn-outline-success w-100">Submit</button>
                            </form>
                            <div className='row py-3'>
                                <div className='col'>
                                    Already have an account? <Link style={{ fontSize: '1.2rem' }} to='/login' >
                                        Login
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


export default RegisterScreen