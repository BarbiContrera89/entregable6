import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/login.css'

const Login = () => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data)
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(err => console.log(err))
        reset({
            email: "",
            password: ""
        })
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