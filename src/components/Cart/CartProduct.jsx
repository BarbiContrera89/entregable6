import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './style/cartProduct.css'

const CartProduct = ({ product }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='cart-product'>
            <header className='cart-product__header'>
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
            </header>
            <button className='cart-product__btn' onClick={handleDelete}>
                <i className="fa-regular fa-trash-can btn__icon"></i>
            </button>
            <div className='cart-product__quantity'>
                <p>Quantity:</p>
                <span className='cart-product__productsInCart'>{product.productsInCart.quantity}</span>
            </div>

            <div className='cart-product_price'>
                <p>Unit Price:</p>
                <span>&#36;{product.price}</span>
            </div>
        </article>
    )
}

export default CartProduct