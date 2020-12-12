import React from 'react'
import style from './Product.module.css'
import bookJS from '../../../assets/img/bookJS.jpg'

function Product({id, title, image, price, rating}) {
    return (
        <div className={style.product}>
            <div className={style.info}>
                <p>{title}</p>
                <p className={style.price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={style.rating}>
                    {Array(rating)
                    .fill()
                    .map((el, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>

            <img src={image} />

            <button className={style.addBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
