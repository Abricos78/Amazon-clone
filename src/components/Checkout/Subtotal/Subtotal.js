import React from 'react'
import style from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import { connect } from 'react-redux'

function Subtotal({allProducts, priceProducts}) {

    let getBasketTotal = priceProducts.reduce((accamulator, currentValue) => accamulator + currentValue, 0)

    return (
        <div className={style.subtotal}>
            <CurrencyFormat 
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({allProducts} items): <strong>{value}</strong>
                        </p>
                        <small className={style.gift}>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimaScale={2}
                value={getBasketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        allProducts: state.homePage.basket.length,
        priceProducts: state.homePage.basket.map(product => +product.price)
    }
}

let SubtotalContainer = connect(mapStateToProps, null)(Subtotal)

export default SubtotalContainer
