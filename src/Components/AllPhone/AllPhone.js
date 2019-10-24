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
        axios.get(`http://localhost:7000/api/phones`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    render() {
        const elementsallPhone = this.state.phones.map((product, index) => {
            if (product.discount === 0) {
                return (
                    <div className="galleryall" key={index}>
                        <Link className="href" to={'products/' + product._id}>

                            <img className="imgall" src={product.img} alt="Cinque Terre" />

                            <p className="tragop">Trả góp 0%</p>
                            <div className="desc">
                                <div className="aname">
                                    <p className="">{product.name_phone}</p>
                                </div>
                                <p className="pall">
                                    {numeral(product.price - product.discount).format('0,0')} <sup> đ</sup>
                                </p>
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
                            <p className="giamgia">GIẢM {numeral(product.discount).format('0,0')}<sup> đ  </sup> </p>
                            <div className="desc">
                                <div className="aname">
                                    <p className="">{product.name_phone}</p>
                                </div>
                                <p className="pall">
                                    {numeral(product.price - product.discount).format('0,0')} <sup> đ  </sup>
                                    <p className="aall"> {numeral(product.price).format('0,0')}<sup>đ</sup> </p>
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
