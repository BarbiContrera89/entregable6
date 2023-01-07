import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'
import './styles/toOrderProduct.css'

const ToOrderProducts = () => {

    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingOrderProducts())
    }

    const handleDescending = () => {
        dispatch(descendingOrderProducts())
    }

    return (
        <div className='orderProducts__container'>
            <button className='orderProduct__ascending-btn' onClick={handleAscending} >Ascending Order</button>
            <button className='orderProduct__descending-btn' onClick={handleDescending}>Descending Order</button>
        </div>
    )
}
export default ToOrderProducts