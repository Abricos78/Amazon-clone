import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/img/amazon-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';


function Header({allProducts, user,  ...props}) {

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className={style.header}>

            <Link to="/">
                <img className={style.logo} src={logo} alt="logo"/>
            </Link>

            
            <div className={style.search}>
                <input className={style.input} type="text" />
                <SearchIcon className={style.searchIcon}/>
            </div>
            <div className={style.nav}>
                
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className={style.option}>
                        <span className={style.lineOne}>{user ? `Hello, ${user.email}` : 'Hello Guest'}</span>
                        <span className={style.lineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                

                <div className={style.option}>
                    <span className={style.lineOne}>Returns</span>
                    <span className={style.lineTwo}>& Orders</span> 
                </div>

                <div className={style.option}>
                    <span className={style.lineOne}>Your</span>
                    <span className={style.lineTwo}>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className={style.optionBasket}>
                        <ShoppingBasketIcon className={style.basket}/>
                        <span className={style.lineTwo + ' ' + style.basketCount}>{allProducts}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        allProducts: state.homePage.basket.length,
        user: state.app.user
    }
}

let HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
