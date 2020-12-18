import { Link } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import CheckoutProductContainer from '../Checkout/CheckoutProduct/CheckoutProduct'
import style from './Payment.module.css'

function Payment({basket, user}) {

    let items = basket.map(item => {
        return (
            <CheckoutProductContainer 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
        )
    })

    return (
        <div className={style.payment}>
            <div className={style.container}>

                <h1>
                    Checkout (<Link to='/checkout'>{`${basket.length} items`}</Link>)
                </h1>

                <div className={style.section}>
                    <div className={style.title}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={style.address}>
                        <p>{user ? user.email : ''}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            

                <div className={style.section}>
                    <div className={style.title}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className={style.items}>
                        {items}
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style.title}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className={style.details}>
                        
                    </div>

                </div>
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

let PaymentContainer = connect(mapStateToProps, null)(Payment)

export default PaymentContainer
