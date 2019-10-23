import React from 'react';
import numeral from 'numeral';

class PhoneSale extends React.Component {
    onAddToCart(text) {
        alert(text);
    }
    render() {
        return (
            <a href="/">
                <div className="itemsale">
                    <p className="namephone" >{this.props.name_phone} <span >Bán chạy</span> </p>
                    <p className="price">
                        {numeral(this.props.price - this.props.discount).format('0,0')} <sup> đ</sup>
                        <a className="price2"> {numeral(this.props.price).format('0,0')}<sup>đ</sup> </a>
                    </p>

                    <a target="_blank" href="#" >
                        <img src="https://imgs.viettelstore.vn/images/Product/ProductImage//note-10plus.jpg" />
                    </a>
                </div>
            </a>

        )
    }
}
export default PhoneSale;