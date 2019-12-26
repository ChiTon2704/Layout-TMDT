import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral';
import './index.scss';
import paypal from './paypal.png';
import { Link } from 'react-router-dom';
import { changeQuantityProduct, removeProduct, deleteCart } from './action';
import axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";
import Swal from 'sweetalert2';


class CartProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: {},
            deliveryState: null
        }
        this.userForm = React.createRef();

    }
    submitForm = () => {
        this.userForm.current.dispatchEvent(new Event('submit', { cancelable: true }))
    }
    handleRemoveItem = (item) => {
        this.props.dispatch(removeProduct(item))
    };
    handleChangeQuantity = (item, quantity) => {
        this.props.dispatch(changeQuantityProduct(item, quantity))
    };
    handledeleteCart = () => {
        this.props.dispatch(deleteCart())
    };
    handleSubmitCreateBill = (e) => {
        e.preventDefault();
        let billDetail = []
        this.props.cartItems.map(item => {
            billDetail.push({ phoneId: item._id, price: item.price, quantity: item.quantity })
        })
        const user = {
            name_customer: e.target.name.value,
            phone_customer: e.target.phone.value,
            address_customer: e.target.address.value
        }
        axios.post(`http://localhost:7000/api/createCustomer`, user)// địa chỉ AIP
            .then((result) => {
                axios.post(`http://localhost:7000/api/createBill`, { billDetail, customer: result.data.result, deliveryState: this.state.deliveryState })// địa chỉ AIP
                    .then((result) => {
                        Swal.fire({
                            title: 'Thanh Toán Thành Công',
                            type: 'success'
                        })
                    })
            })
        e.target.name.value = '';
        e.target.phone.value = '';
        e.target.address.value = ''
        this.setState({
            deliveryState: null
        })
    }
    getTotalPrice = () => {
        // let totalDiscount = 0;
        let totalPrice = 0;
        this.props.cartItems.map((item) => {
            totalPrice += item.price * item.quantity;
            // totalDiscount += item.sale.price_sale * item.quantity;
        })
        return totalPrice;
    }
    getTotalDiscount = () => {
        let totalDiscount = 0;
        this.props.cartItems.map((item) => {
            totalDiscount += item.sale.price_sale * item.quantity;
        })
        return totalDiscount;
    }
    render() {
        console.log(this.props.cartItems)

        return (
            <div className="container height-cart">
                {/* Giỏ hàng trống */}
                {this.props.cartItems.length === 0 &&
                    <div className="cartnull">
                        <p>Không có sản phẩm nào trong giỏ hàng</p>
                        <Link to="/">  <button>VỀ TRANG CHỦ</button></Link>
                    </div>
                }
                {/* Giỏ hàng không trống */}
                {this.props.cartItems.length !== 0 &&
                    <div>
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
                                                            <button disabled={item.quantity <= 1}
                                                                onClick={() => this.handleChangeQuantity(item, item.quantity - 1)}
                                                                className="buttonchangequantity1">
                                                                <p >-</p>
                                                            </button>
                                                            <div
                                                                className="quantitydetail">
                                                                <p type="number" > {item.quantity} </p>
                                                            </div>
                                                            <button disabled={item.quantity >= 99}
                                                                onClick={() => this.handleChangeQuantity(item, item.quantity + 1)}
                                                                className="buttonchangequantity2" >
                                                                <p>+</p>
                                                            </button>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 center">
                                                        <p>{numeral(item.price * item.quantity).format('0,0')} <sup>đ</sup></p>
                                                    </div>
                                                    <div className="col-1 center">
                                                        <button className="btn btn-danger glyphicon glyphicon-remove"
                                                            onClick={() => this.handleRemoveItem(item)}> X </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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
                                                    {numeral(this.getTotalPrice()).format('0,0')} <sup>đ</sup>
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

                                                    {numeral(this.getTotalDiscount()).format('0,0')} <sup>đ</sup>
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
                                                    {numeral(this.getTotalPrice() - this.getTotalDiscount()).format('0,0')} <sup>đ</sup>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-4 ">
                                
                                <form action="" onSubmit={this.handleSubmitCreateBill} ref={this.userForm}>
                                    <div className="cart-info">
                                        <p className="yourinfo">YOUR INFOMATION</p>
                                        <hr />
                                        <p>Name  :   <input name='name' className="input" type="text" /></p>
                                        <p>Phone  :   <input name='phone' className="input" type="text" /></p>
                                        <p>Address  :   <input name='address' className="input" type="text" /></p>
                                        {/* <button type="submit">thanh toán</button> */}
                                    </div>
                                </form>
                                <br />
                                <div className="cart-info" >
                                    <p className="yourinfo">PAYMENT OPTIONS</p>
                                    <hr />
                                    {/* <div className="checkout" onClick={this.handledeleteCart}>
                                        <button  >CHECK OUT</button>
                                        <img type="button" src={paypal} alt="paypal" />
                                    </div> */}
                                    <PayPalButton
                                        amount={parseInt((this.getTotalPrice() - this.getTotalDiscount()) / 23000)}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            this.setState({
                                                deliveryState: 'ORDER_PAY_BY_PAYPAL'
                                            })
                                            this.submitForm()
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}
export default connect(mapStateToProps, null)(CartProduct)