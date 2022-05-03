import { combineReducers } from "redux";
import {allProductsReducer, productDetailsReducer} from "./productReducers"
import { cartReducer } from "./cartReducers";

const reducer = combineReducers({
    
    allProducts: allProductsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
}) 

export default reducer