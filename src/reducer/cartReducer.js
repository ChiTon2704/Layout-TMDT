// const data = JSON.parse(localStorage.getItem('CART'))

const json= localStorage.getItem('CART');
const cartItems = JSON.parse(json);

const initState = cartItems ? cartItems : [];

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            const cartItems = JSON.parse(localStorage.getItem('cartItems'))
            // B1: lay action.item add vao mang state
            // B2: lay mang state chuyen thanh JSON
            // B3: luu cai JSON vao local storage ('CART')       
            
            return [...state, action.item]
        default: 
            return state
    };
}
export default cartReducer
