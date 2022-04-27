import {ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants"

// All products reducer
export const allProductsReducer = (state ={products: []}, action) => {

    switch(action.type){
        case ALL_PRODUCTS_SUCCESS:
            return{
                productsCount: action.payload.count,
                products: action.payload.products,

            }
        case ALL_PRODUCTS_FAIL:
            return{
                error: action.payload

            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }


        default:
            return state;
    }
}

// Product details reducer
export const productDetailsReducer = (state ={product: {}}, action) => {

    switch(action.type){
        case PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload

            }

        case PRODUCT_DETAILS_FAIL:
            return{
                error: action.payload

            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }


        default:
            return state;
    }
}