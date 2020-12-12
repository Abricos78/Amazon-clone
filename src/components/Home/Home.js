import React from 'react'
import style from './Home.module.css'
import background from '../../assets/img/396ae9efea008a465e00f9e757cc1baf.jpg'

function Home() {
    return (
        <div className={style.home}>
            <img className={style.image} src={background}/>
        </div>
    )
}

export default Home
