import { combineReducers } from "redux";
import {allProductsReducer, productDetailsReducer} from "./productReducers"

const reducer = combineReducers({
    
    allProducts: allProductsReducer,
    productDetails: productDetailsReducer,
}) 

export default reducer