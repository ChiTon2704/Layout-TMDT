import React from 'react';
import RenderPhone from '../RenderPhone/index';
import './phoneInHome.scss';
import numeral from 'numeral';


import phone from '../AllPhone/phone.json';
// npm i axios
import axios from 'axios';
import PhoneSale from '../PhoneSale/PhoneSale';

//khởi tạo state phone là một mãng trống
class PhoneInHome extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         phones: []
    //     }
    // }
    // // đỗ dử liệu lấy từ API vào biến đã khởi tạo
    // componentDidMount() {
    //     axios.get('https://sour-dentist.glitch.me/api/getPhones2')// địa chỉ AIP
    //         .then((result) => {
    //             console.log(result.data)

    //             this.setState(() => ({
    //                 phones: result.data
    //             }))
    //         })
    // }
    // render dữ liệu đã lấy ra giao diện
    render() {

        const elementsNB =phone.map((product) => {
            if (product.NB === true) {
                return (
                    <RenderPhone
                        key={product.id}
                        name_phone={product.name_phone}
                        category={product.name_category}
                        price={product.price}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        });
        const elementsSale =phone.map((product) => {
            if (product.Sale === true) {
                return (
                    <PhoneSale
                        key={product.id}
                        name_phone={product.name_phone}
                        category={product.name_category}
                        price={product.price}
                        discount={product.discount}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        });

        return (
            <div>
                <div className="bodyphoneinhome ">
                    <div className=" text-center dienthoaimoinhat">
                        <h4 className="">ĐIỆN THOẠI MỚI NHẤT</h4>
                        {elementsNB}
                    </div>
                </div>
                <div className="dienthoaisale">
                    <div className=" text-center ">
                        <a href="/">
                            <div className="itemsale13">
                                <p className="namephone13" >Samsung Galaxy Note 10+ <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//note-10plus.jpg" />
                                </a>
                            </div>
                        </a>
                        <a href="/">
                            <div className="itemsale2">
                                <p className="namephone2" >Samsung Galazy A70 <span >Bán chạy</span> </p>
                                <p className="price2">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price22"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ss-a70.jpg" />
                                </a>
                            </div>
                        </a>
                        <a href="/">
                            <div className="itemsale13">
                                <p className="namephone13" >Oppo A9 2020 <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//oppo-a9-2020.png" />
                                </a>
                            </div>
                        </a>
                        <a href="/">
                            <div className="itemsale13">
                                <p className="namephone13" >IPhone 7 Plus 32GB <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-7-plus-2.jpg" />
                                </a>
                            </div>
                        </a>
                        <a href="/">
                            <div className="itemsale2">
                                <p className="namephone2" >Vivo V91C <span >Bán chạy</span> </p>
                                <p className="price2">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price22"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//vivo-y91c.png" />
                                </a>
                            </div>
                        </a>
                        <a href="/">
                            <div className="itemsale13">
                                <p className="namephone13" >IPhone 8 Plus 64GB <span >Bán chạy</span> </p>
                                <p className="price13">
                                    {numeral(23900000).format('0,0')} <sup> đ</sup>
                                    <a className="price213"> {numeral(26900000).format('0,0')}<sup>đ</sup> </a>
                                </p>

                                <a target="_blank" href="#" >
                                    <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//ip-8-plus.jpg" />
                                </a>
                            </div>
                        </a>
                        {/* {elementsSale} */}
                    </div>
                </div>

            </div>
        )
    }
}
export default PhoneInHome;