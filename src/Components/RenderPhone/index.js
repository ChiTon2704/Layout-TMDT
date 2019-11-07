import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class RenderPhone extends React.Component {
    onAddToCart() {
        Swal.fire({
            position: 'middle',
            type: 'success',
            title: 'Add to cart success !',
            showConfirmButton: false,
            timer: 1500
        })
    }
    render() {
        return (
            <div className="gallery">
                <Link className="href" to={'products/' + this.props._id}>
                    <img src={this.props.img} alt="Cinque Terre" />
                    <div className="desc">
                        <div className="p">
                            <p>{this.props.name_phone}</p>
                        </div>
                        <p className="h6">{numeral(this.props.price).format('0,0')} VNĐ </p>
                    </div>

                </Link>
                <div className="muangay text-center">
                    <a href="/" className="a" onClick={() => this.onAddToCart()}>MUA NGAY</a>
                </div>
            </div>
        )
    }
}
export default RenderPhone;