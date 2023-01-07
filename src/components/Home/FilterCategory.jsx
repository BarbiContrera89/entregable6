import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getAllProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategories.css'

const FilterCategory = ({ setInputValue }) => {

    const [categories, setCategories] = useState()

    const [handleOpen, setHandleOpen] = useState(true)

    const hadleOpen = e => {
        if (handleOpen) {
            setHandleOpen(false)
        } else {
            setHandleOpen(true)
        }
    }


    useEffect(() => {

        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleClick = id => {
        dispatch(getAllProductsByCategory(id))
        setInputValue("")
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts)
        setInputValue("")
    }


    return (
        <section className='section__categories'>
            <h3 className='categories__h3'>Categories
                <button className='categories__btn' onClick={hadleOpen}><i className="fa-solid fa-arrows-up-down"></i></button>
            </h3>
            <ul className={`categories__ul-open ${handleOpen && 'categories__ul-close'}`}>
                <li className='categories__btn-all' onClick={() => { handleAllProducts }}>All products</li>
                {
                    categories?.map(category => (
                        <li className='categories__btn-id' onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FilterCategory