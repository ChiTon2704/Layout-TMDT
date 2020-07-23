import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import "../Components/ZDetailSCSS/detail.scss";
import './productSame.scss';
import Swal from 'sweetalert2';
import { connect } from 'react-redux'
import { tsConstructorType } from '@babel/types';

class ProductDetail extends Component {
    handleAddItemToCart = (item) => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            item,
            quantiity: this.state.productQuanity
        });
        Swal.fire({
            position: 'middle',
            type: 'success',
            title: 'Add to cart success !',
            showConfirmButton: false,
            timer: 1500
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            phone: {},
            sales: {},
            phones: [],
            phonesWithBrand: [],
            phonesWithBrand1: [],
        }
    }

    getPhoneByBrand = () => {
        const phones = this.state.phones.filter((phone) => {
            return phone.brand === this.state.phone.brand
        });
        const phonesWithBrand = phones.slice(0, 6)
        return phonesWithBrand;
    };
    getPhoneByBrand1 = () => {
        const phones = this.state.phones.filter((phone) => {
            return phone.brand === this.state.phone.brand
        });
        const phonesWithBrand1 = phones.slice(6, 12)
        return phonesWithBrand1;

    };
    getPhoneByBrand2 = () => {
        const phones = this.state.phones.filter((phone) => {
            return phone.brand === this.state.phone.brand
        });
        const phonesWithBrand2 = phones.slice(12, 18)
        return phonesWithBrand2;
    };
    componentDidMount() {
        axios.post(`http://localhost:7000/api/phone/getphone/${this.props.match.params.id}`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phone: result.data,
                    sales: result.data.sale
                }))
            });
        axios.post(`http://localhost:7000/api/phone/getallphones`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    render() {
        let item = this.state.phone
        let item2 = this.state.sales
        const phonesWithBrand = this.getPhoneByBrand().map((product, index) => {
            return (
                <div key={index} className="col-2 card-product">
                    <Link target="/" className="href" to={product._id}>
                        <div className=" ">
                            <img className="product-image" src={product.img}
                                alt="Card image cap" />
                            <div className="card-body text-center">
                                <p className="product-name">{product.name_phone}</p>
                                <p className="product-price" >{numeral(product.price - product.sale.price_sale).format('0,0')} <sup>đ</sup>                     </p>
                            </div>
                        </div>
                    </Link>
                </div>

            )
        });
        const phonesWithBrand1 = this.getPhoneByBrand1().map((product, index) => {
            return (
                <div key={index} className="col-2 card-product">
                    <Link target="/" className="href" to={product._id}>
                        <div className=" ">
                            <img className="product-image" src={product.img}
                                alt="Card image cap" />
                            <div className="card-body text-center">
                                <p className="product-name">{product.name_phone}</p>
                                <p className="product-price" >{numeral(product.price - product.sale.price_sale).format('0,0')} <sup>đ</sup>                     </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
        if (item2.price_sale === 0) {

            return (
                <div className="bodydetail">
                    <div className="home">
                        <div className="p">
                            <p><Link className="href" to='/'>Home</Link> >
                       <Link className="href" to={"/" + (item.brand)}>{item.brand}</Link>  >
                      <span className="span"> {item.name_phone}</span>
                            </p>
                        </div>
                        <div className="grid-container">
                            <div>
                                <img src={item.img} alt={item.name_phone} />
                            </div>
                            <div>
                                <p className="nameproduct">{item.name_phone}</p>
                                <p className="price">{numeral(item.price).format('0,0')} <sup>đ</sup>
                                </p>
                                <div className="khuyenmai">
                                    <p className="p-km">KHUYẾN MÃI ÁP DỤNG</p>
                                    <i className="i-km fas fa-check-square"><span >Trả góp 0% trên giá giảm </span></i>
                                    <i className="i-km fas fa-check-square"><span>Giảm thêm 10% tối đa 500.000đ khi thanh toán qua VNPAY</span> </i>
                                </div>

                                {/*  thêm 1 sản phẩm vô cart trên database */}
                                <Link className="href" to='/cart' onClick={() => { this.handleAddItemToCart(item) }}>
                                    <div className="muangay">
                                        <p className="p1">MUA NGAY</p>
                                        <p className="p2">Thoải mái lựa chọn, xem hàng tại nhà</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className=" my-4">
                            <div>
                                <p className="sanphamlienquan">Sản phẩm liên quan</p>
                            </div>
                            <div id="multi-item-example" className=" slide carousel-multi-item" data-ride="carousel">

                                <div className="carousel-inner carousel-border" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row ">
                                            {phonesWithBrand}
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="row ">
                                            {phonesWithBrand1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="bodydetail">
                    <div className="home">
                        <div className="p">
                            <p><Link className="href" to='/'>Home</Link> >
                       <Link className="href" to={"/" + (item.brand)}>{item.brand}</Link>  >
                      <span className="span"> {item.name_phone}</span>
                            </p>
                        </div>
                        <div className="grid-container">
                            <div>
                                <img src={item.img} alt={item.name_phone} />
                            </div>
                            <div>
                                <p className="nameproduct">{item.name_phone}</p>
                                <p className="price">{numeral(item.price - item2.price_sale).format('0,0')} <sup>đ</sup>
                                    <span className="pricee">{numeral(item.price).format('0,0')} <sup>đ</sup> </span>
                                </p>
                                <div className="khuyenmai">
                                    <p className="p-km">KHUYẾN MÃI ÁP DỤNG</p>
                                    <i className="i-km fas fa-check-square"><span >Trả góp 0% trên giá giảm </span></i>
                                    <i className="i-km fas fa-check-square"><span>Giảm thêm 10% tối đa 500.000đ khi thanh toán qua VNPAY</span> </i>
                                </div>


                                {/*  thêm 1 sản phẩm vô cart trên database */}
                                <Link className="href" to='/cart' onClick={() => { this.handleAddItemToCart(item) }}>
                                    <div className="muangay">
                                        <p className="p1">MUA NGAY</p>
                                        <p className="p2">Thoải mái lựa chọn, xem hàng tại nhà</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className=" my-4">
                            <div>
                                <p className="sanphamlienquan">Sản phẩm liên quan</p>
                            </div>
                            <div id="multi-item-example" className=" slide carousel-multi-item " data-ride="carousel">

                                {/* <div className="carousel-indicators">
                                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                                </div> */}
                                <div className="carousel-inner carousel-border" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {phonesWithBrand}
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="row ">
                                            {phonesWithBrand1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default connect(null, null)(ProductDetail);
