import React from 'react'
import style from './Checkout.module.css'
import SubtotalContainer from './Subtotal/Subtotal'
import { connect } from 'react-redux';
import CheckoutProductContainer from './CheckoutProduct/CheckoutProduct';


function Checkout({basket, user}) {

    return (
        <div className={style.checkout}>
            <div className={style.left}>
                <img className={style.ad} src="https://content26.com/wp-content/uploads/AMS-Graphic-1_890x400.png" alt="ad"/>

                <div >
                    <h3>{user ? `Hello, ${user.email}` : ''}</h3>
                    <h2 className={style.title}>Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProductContainer 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>

            <div className={style.right}>
                <SubtotalContainer />
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        basket: state.homePage.basket,
        user: state.app.user
    }
}



let CheckoutContainer = connect(mapStateToProps, null)(Checkout)

export default CheckoutContainer
