import React from 'react';
import numeral from 'numeral';
import phone from './phone.json';
import './allPhone.scss';
// import Product from '../Phone/Phone';

class AllPhone extends React.Component {
    render() {
        const elementsallPhone = phone.map((product) => {
            if (product.discount === 0) {
                return (
                    <div className="galleryall">
                        <a target="_blank" href="#" >
                            <img className="imgall" src={product.img} alt="Cinque Terre" />
                        </a>
                        <p className="giamgia">Trả góp 0%</p>
                        <div className="desc">
                            <div className="aname">
                                <a classNam="">{product.name_phone}</a>
                            </div>
                            <p className="pall">
                                {numeral(product.price - product.discount).format('0,0')} <sup> đ</sup>
                            </p>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="galleryall">
                        <a target="_blank" href="#" >
                            <img className="imgall" src={product.img} alt="Cinque Terre" />
                        </a>
                        <p className="giamgia">GIẢM {numeral(product.discount).format('0,0')} VNĐ </p>
                        <div className="desc">
                            <div className="aname">
                                <a classNam="">{product.name_phone}</a>
                            </div>
                            <p className="pall">
                                {numeral(product.price - product.discount).format('0,0')} <sup> đ</sup>
                                <a className="aall"> {numeral(product.price).format('0,0')}<sup>đ</sup> </a>
                            </p>
                        </div>
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
