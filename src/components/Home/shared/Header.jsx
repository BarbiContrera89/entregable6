import React from 'react'
import { Link } from 'react-router-dom'
import './style/header.css'



const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'><Link to='/'><i className="fa-brands fa-shopify header__icon"></i></Link></li>
                    <li className='header__item'><Link to='/Login'><i className="fa-regular fa-user header__icon"></i></Link></li>
                    <li className='header__item'><Link to='/cart'><i className="fa-solid fa-cart-plus header__icon"></i></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header