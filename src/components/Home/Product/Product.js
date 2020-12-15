import React from 'react'
import style from './Product.module.css'
import { connect } from 'react-redux';
import { addProductToBasket } from '../../../redux/homeReducer';

function Product({id, title, image, price, rating, ...props}) {

    let addProductToBasket = () => {
        debugger
        let item = {
            id: id,
            title,
            image,
            price,
            rating
        }
        props.addProductToBasket(item)
    } 

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
                    .map(() => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>

            <img src={image} />

            <button onClick={addProductToBasket} className={style.addBasket}>Add to Basket</button>
        </div>
    )
}

// let mapStateToProps = state => {
//     debugger
// },
let  mapDispatchToProps = dispatch => {
    return {
        addProductToBasket: item => {
            dispatch(addProductToBasket(item))
        }
    }
}

let ProductContainer = connect(null, mapDispatchToProps)(Product)

export default ProductContainer
