
import { Link } from 'react-router-dom'
import './style/header.css'

const Header = ({ setHandleOpening, handleOpening }) => {

    const handleClick = () => {
        setHandleOpening(!handleOpening)
    }

    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'><Link to='/'><i className="fa-brands fa-shopify header__icon"></i></Link></li>
                    <li className='header__item'><Link to='/Login'><i className="fa-regular fa-user header__icon"></i></Link></li>
                    <li className='header__item'><Link to='/cart'><i className="fa-solid fa-cart-plus header__icon"></i></Link></li>
                    <li className='header__item'><Link to='/purchases'><i className="fa-solid fa-money-check-dollar header__icon"></i></Link></li>
                    <li className='header__item'><button onClick={handleClick} className='header__btn'><i className="fa-solid fa-filter header__icon"></i></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header