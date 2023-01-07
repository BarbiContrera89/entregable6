import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {

    console.log(purchase)

    const datePurchase = new Date(purchase.createdAt)

    return (
        <article className='purchase'>
            <header className='purchase__header'>
                <h3 className='purchase__date'>{datePurchase.toLocaleDateString()}</h3>
            </header>
            <section className='purchase__section'>
                <ul className='purchase__ul'>
                    {
                        purchase.cart.products.map(prod => (
                            <li className='purchase__li' key={prod.id}>
                                <h4 className='purchase__title'>{prod.title}</h4>
                                <span className='purchase__quantity'>Quantity: {prod.productsInCart.quantity}</span>

                                <span className='purchase__price'>&#36;{prod.price}</span>

                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PurchaseCard