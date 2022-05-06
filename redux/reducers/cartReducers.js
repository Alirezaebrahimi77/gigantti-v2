// import { getCookie, setCookie } from "../../libs/useCookie";
import { ADD_TO_CART_SUCCESS, LOAD_CART_PRODUCTS, INCREMENT_QTY, DECREMENT_QTY } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            const item = {...action.payload, quantity: action.payload.quantity}
            let reduxCartItems = state.cartItems
            const isItemExist = state.cartItems.find(i => i.id === item.id);
            if(isItemExist){

                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.id === isItemExist.id ? item : i)

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

        case INCREMENT_QTY:
            const updatedCartItems = [...state.cartItems]
            const index = updatedCartItems.findIndex(i => i.id === action.payload.id)
            const updatedItem = {...updatedCartItems[index]}
            updatedItem.quantity++
            updatedCartItems[index] = updatedItem
            if(typeof window !==  "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            }
            return {
                cartItems: updatedCartItems
            }
    
        case DECREMENT_QTY:
            const updatedCartItemsOnDecrement = [...state.cartItems]
            const onDecrementIndex = updatedCartItemsOnDecrement.findIndex(i => i.id === action.payload.id)
            const onDecrementCartItem = {...updatedCartItemsOnDecrement[onDecrementIndex]}



            if(onDecrementCartItem.quantity === 1){
                const filteredItems = updatedCartItemsOnDecrement.filter(item => item.id !== action.payload.id)
                if(typeof window !==  "undefined") {
                    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
                }
                return{
                    cartItems: filteredItems
                }

            }else{
                const onDecrementCartItem = {...updatedCartItemsOnDecrement[onDecrementIndex]}
                onDecrementCartItem.quantity--
                updatedCartItemsOnDecrement[onDecrementIndex] = onDecrementCartItem
                if(typeof window !==  "undefined") {
                    localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsOnDecrement));
                }
                return{
                    cartItems: updatedCartItemsOnDecrement
                }
            }
            

            

        default:
            return state;
    }
}

