import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import "../Components/ZDetailSCSS/detail.scss";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: {
                name_phone: '',
                category: '',
                NB: true,
                sale: true,
                discount: null,
                price: null,
                description: '',
                img: ''
            }
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:7000/api/phone/${this.props.match.params.id}`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)
                this.setState(() => ({
                    phone: result.data
                }))
            })
    }
    render() {
        console.log(this.state.phone.name_phone)
        return (
            <div className="bodydetail">
                <div className="home">
                    <div className="p">
                        <Link className="href" to='/'>Home</Link>
                    </div>
                    <div className="grid-container">
                        <div>
                            <img src={this.state.phone.img} />
                        </div>
                        <div>
                            <p className="nameproduct">{this.state.phone.name_phone}</p>
                            <p className="price">{numeral(this.state.phone.price - this.state.phone.discount).format('0,0')} <sup>đ</sup>
                                <span className="pricee">{numeral(this.state.phone.price).format('0,0')} <sup>đ</sup> </span>
                            </p>
                            <div className="khuyenmai">
                                <p className="p-km">KHUYẾN MÃI ÁP DỤNG</p>
                                <i className="i-km fas fa-check-square"><span >Trả góp 0% trên giá giảm </span></i>
                                <i className="i-km fas fa-check-square"><span>Giảm thêm 10% tối đa 500.000đ khi thanh toán qua VNPAY</span> </i>
                            </div>
                            <div className="muangay">
                                <p className="p1">MUA NGAY</p>
                                <p className="p2">Thoải mái lựa chọn, xem hàng tại nhà</p>
                            </div>
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
    }
}
export default ProductDetail;
