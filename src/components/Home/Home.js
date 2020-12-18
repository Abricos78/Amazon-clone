import React from 'react'
import style from './Home.module.css'
import background from '../../assets/img/396ae9efea008a465e00f9e757cc1baf.jpg'
import ProductContainer from './Product/Product'


function Home() {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <img className={style.image} src={background} alt="background"/>

                <div className={style.row}>
                    <ProductContainer
                    id="100" 
                    title="The best book of JS" 
                    price="100" 
                    image="https://cv9.litres.ru/pub/c/pdf-kniga/cover_max1500/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg" 
                    rating={5}
                    />
                    <ProductContainer
                        id="101" 
                        title="КОМБАЙН KENWOOD FDM 301SS" 
                        price="200" 
                        image="https://www.imperiatechno.ru/pictures/product/popup/445040_0.jpg" 
                        rating={4}
                    />
                    <ProductContainer
                        id="106" 
                        title="Programming JavaScript Applications" 
                        price="95" 
                        image="https://i.pinimg.com/736x/a2/e6/0d/a2e60d0428ca93ce662c3a29d0fcc2e4.jpg" 
                        rating={5}
                    />
                </div>

                <div className={style.row}>
                    <ProductContainer
                        id="102" 
                        title="Умные часы с GPS и пульсометром A16 D100" 
                        price="300" 
                        image="https://images.satu.kz/131792245_w640_h640_smart-chasy.jpg" 
                        rating={3}
                    />
                    <ProductContainer
                        id="103" 
                        title="Яндекс.Станция (серебристая)" 
                        price="210" 
                        image="https://multivarka.pro/upload/resize_cache/iblock/0ba/750_750_1/ya-station-back-white.jpg" 
                        rating={5}
                    />
                    <ProductContainer
                        id="104" 
                        title="Apple iPad Air 2 128Gb Wi-Fi серый" 
                        price="470" 
                        image="https://cdn.svyaznoy.ru/upload/iblock/b54/ipadair2_2up_spgry_ru-ru-print.jpg/resize/483x483/hq/" 
                        rating={4}
                    /> 
                </div>

                <div className={style.row}>
                    <ProductContainer
                        id="105" 
                        title="LED телевизор Sony KD55XE7096BR2 55'' (черно-серебристый)" 
                        price="1150" 
                        image="https://cdn.svyaznoy.ru/upload/iblock/343/cef6193c08500afeb93b5e9303393fce.jpg/resize/483x483/hq/" 
                        rating={5}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Home
