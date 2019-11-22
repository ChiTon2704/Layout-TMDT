// const data = JSON.parse(localStorage.getItem('CART'))
import { ADD_TO_CART, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY, DELETE_CART  } from '../Components/Cart/action';
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
      let cartItemsToRemove = JSON.parse(localStorage.getItem('cartItems'));
      // Loại bỏ phần tử cần xóa
      cartItemsToRemove = cartItemsToRemove.filter((item) => {
        return !(item._id === action.item._id);
      });

      localStorage.setItem('cartItems', JSON.stringify(cartItemsToRemove));
      return cartItemsToRemove

    case CHANGE_PRODUCT_QUANTITY:
      let cartItemsToChangeQuantiy = JSON.parse(localStorage.getItem('cartItems'));
      // Lấy vị trí của item cần thay đổi
      const existItem = cartItemsToChangeQuantiy.findIndex((item) => {
        return item._id == action.item._id;
      });
      // Thay đổi số lượng của sản phẩm
      cartItemsToChangeQuantiy[existItem].quantity = action.quantity;

      localStorage.setItem('cartItems', JSON.stringify(cartItemsToChangeQuantiy));
      return cartItemsToChangeQuantiy
      
    case DELETE_CART:
      localStorage.removeItem('cartItems');
      return state = [];

    default:
      return state
  };
}
export default cartReducer
