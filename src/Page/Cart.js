import React, { Component } from 'react';
import NavTypePhone from '../Components/NavTypePhone';
import CartProduct from '../Components/Cart/CartProduct';
// import CartDetail from '../Components/Cart/CartDetail';
export default class Cart extends Component {
    render() {
        return (
            <div>
                <NavTypePhone/>
                <CartProduct/>
                {/* <CartDetail/> */}
            </div>
        )
    }
}
