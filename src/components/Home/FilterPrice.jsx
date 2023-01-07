import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({ setInputPrice }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        if (inputFrom && inputTo) {
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
        } else if (!inputFrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if (inputFrom && !inputTo) {
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        } else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        }
    }

    return (
        <section className='filterPrice'>
            <h2 className='filterPrice__h2'>Price</h2>
            <form className='filterPrice__form' onSubmit={handleSubmit}>
                <div className='filterPrice__form-from'>
                    <label className='filterPrice__form-fromLabel' htmlFor="from">From</label>
                    <input className='filterPrice__form-fromInput' type="number" id='from' />
                </div>
                <div className='filterPrice__form-to'>
                    <label className='filterPrice__form-toLabel' htmlFor="to">To</label>
                    <input className='filterPrice__form-toInput' type="number" id='to' />
                </div>
                <button className='filterPrice__form-btn'>Apply</button>
            </form>
        </section>
    )
}

export default FilterPrice