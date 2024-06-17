import { createContext ,useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
 
// initial state/ global state variable
const initialState = {
    total: 0,
    cartList:[]
}


// cart context is created this will be used to create the provider and to access the initial state
const cartContext = createContext(initialState);

// function which will wrap the component and those will be accessed as children here
export const ContextProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(cartReducer, initialState);


    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);

        dispatch({
            type:"ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    };

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(item => item.id !== product.id);

        dispatch({
            type:"REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    };

    // const totalCartPrice = () => {
    //     const total = 0;
    //     total = state.cartList.forEach(product => {
    //         total += product.price; 
    //     });

    //     dispatch({
    //         type: "TOTAL_CART_PRICE",
    //         payload: {
    //             total: total
    //         }
    //     })

    // }




    /* 
    the value provided here will be accessed in the components inside the <cartContext.Provider>, 
    all the complex function, changes and values will be provided inside this value
    */
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        // totalCartPrice
    };
    return(

        /* 
         this is the wrapper function which wrapps the components and now the context of initialState can be
         used in the below component which are passed as children 
        */
        <cartContext.Provider value={value}>
            {children}    
        </cartContext.Provider>
    )
}


// this function will be used to access the context in the components all the value passed can be accessed using this
export const useCart = () => {
    const context = useContext(cartContext);
    return context;
}