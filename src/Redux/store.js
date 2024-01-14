import {  configureStore } from '@reduxjs/toolkit'
import ProductReducer from './product/ProductReducer'
import CartReducer from "./cart/cartReducer"
import pageReducer from "./Page/pageReducer"
export const Store = configureStore ({
    reducer: {
        products: ProductReducer,
        carts: CartReducer,
        pages: pageReducer,
    },
    devTools:true,
})