import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import "../Components/ZDetailSCSS/detail.scss";
import Swal from 'sweetalert2';
import { connect } from 'react-redux'

class ProductDetail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         phone: {
    //             name_phone: '',
    //             brand: '',
    //             is_new: true,
    //             is_sale: true,
    //             sale: null,
    //             price: null,
    //             description: '',
    //             img: '',
    //             quantity:null
    //         }
    //     }
    // }
    // // thêm sản phẩm vô cart
    // addToCart = () => {
    //     Swal.fire({
    //         position: 'middle',
    //         type: 'success',
    //         title: 'Add to cart success !',
    //         showConfirmButton: false,
    //         timer: 1500
    //     })

    //     const newitem = {
    //         name_phone: this.state.phone.name_phone,
    //         brand: this.state.phone.brand,
    //         is_new: this.state.phone.is_new,
    //         is_sale: this.state.phone.is_sale,
    //         sale: this.state.phone.sale,
    //         price: this.state.phone.price,
    //         description: this.state.phone.description,
    //         img: this.state.phone.img,
    //         quantity:this.state.phone.quantity
    //     }
    //     axios.post('http://localhost:7000/api/phone/additemcart/5dbb249dd12c2006b0f834be', newitem)
    //         .then((result) => console.log(result))
    //         .catch((err) => console.log(err))
    // }
    handleAddItemToCart = (item) => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            item,
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
            phone: {}
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:7000/api/phone/getphone/${this.props.match.params.id}`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phone: result.data

                }))
            })
    }
    render() {
        let item = this.state.phone
        console.log(item)
        console.log(item.name_phone)
        // if (item.sale === 0) {
    
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
                            {/* onClick={this.addToCart} */}

                            {/*  thêm 1 sản phẩm vô cart trên database */}
                            <Link className="href" to='/cart' onClick={() => { this.handleAddItemToCart(item) }}>
                                <div className="muangay">
                                    <p className="p1">MUA NGAY</p>
                                    <p className="p2">Thoải mái lựa chọn, xem hàng tại nhà</p>
                                </div>
                            </Link>
                            <div className="row  muatragop">
                                <div className="muatragop1">
                                    <p className="p1">MUA TRẢ GÓP 0%</p>
                                    <p className="p2">Thủ tục đơn giản</p>
                                </div>
                                <div className="muatragop2">
                                    <p className="p1">TRẢ GÓP QUA THẺ</p>
                                    <p className="p2">Visa, Master, JCB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        // }
        // else {
        //     return (
        //         <div className="bodydetail">
        //             <div className="home">
        //                 <div className="p">
        //                     <p><Link className="href" to='/'>Home</Link> >
        //                <Link className="href" to={"/" + (item.brand)}>{item.brand}</Link>  >
        //               <span className="span"> {item.name_phone}</span>
        //                     </p>
        //                 </div>
        //                 <div className="grid-container">
        //                     <div>
        //                         <img src={item.img} alt={item.name_phone} />
        //                     </div>
        //                     <div>
        //                         <p className="nameproduct">{item.name_phone}</p>
        //                         <p className="price">{numeral(item.price - this.state.phone.sale).format('0,0')} <sup>đ</sup>
        //                             <span className="pricee">{numeral(item.price).format('0,0')} <sup>đ</sup> </span>
        //                         </p>
        //                         <div className="khuyenmai">
        //                             <p className="p-km">KHUYẾN MÃI ÁP DỤNG</p>
        //                             <i className="i-km fas fa-check-square"><span >Trả góp 0% trên giá giảm </span></i>
        //                             <i className="i-km fas fa-check-square"><span>Giảm thêm 10% tối đa 500.000đ khi thanh toán qua VNPAY</span> </i>
        //                         </div>


        //                         {/*  thêm 1 sản phẩm vô cart trên database */}
        //                         <Link className="href" to='/' onClick={() => { this.handleAddItemToCart(item) }}>
        //                             <div className="muangay">
        //                                 <p className="p1">MUA NGAY</p>
        //                                 <p className="p2">Thoải mái lựa chọn, xem hàng tại nhà</p>
        //                             </div>
        //                         </Link>
        //                         <div className="row  muatragop">
        //                             <div className="muatragop1">
        //                                 <p className="p1">MUA TRẢ GÓP 0%</p>
        //                                 <p className="p2">Thủ tục đơn giản</p>
        //                             </div>
        //                             <div className="muatragop2">
        //                                 <p className="p1">TRẢ GÓP QUA THẺ</p>
        //                                 <p className="p2">Visa, Master, JCB</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
    }
}
export default connect(null, null)(ProductDetail);
