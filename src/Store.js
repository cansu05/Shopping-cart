import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './control/CartSlice'

const Store = configureStore({
    reducer:{
        cart: cartReducer,
        
    }
})

export default Store