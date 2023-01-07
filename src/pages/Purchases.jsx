import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../utils/getConfig'
import PurchaseCard from '../components/purchases/PurchaseCard'
import './styles/purchases.css'


const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchasesList(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])

    console.log(purchasesList)

    return (
        <section className='myPurchases'>
            <h2 className='myPurchases__title'>My purchases</h2>
            <div className='myPurchases__container'>
                {
                    purchasesList?.map(purchase => (
                        <PurchaseCard className='myPurchases__card'
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }

            </div>
        </section>
    )
}

export default Purchases