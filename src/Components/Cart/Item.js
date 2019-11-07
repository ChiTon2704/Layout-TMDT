import React, { Component } from 'react';
import './index.scss';
import numeral from 'numeral';
export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            // total:this.props.total
        }
    }
    changeQuantity = () => {
        this.setState((prevState) => ({
            // Spread Operator - Thay doi noi bo cua thuoc tinh
            product: { ...prevState.product, quantity: prevState.product.quantity + 1,
                      
             }
        }))
    }
    changeQuantity2 = () => {
        this.setState((prevState) => ({
            // Spread Operator - Thay doi noi bo cua thuoc tinh
            product: { ...prevState.product, quantity: prevState.product.quantity - 1 }
        }))
    }
    render() {
        if (this.state.product.sale === 0) {
            return (
                <div className="grid-container">
                    <div className="col-img">
                        <p>X</p>
                        <img src={this.state.product.img}  alt={this.state.product.name_phone}/>
                    </div>
                    <div className="col-detail">
                        <div className="giamgia row">
                            <div className="col-8">
                                <p>{this.state.product.name_phone}  </p>
                            </div>
                            <div >
                                <span className="pricee"> {numeral((this.state.product.price - this.state.product.sale)*this.state.product.quantity).format('0,0')} <sup> đ</sup></span>
                            </div>
                            {/* <li> <span>Giảm thêm 3% (120.000₫) cho khách mua online có sinh nhật.</span></li> */}
                        </div>
                        <div className="price row">
                            <div className="col-8">
                                {/* <p>{numeral(this.props.product.sale).format('0,0')} <sup> đ</sup>  còn <i className="pricelast">  {numeral(this.props.product.price - this.props.product.discount).format('0,0')} <sup> đ</sup> </i> </p> */}
                            </div>
                            <div >
                                <p>
                                    <span  onClick={this.changeQuantity2}>-</span>
                                    <span>{this.state.product.quantity}</span>
                                    <span onClick={this.changeQuantity}>+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else
        {
            return (
                <div className="grid-container">
                    <div className="col-img">
                        <p>X</p>
                        <img src={this.state.product.img} alt={this.state.product.name_phone} />
                    </div>
                    <div className="col-detail">
                        <div className="giamgia row">
                            <div className="col-8">
                                <p>{this.state.product.name_phone}  </p>
                            </div>
                            <div >
                                <span className="pricee">  {numeral(this.state.product.price - this.state.product.sale).format('0,0')} <sup> đ</sup></span>
                            </div>
                            {/* <li> <span>Giảm thêm 3% (120.000₫) cho khách mua online có sinh nhật.</span></li> */}
                        </div>
                        <div className="price row">
                            <div className="col-8">
                                {/* <p>Giảm {numeral(this.props.product.sale).format('0,0')} <sup> đ</sup>  còn <i className="pricelast">  {numeral(this.props.product.price - this.props.product.sale).format('0,0')} <sup> đ</sup> </i> </p> */}
                            </div>
                            <div >
                                <p>
                                <span  onClick={this.changeQuantity2}>-</span>
                                    <span>{this.state.product.quantity}</span>
                                    <span onClick={this.changeQuantity}>+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
