import React from 'react';
import numeral from 'numeral';
// import phone from './phone.json';
import './allPhone.scss';
import { Link } from 'react-router-dom';
// import Product from '../Phone/Phone';
import axios from 'axios';

class AllPhone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: []
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:7000/api/phone/getallphones`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    render() {
       
        const elementsallPhone = this.state.phones.map((product, index) => {
            if (product.sale.price_sale === 0) {
                return (
                    <div className="galleryall" key={index}>
                        <Link className="href" to={'products/' + product._id}>

                            <img className="imgall" src={product.img} alt="Cinque Terre" />

                            <p className="tragop">Trả góp 0%</p>
                            <div className="desc">
                                <div className="aname">
                                    <p className="">{product.name_phone}</p>
                                </div>
                                <span className="pall">
                                    {numeral(product.price - product.sale.price_sale).format('0,0')} <sup> đ</sup>
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            }
            else {
                return (
                    <div className="galleryall" key={index}>

                        <Link className="href" to={'products/' + product._id}>
                            <img className="imgall" src={product.img} alt="Cinque Terre" />
                            <p className="giamgia">GIẢM {numeral(product.sale.price_sale ).format('0,0')}<sup> đ  </sup> </p>
                            <div className="desc">
                                <div className="aname">
                                    <p className="">{product.name_phone}</p>
                                </div>
                                <p className="pall">
                                    {numeral(product.price - product.sale.price_sale).format('0,0')} <sup> đ  </sup>
                                    <span className="aall"> {numeral(product.price).format('0,0')}<sup>đ</sup> </span>
                                </p>
                            </div>
                        </Link>
                    </div>
                )
            }
        });
        return (
            <div className='AllPhoneComponent'>
                <div className="heightphone">
                    <div >
                        {elementsallPhone}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllPhone;
