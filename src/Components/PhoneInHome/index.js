import React from 'react';
import RenderPhone from '../RenderPhone/index';
import './phoneInHome.scss';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

// import phone from '../AllPhone/phone.json';
// npm i axios
import axios from 'axios';
// import PhoneSale from '../PhoneSale/PhoneSale';

//khởi tạo state phone là một mãng trống
class PhoneInHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        }
    }
    // đỗ dử liệu lấy từ API vào biến đã khởi tạo
    componentDidMount() {
        axios.get(`http://localhost:7000/api/phones`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)

                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    // render dữ liệu đã lấy ra giao diện
    render() {

        const elementsNew = this.state.phones.map((product,index) => {
            if (product.NB === true) {
                return (
                    <RenderPhone
                        key={index}
                        _id={product._id}
                        name_phone={product.name_phone}
                        category={product.name_category}
                        price={product.price}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        });
        // const elementsSale =this.state.phones.map((product) => {
        //     if (product.Sale === true) {
        //         return (
        //             <PhoneSale
        //                 key={product.id}
        //                 name_phone={product.name_phone}
        //                 category={product.name_category}
        //                 price={product.price}
        //                 discount={product.discount}
        //                 img={product.img}
        //                 description={product.description}
        //             />
        //         )
        //     }
        // });

        return (
            <div>
                <div className="bodyphoneinhome ">
                    <div className=" text-center dienthoaimoinhat">
                        <h4 className="">ĐIỆN THOẠI MỚI NHẤT</h4>
                        {elementsNew}
                    </div>
                </div>
                <div className="dienthoaisale">
                    <div className=" text-center ">
                        <Link to="products/5db1823a7627db2ce419b59d">
                            <div className="itemsale13">
                                <p className="namephone13" >Samsung Galaxy Note 10+ <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <p className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//note-10plus.jpg" />
                            </div>
                        </Link>
                        <Link to="products/5db182437627db2ce419b59e">
                            <div className="itemsale2">
                                <p className="namephone2" >Samsung Galazy Note 9 <span >Bán chạy</span> </p>
                                <p className="price2">
                                    {numeral(16990000).format('0,0')} <sup> đ</sup>
                                    <p className="price22"> {numeral(22990000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ss-a70.jpg" />
                            </div>
                        </Link>
                        <Link to="products/5db182797627db2ce419b5a0">
                            <div className="itemsale13">
                                <p className="namephone13" >Oppo Reno 10x Zoom Edition <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <p className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//oppo-a9-2020.png" />
                            </div>
                        </Link>
                        <Link to="products/5db182277627db2ce419b59b">
                            <div className="itemsale13">
                                <p className="namephone13" >IPhone 7 Plus 32GB <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <p className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-7-plus-2.jpg" />
                            </div>
                        </Link>
                        <Link to="products/5db182ae7627db2ce419b5a5">
                            <div className="itemsale2">
                                <p className="namephone2" >Xiaomi Mi 9T <span >Bán chạy</span> </p>
                                <p className="price2">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <p className="price22"> {numeral(26900000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//vivo-y91c.png" />
                            </div>
                        </Link>
                        <Link to="products/5db1821c7627db2ce419b59a">
                            <div className="itemsale13">
                                <p className="namephone13" >iPhone Xs Max 256GB <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <p className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </p>
                                </p>
                                <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-8-plus.jpg" />
                            </div>
                        </Link>
                        {/* {elementsSale} */}
                    </div>
                </div>

            </div>
        )
    }
}
export default PhoneInHome;