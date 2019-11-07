import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Item from './Item';
import axios from 'axios';

export default class CartDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: {
                items: [{
                    name_phone: '',
                    brand: '',
                    is_new: true,
                    is_sale: true,
                    sale: null,
                    price: null,
                    description: '',
                    quantity:null,
                    img: ''
                }],
                total:null
            }
           
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:7000/api/cart/getcart/5dbb249dd12c2006b0f834be`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }

    // Xóa cart
    clearCart = (id) => {
        axios.post(`http://localhost:7000/api/cart/deletecart/${id}`)// địa chỉ AIP
            .then((result) => console.log(result))
    };

    render() {
        // console.log(this.state.phones.items)
        const elementsItems = this.state.phones.items.map((product, index) => {
            return (
                <Item
                    key={index}
                    product={product}
                />
            )
        })
        return (
            <div>
                <div className="giohangcuaban">
                    <Link className='href' to='/'>  Mua them sản phẩm khác  </Link>
                    <span>Giỏ hàng của bạn</span>
                </div>
                <div className="cartbody">
                    {elementsItems}
                    <hr />
                    <div className="total">
                        <p>Tổng tiền:    <span>3.690.000đ</span></p>
                        <p>Giảm     : <span>300.000đ</span></p>
                        <p>Cần thăng toán : <span>3.390.000đ</span></p>
                    </div>
                    <Link className="href" to='/'>


                    {/* payment */}
                        <div className="thanhtoan">
                            <p onClick={() => this.clearCart('')}>THANH TOAN</p>
                        </div>
                    </Link>
                </div>
            </div>

        )
    }

}
