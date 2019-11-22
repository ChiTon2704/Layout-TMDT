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
        axios.post(`http://localhost:7000/api/phone/getallphones`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)

                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    // render dữ liệu đã lấy ra giao diện
    render() {

        const elementsNew = this.state.phones.map((product, index) => {
            if (product.is_new === true) {
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
                <div className="saleeeee">
                    <Link to="/sale"  > <img src="https://cdn.tgdd.vn/2019/11/banner/1200-75-1200x75-(1).png" alt="giam iga" /> </Link >
                </div>
                <div className="bodyphoneinhome ">
                    <div className=" text-center dienthoaimoinhat">
                        <h4 className="">ĐIỆN THOẠI DÀNH CHO  BẠN</h4>
                        {elementsNew}
                    </div>
                </div>
                <div className="">
                    <div className=" text-center ">
                        <div className="row dienthoaisale">
                            <Link className="href" to="products/5db1823a7627db2ce419b59d">
                                <div className="itemsale13">
                                    <p className="namephone13" >Samsung Galaxy Note 10+  </p>
                                    <p className="price13">
                                        {numeral(26900000).format('0,0')} <sup> đ</sup>

                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//note-10plus.jpg" alt="phone" />
                                </div>
                            </Link>
                            <Link className="href" to="products/5db182437627db2ce419b59e">
                                <div className="itemsale2">
                                    <p className="namephone2" >Samsung Galazy Note 9  </p>
                                    {/* <span >Bán chạy</span> */}
                                    <p className="price2">
                                        {numeral(22990000).format('0,0')} <sup> đ</sup>
                                        {/* <p className="price22"> {numeral(22990000).format('0,0')}<sup>đ</sup> </p> */}
                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ss-a70.jpg" alt="phone" />
                                </div>
                            </Link>
                            <Link className="href" to="products/5db182797627db2ce419b5a0">
                                <div className="itemsale13">
                                    <p className="namephone13" >Oppo Reno 10x Zoom Edition  </p>
                                    <p className="price13">
                                        {numeral(17990000).format('0,0')} <sup> đ</sup>
                                        <p className="price213"> {numeral(20990000).format('0,0')}<sup>đ</sup> </p>
                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//oppo-a9-2020.png" alt="phone" />
                                </div>
                            </Link>
                        </div>
                        <div className="dienthoaisale row">
                            <Link className="href" to="products/5dbae388683c4b1b3c2b3a93">
                                <div className="itemsale13">
                                    <p className="namephone13" >IPhone 7 Plus 32GB  </p>
                                    <p className="price13">
                                        {numeral(11990000).format('0,0')} <sup> đ</sup>
                                        <p className="price213"> {numeral(12990000).format('0,0')}<sup>đ</sup> </p>
                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-7-plus-2.jpg" alt="phone" />
                                </div>
                            </Link>
                            <Link className="href" to="products/5db182ae7627db2ce419b5a5">
                                <div className="itemsale2">
                                    <p className="namephone2" >Xiaomi Mi 9T  </p>
                                    <p className="price2">
                                        {numeral(7990000).format('0,0')} <sup> đ</sup>

                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//vivo-y91c.png" alt="phone" />
                                </div>
                            </Link>
                            <Link className="href" to="products/5db1821c7627db2ce419b59a">
                                <div className="itemsale13">
                                    <p className="namephone13" >iPhone Xs Max 256GB  </p>
                                    <p className="price13">
                                        {numeral(35990000).format('0,0')} <sup> đ</sup>
                                        {/* <p className="price213"> {numeral(35990000).format('0,0')}<sup>đ</sup> </p> */}
                                    </p>
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-8-plus.jpg" alt="phone" />
                                </div>
                            </Link>
                        </div>


                        {/* {elementsSale} */}
                    </div>
                </div>

            </div>
        )
    }
}
export default PhoneInHome;