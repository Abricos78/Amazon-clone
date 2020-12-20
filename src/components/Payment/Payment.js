import { Link } from '@material-ui/core'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from '../../axios'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setError, setDisabled, setSucceeded, setProcessing, setClientSecret } from '../../redux/paymentReducer'
import CheckoutProductContainer from '../Checkout/CheckoutProduct/CheckoutProduct'
import style from './Payment.module.css'

function Payment({basket, user, error, disabled, succeeded, processing, clientSecret, setError, setDisabled, setSucceeded, setProcessing, setClientSecret}) {

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

    let getBasketTotal = basket
    .map(product => +product.price)
    .reduce((accamulator, currentValue) => accamulator + currentValue, 0)
                                                                           
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        debugger
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')
    }

    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal * 100}`
        })

        setClientSecret(response.data.clientSecret)
    }

    getClientSecret()

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className={style.priceContainer}>
                                <CurrencyFormat 
                                    renderText={value => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimaScale={2}
                                    value={getBasketTotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        basket: state.homePage.basket,
        user: state.app.user,
        error: state.paymentPage.error,
        disabled: state.paymentPage.disabled,
        succeeded: state.paymentPage.succeeded,
        processing: state.paymentPage.processing,
        clientSecret: state.paymentPage.clientSecret
    }
},
    mapDispatchToProps = dispatch => {
        return {
            setError: error => {
                dispatch(setError(error))
            },
            setDisabled: disabled => {
                dispatch(setDisabled(disabled))
            },
            setSucceeded: succeeded => {
                dispatch(setSucceeded(succeeded))
            },
            setProcessing: processing => {
                dispatch(setProcessing(processing))
            },
            setClientSecret: clientSecret => {
                dispatch(setClientSecret(clientSecret))
            }
        }
    }

let PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment)

export default PaymentContainer
