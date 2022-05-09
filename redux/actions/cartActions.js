import axios from "axios";
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL, LOAD_CART_PRODUCTS, INCREMENT_SUCCESS, INCREMENT_FAIL, INCREMENT_QTY, DECREMENT_QTY } from "../constants/cartConstants";
// import {absoluteUrl} from "next-absolute-url"
export const addToCart = (id, origin) => async (dispatch) => {
    try{
        // const {origin} = absoluteUrl(req)
        const {data} = await axios.get(`https://gigantti-v2.vercel.app/api/products/${id}`)
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload:{
                id: data.product._id,
                name: data.product.name,
                normalPrice: data.product.normalPrice,
                price: data.product.price,
                images: data.product.images,
                quantity: 1
            }
        })
    

    }catch(error){
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: error
        })
    }
}

export const loadCart = (products) => async (dispatch) => {
    try{
        dispatch({
            type: LOAD_CART_PRODUCTS,
            payload: products
        })


    } catch(error){
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: "Couldn't get data"
        })
    }

} 

export const incrementQty = (id) => async(dispatch) => {

        dispatch({
            type: INCREMENT_QTY,
            payload: {
                id
            }
        })

}
export const decrementQty = (id) => async(dispatch) => {

    dispatch({
        type: DECREMENT_QTY,
        payload: {
            id
        }
    })

}