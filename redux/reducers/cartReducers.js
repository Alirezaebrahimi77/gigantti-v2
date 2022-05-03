// import { getCookie, setCookie } from "../../libs/useCookie";
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL, LOAD_CART_PRODUCTS } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            const item = action.payload
            let reduxCartItems = state.cartItems
            const isItemExist = state.cartItems.find(i => i._id === item._id);
            if(isItemExist){

                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i._id === isItemExist._id ? item : i)

                }

            } else{
                reduxCartItems.push(item)
                if(typeof window !==  "undefined") {
                    localStorage.setItem("cartItems", JSON.stringify(reduxCartItems));
                }
                return {
                    cartItems: reduxCartItems
                }
            }
        case LOAD_CART_PRODUCTS:
            return{
                cartItems: action.payload
            }
    
        case ADD_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }
}

