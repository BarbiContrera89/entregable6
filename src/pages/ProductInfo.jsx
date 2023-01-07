import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/Home/CardProduct'
import ProductDescription from '../components/Home/productInfo/ProductDescription'
import SliderImg from '../components/Home/productInfo/SliderImg'
import './styles/productInfo.css'

const ProductInfo = () => {

    const { id } = useParams()

    const [product, setProduct] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    const allProducts = useSelector(state => state.products)


    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        if (allProducts && product) {
            const pivot = allProducts.filter(prod => prod.category.name === product.category)
            setSimilarProducts(pivot)
        }
    }, [allProducts, product])


    return (
        <div className='productInfo'>
            <SliderImg className='productInfo__sliderImg' listImgs={product?.productImgs} />
            <ProductDescription className='productInfo__productDescription' product={product} />
            <section className='productInfo__section'>
                <h2 className='productInfo__h2'>Discover similar items</h2>
                <div className='productInfo__similar-products-container'>
                    {
                        similarProducts?.map(simProd => {
                            if (simProd.title !== product.title) {
                                return <CardProduct className='productInfo__cardProduct'
                                    key={simProd.id}
                                    product={simProd}
                                />
                            }
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ProductInfo