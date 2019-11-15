// const data = JSON.parse(localStorage.getItem('CART'))
import { ADD_TO_CART, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from '../Components/Cart/action';
const cartItems = JSON.parse(localStorage.getItem('cartItems'));

const initState = cartItems ? cartItems : [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // lay cartItmems tu LS
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      // kiem tra su ton tai cua cartItems
      if (!cartItems) {
        const firstCartItems = [{ ...action.item, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(firstCartItems));
        return [...state, ...firstCartItems]
      } else {
        // Tim item trung`
        const existItem = cartItems.findIndex(({ _id }) => {
          return _id == action.item._id;
        });
        // Neu co ton tai item trung`
        if (existItem === -1) {
          const newCartItems = [...cartItems, { ...action.item, quantity: 1 }];
          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
          return newCartItems
        } else {
          cartItems[existItem].quantity = Number(cartItems[existItem].quantity) + 1;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          return cartItems;
        };
      }
    // case REMOVE_PRODUCT:
    //   const cartItemsToRemove = JSON.parse(localStorage.getItem('cartItems'));

    case REMOVE_PRODUCT:
      const cartItemsToRemove = JSON.parse(localStorage.getItem('cartItems'))
      cartItemsToRemove.items = cartItemsToRemove.items.filter((item) => {
        return !(item.objectId === action.item.objectId);
      });
      localStorage.setItem('cartItems', JSON.stringify(cartItemsToRemove));
      return { ...state, ...cartItemsToRemove }
    default:
      return state
  };
}
export default cartReducer
