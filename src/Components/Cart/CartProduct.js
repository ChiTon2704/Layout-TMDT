import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral';
import './index.scss';
import paypal from './paypal.png';
import { changeQuantityProduct } from './action';
class CartProduct extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="container height-cart">
                <p className="myshoppingcart">MY SHOPPING CART</p>
                <hr />
                <div className="row ">
                    <div className="col-8">
                        <div className="cart-items">
                            <div className="item">
                                <div className="row" >
                                    <div className="col-2">

                                    </div>
                                    <div className="col-3 center2">
                                        <p>Product</p>
                                    </div>

                                    <div className="col-2 center2">
                                        <p>Price</p>
                                    </div>
                                    <div className="col-2 center2">
                                        <p>quantity</p>
                                    </div>
                                    <div className="col-2 center2">
                                        <p>Total</p>
                                    </div>
                                    <div className="col-1 center">

                                    </div>
                                </div>
                            </div>

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
                                            <div className="row" >
                                                <div className="col-2">
                                                    <img src={item.img} alt={item.name_phone} />
                                                </div>
                                                <div className="col-3 center">
                                                    <p>{item.name_phone}</p>
                                                </div>

                                                <div className="col-2 center">
                                                    <p>{numeral(item.price).format('0,0')} <sup>đ</sup></p>
                                                </div>
                                                <div className="col-2 center">
                                                    <div className="quantity row">
                                                        <button className="buttonchangequantity1">
                                                            <p >-</p>
                                                        </button>
                                                        <div className="quantitydetail">
                                                            <p type="number" > {item.quantity} </p>
                                                        </div>
                                                        <button className="buttonchangequantity2" >
                                                            <p  >+</p>
                                                        </button>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="col-2 center">
                                                    <p>{numeral(item.price * item.quantity).format('0,0')} <sup>đ</sup></p>
                                                </div>
                                                <div className="col-1 center">
                                                    <button className="btn btn-danger glyphicon glyphicon-remove"
                                                    > X </button>
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
                                            {/* <p>{this.state.totalcart}</p> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row subtotal">
                                <div className="col-7">
                                </div>
                                <div className="col-5 ">
                                    <div className="row ">
                                        <div className="col-5 ">
                                            <p>Discount :</p>
                                        </div>
                                        <div className="col-7">
                                            {/* <p>{this.state.totalcart}</p> */}
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
                                            {/* <p>{this.state.totalcart}</p> */}
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
                            {/* <label className="containerr">Paypal
                                        <input type="radio" checked="checked" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="containerr">Thanh toán bằng tiền mặt khi nhận hàng
                                    <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label> */}
                            <div className="checkout">
                                {/* <button  >CHECK OUT</button> */}
                                <img type="button" src={paypal} alt="paypal" />
                            </div>
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