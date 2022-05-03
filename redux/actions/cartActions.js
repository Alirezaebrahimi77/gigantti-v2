import axios from "axios";
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL, LOAD_CART_PRODUCTS } from "../constants/cartConstants";

export const addToCart = (id, quantity = 1) => async (dispatch) => {
    try{
        // const {origin} = absoluteUrl(req)
        const {data} = await axios.get(`http://localhost:3000/api/products/${id}`)
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload:{
                id: data._id,
                name: data.name,
                normalPrice: data.normalPrice,
                price: data.price,
                images: data.images,
                quantity
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