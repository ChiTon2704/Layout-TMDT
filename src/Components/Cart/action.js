export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY';

export const addProduct = (item) => ({
    type: ADD_TO_CART,
    item
})

export const removeProduct = (item) => ({
    type: REMOVE_PRODUCT,
    item
})

export const changeQuantityProduct = (item, quantity) => ({
    type: CHANGE_PRODUCT_QUANTITY,
    item, 
    quantity
})

