import React from 'react'
import { connect } from 'react-redux'
import { deleteFromBasket } from '../../../redux/homeReducer'
import style from './CheckoutProduct.module.css'

function CheckoutProduct({id, image, title, price, rating, deleteFromBasket}) {

    const removeFromBasket = () => {
        deleteFromBasket(id)
    }

    return (
        <div className={style.checkoutProduct}>
            <img className={style.image} src={image} alt={title}/>

            <div className={style.info}>
                <p className={style.title}>{title}</p>
                <p className={style.price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={style.rating}>
                    {Array(rating)
                    .fill()
                    .map((el) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

let mapDispatchToProps = dispatch => {
    return {
        deleteFromBasket: id => {
            dispatch(deleteFromBasket(id))
        }
    }
}

let CheckoutProductContainer = connect(null, mapDispatchToProps)(CheckoutProduct)

export default CheckoutProductContainer
