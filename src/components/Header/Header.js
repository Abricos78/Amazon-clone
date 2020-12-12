import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/img/amazon-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className={style.header}>
            <img className={style.logo} src={logo}/>
            <div className={style.search}>
                <input className={style.input} type="text" />
                <SearchIcon className={style.searchIcon}/>
            </div>
            <div className={style.nav}>

                <div className={style.option}>
                    <span className={style.lineOne}>Hello</span>
                    <span className={style.lineTwo}>Sign In</span>
                </div>

                <div className={style.option}>
                    <span className={style.lineOne}>Returns</span>
                    <span className={style.lineTwo}>& Orders</span> 
                </div>

                <div className={style.option}>
                    <span className={style.lineOne}>Your</span>
                    <span className={style.lineTwo}>Prime</span>
                </div>

                <div className={style.optionBasket}>
                    <ShoppingBasketIcon className={style.basket}/>
                    <span className={style.lineTwo + ' ' + style.basketCount}>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header