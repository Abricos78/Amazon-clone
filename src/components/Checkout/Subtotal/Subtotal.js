import React from 'react'
import style from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    return (
        <div className={style.subtotal}>
            <CurrencyFormat 
                renderText={value => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className={style.gift}>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimaScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
