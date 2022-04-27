import axios from "axios";
import {ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants"

import absoluteUrl from "next-absolute-url";
// Get all products 
export const getProducts = (req) => async(dispatch) => {
    try{
        const {origin} = absoluteUrl(req)
        const {data} = await axios.get(`${origin}/api/products`)
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }

}

// Get product details 
export const getProductDetails = (req, id) => async(dispatch) => {
    try{
        const {origin} = absoluteUrl(req)
        const {data} = await axios.get(`${origin}/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }

}


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}