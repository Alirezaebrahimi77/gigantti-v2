import { createStore, applyMiddleware} from "redux"
import { HYDRATE, createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import reducers from "./reducers/reducers"
import storage from './sync_storage';
// import storage from './sync_storage';
const bindMiddlewares = (middleware) => {

    if(process.env.NODE_ENV !== "production"){
        const {composeWithDevTools} = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    }else{
        return reducers(state, action)
    }
}

// var cartItems
// const getCart = (key) =>{
//     if(typeof window !== "undefined"){
//         console.log("defined");
//         return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
//     }else{
//         console.log("undefined");
//         return [
//             {
//                 name: "not found browser"
//             }
//         ];
//     }
// } 
// let initialState = {
//     cart: {
//         cartItems: getCart("cartItems")
//     }
// }

// let store;
const initStore = () => {
    return createStore(reducer, bindMiddlewares([thunk]))
    
}
export const wrapper = createWrapper(initStore);

// const makeStore = ({ isServer }) => {
//     if (isServer) {
//       //If it's on server side, create a store
//       return createStore(reducers, bindMiddlewares([thunk]));
//     } else {
//       //If it's on client side, create a store which will persist
//       const { persistStore, persistReducer } = require('redux-persist');
  
//       const persistConfig = {
//         key: 'nextjs',
//         whitelist: ['cart'], // only counter will be persisted, add other reducers if needed
//         storage, // if needed, use a safer storage
//         // 'cart', 'allProducts', 'productDetails'
//       };
  
//       const persistedReducer = persistReducer(persistConfig, reducers); // Create a new reducer with our existing reducer
  
//       const store = createStore(
//         persistedReducer,
//         bindMiddlewares([thunk])
//       ); // Creating the store again
  
//       store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
  
//       return store;
//     }
//   };

