import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
class RenderPagePhone extends React.Component {
    render() {
        if (this.props.discount === 0) {
            return (
                <div className="galleryall text-center" >
                    <Link className="href" to={'products/' + this.props._id}>
                        <img className="imgall" src={this.props.img} alt="Cinque Terre" />
                        <p className="tragop">Trả góp 0% </p>
                        <div className="desc">
                            <div className="aname">
                                <p className="">{this.props.name_phone}</p>
                            </div>
                            <p className="pall">
                                {numeral(this.props.price - this.props.discount).format('0,0')} <sup> đ</sup>
                            </p>
                        </div>
                        <div className="description">
                            {/* <a>Trả góp theo thẻ tín dụng</a> */}
                            <hr />
                            <span>Màn hình: 6.4", Quad HD+ (2K+)</span>
                            <br />
                            <span>Camera: Chính 12 MP &amp; Phụ 12 MP, 16 MP, Selfie: Chính 10 MP &amp; Phụ 8 MP</span>
                            <br />
                            <span>HĐH: Android 9.0 (Pie)</span>
                            <br />
                            <span>CPU: Exynos 9820 8 nhân 64-bit</span>
                            <br />
                            <span>RAM: 8 GB, ROM: 512 GB</span>
                        </div>
                        <div>
                            <button type="button" className="btnn">Mua</button>
                        </div>
                    </Link>

                </div>
            )
        }
        else {
            return (
                <div className="galleryall text-center" >
                    <Link className="href" to={'products/' + this.props._id}>
                        <img className="imgall" src={this.props.img} alt="Cinque Terre" />
                        <p className="giamgia">GIẢM {numeral(this.props.discount).format('0,0')} VNĐ </p>
                        <div className="desc">
                            <div className="aname">
                                <p className="">{this.props.name_phone}</p>
                            </div>
                            <p className="pall">
                                {numeral(this.props.price - this.props.discount).format('0,0')} <sup> đ</sup>
                                <a href='/' className="aall"> {numeral(this.props.price).format('0,0')}<sup>đ</sup> </a>
                            </p>
                        </div>
                        <div className="description">
                            {/* <a>Trả góp theo thẻ tín dụng</a> */}
                            <hr />
                            <span>Màn hình: 6.4", Quad HD+ (2K+)</span>
                            <br />
                            <span>Camera: Chính 12 MP &amp; Phụ 12 MP, 16 MP, Selfie: Chính 10 MP &amp; Phụ 8 MP</span>
                            <br />
                            <span>HĐH: Android 9.0 (Pie)</span>
                            <br />
                            <span>CPU: Exynos 9820 8 nhân 64-bit</span>
                            <br />
                            <span>RAM: 8 GB, ROM: 512 GB</span>
                        </div>
                        <div>
                            <button href="/dgdgd" type="button" className="btnn">Mua</button>
                        </div>
                    </Link>
                </div>
            )
        }
    }
}
export default RenderPagePhone;