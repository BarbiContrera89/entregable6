import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(err => console.log(err))
        reset({
            email: "",
            password: ""
        })
    }

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    console.log(isLogged)

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if (isLogged) {
        return (
            <div className='isLogged'>
                <h1 className='isLogged__h1'>User Logged😁</h1>
                <button className='isLogged__btn' onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
        <div className='login'>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <div className='form__email'>
                    <label className='form__label-email' htmlFor="">Email</label>
                    <input className='form__input-email' type="text" id='email' {...register("email")} />
                </div>
                <div className='form__password'>
                    <label className='form__label-password' htmlFor="password">Password</label>
                    <input className='form__input-password' type="password" name="" id="password" {...register("password")} />
                </div>
                <button className='form__btn'>Login</button>
            </form>
        </div>
    )
}

export default Login