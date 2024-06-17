/* 
 creating a cartReducer function which will have access to state and action
 state will have access to currect state of initialState global variable which we declared
*/

/* 
 and action will have access to type and payload
 type will be telling what type of action we are performing and payload will have the result from that action
 type will be accessd inside the dispatch in cartContext
 */

 export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case "ADD_TO_CART":
            return {...state, cartList: payload.products};

        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products};

        default:
            throw new Error("No case found");
    }


};