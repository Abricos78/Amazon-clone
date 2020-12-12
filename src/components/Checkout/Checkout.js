import React from 'react'
import style from './Checkout.module.css'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {
    return (
        <div className={style.checkout}>
            <div className={style.left}>
                <img className={style.ad} src="https://content26.com/wp-content/uploads/AMS-Graphic-1_890x400.png"/>

                <div >
                    <h2 className={style.title}>Your Shopping Basket</h2>
                </div>
            </div>

            <div className={style.right}>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
