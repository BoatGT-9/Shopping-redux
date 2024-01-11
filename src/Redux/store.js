import {  configureStore } from '@reduxjs/toolkit'
import ProductReducer from './product/ProductReducer'
import CartReducer from "./cart/cartReducer"
import pageReducer from './Pages/pageReducer'
export const Store = configureStore ({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        pages:pageReducer
    },
    devTools:true,
})