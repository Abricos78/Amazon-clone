const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET",
    DELETE_PRODUCT_FROM_BASKET = "DELETE_PRODUCT_FROM_BASKET"

let products = [
    {
        id: 100,
        title: "The best book of JS",
        price: 100, 
        image: "https://cv9.litres.ru/pub/c/pdf-kniga/cover_max1500/24499998-devid-flenagan-javascript-podrobnoe-rukovodstvo-6-e-izdanie-24499998.jpg",
        rating: 5
    },
    {
        id: 101,
        title: "КОМБАЙН KENWOOD FDM 301SS",
        price: 200, 
        image: "https://www.imperiatechno.ru/pictures/product/popup/445040_0.jpg",
        rating: 4
    },
    {
        id: 103,
        title: "Programming JavaScript Applications",
        price: 95, 
        image: "https://i.pinimg.com/736x/a2/e6/0d/a2e60d0428ca93ce662c3a29d0fcc2e4.jpg",
        rating: 5
    },
    {
        id: 104,
        title: "Умные часы с GPS и пульсометром A16 D100",
        price: 90, 
        image: "https://images.satu.kz/131792245_w640_h640_smart-chasy.jpg",
        rating: 3
    },
    {
        id: 105,
        title: "Яндекс.Станция (серебристая)",
        price: 210, 
        image: "https://multivarka.pro/upload/resize_cache/iblock/0ba/750_750_1/ya-station-back-white.jpg",
        rating: 5
    },
    {
        id: 106,
        title: "Apple iPad Air 2 128Gb Wi-Fi серый",
        price: 470, 
        image: "https://cdn.svyaznoy.ru/upload/iblock/b54/ipadair2_2up_spgry_ru-ru-print.jpg/resize/483x483/hq/",
        rating: 4
    },
    {
        id: 107,
        title: "LED телевизор Sony KD55XE7096BR2 55'' (черно-серебристый)",
        price: 1150, 
        image: "https://cdn.svyaznoy.ru/upload/iblock/343/cef6193c08500afeb93b5e9303393fce.jpg/resize/483x483/hq/",
        rating: 5
    }
]

let initialState = {
    products: products,
    basket: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case DELETE_PRODUCT_FROM_BASKET:
            debugger
            const index = state.basket.findIndex(item => +item.id === +action.id)
            let newBasket = [...state.basket]
            debugger
            index >= 0 ? newBasket = newBasket.filter((el, elIndex) => elIndex !== index) : console.warn(`Can't remove product (id: ${action.id} as it's not in basket!)`)
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export let addProductToBasket = item => {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        item
    }
}

export let deleteFromBasket = id => {
    return {
        type: DELETE_PRODUCT_FROM_BASKET,
        id
    }
}

export default homeReducer