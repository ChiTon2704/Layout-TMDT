// const data = JSON.parse(localStorage.getItem('CART'))
import { ADD_TO_CART, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from '../Components/Cart/action';
const json = localStorage.getItem('CART');
const cartItems = JSON.parse(json);

const initState = cartItems ? cartItems : [];

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartItems = JSON.parse(localStorage.getItem('cartItems'))
            // B1: lay action.item add vao mang state
            // B2: lay mang state chuyen thanh JSON
            // B3: luu cai JSON vao local storage ('CART')                
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return [...state, action.item]
        case REMOVE_PRODUCT:
            const cartItemsA = JSON.parse(localStorage.getItem('cartItems'))
            cartItemsA.items = cartItemsA.items.filter((item) => {
                return !(item.objectId === action.item.objectId);
            });
            localStorage.setItem('cartItems', JSON.stringify(cartItemsA));
            return { ...state, ...cartItemsA }
        case CHANGE_PRODUCT_QUANTITY:
            const cartItemsB = JSON.parse(localStorage.getItem('cartItems'));
            const existItem = cartItemsB.items.findIndex(({ objectId }) => {
                return objectId === action.item.objectId
            });
            cartItemsB.items[existItem].quantity = Number(action.quantity);
            localStorage.setItem('cartItems', JSON.stringify(cartItemsB));
            return { ...state, ...cartItemsB }
        default:
            return state
    };
}
export default cartReducer
