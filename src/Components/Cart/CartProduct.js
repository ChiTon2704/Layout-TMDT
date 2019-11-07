import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral';
import './index.scss';
class CartProduct extends Component {
    render() {
        return (
            <div className="container height-cart">
                <p className="myshoppingcart">MY SHOPPING CART</p>
                <hr />
                <div className="row ">
                    <div className="col-8">
                        <div className="cart-items">
                            {this.props.cartItems.map((item) => {
                                if (!this.props.cartItems) {
                                    return (
                                        <div>
                                            <p>Không có sản phẩm trong giỏ hàng</p>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="item">

                                            <div className="  row" >
                                                <div className="col-2">
                                                    <img src={item.img} />
                                                </div>
                                                <div className="col-3 center">
                                                    <p>{item.name_phone}</p>
                                                </div>
                                                <div className="col-2 center">
                                                    <p>{item.quantity}</p>
                                                </div>
                                                <div className="col-2 center">
                                                    <p>{numeral(item.price).format('0,0')} <sup>đ</sup></p>
                                                </div>
                                                <div className="col-2 center">
                                                    <p>{numeral(item.price).format('0,0')} <sup>đ</sup></p>
                                                </div>
                                                <div className="col-1 center">
                                                    <p>X</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            <div className="row subtotal">
                                <div className="col-7">
                                </div>
                                <div className="col-5 ">
                                    <div className="row ">
                                        <div className="col-5 ">
                                            <p>SubTotal :</p>
                                        </div>
                                        <div className="col-7">
                                            <p>1.000.000 đ</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row total">
                                <div className="col-7">
                                </div>
                                <div className="col-5 ">
                                    <div className="row ">
                                        <div className="col-5">
                                            <p>Total    :</p>
                                        </div>
                                        <div className="col-7">
                                            <p>1.000.000 đ</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="cart-info">
                            <p className="yourinfo">YOUR INFOMATION</p>
                            <hr />
                            <p>Email  :   <input className="input" type="text" /></p>
                            <p>Name  :   <input className="input" type="text" /></p>
                            <p>Phone  :   <input className="input" type="text" /></p>
                        </div>
                        <br />
                        <div className="cart-info">
                            <p className="yourinfo">PAYMENT OPTIONS</p>
                            <hr />
                        </div>
                        <div className="checkout">
                            <button>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)