import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

class RenderPhone extends React.Component {
    onAddToCart(text) {
        alert(text);
    }
    render() {
        return (
            <div className="gallery">
                <Link className="href"  to={'products/' + this.props._id}>
                    <img src={this.props.img} alt="Cinque Terre" />
                    <div className="desc">
                        <div className="p">
                            <p>{this.props.name_phone}</p>
                        </div>
                        <p className="h6">{numeral(this.props.price).format('0,0')} VNĐ </p>
                    </div>
                    <div className="muangay text-center">
                        <a href="/" className="a" onClick={() => this.onAddToCart('Đã thêm vào giỏ hàng')}>MUA NGAY</a>
                    </div>
                </Link>
            </div>
        )
    }
}
export default RenderPhone;