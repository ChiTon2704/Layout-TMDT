import React from 'react';
import numeral from 'numeral';

class RenderPagePhone extends React.Component {
    render() {
        if (this.props.discount === 0) {
            return (
                <div className="galleryall text-center" >
                    <a className="" target="_blank" href="#" >
                        <img className="imgall" src={this.props.img} alt="Cinque Terre" />
                    </a>
                    <p className="giamgia">Trả góp 0% </p>
                    <div className="desc">
                        <div className="aname">
                            <a classNam="">{this.props.name_phone}</a>
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
                </div>
            )
        }
        else
        {
            return (
                <div className="galleryall text-center" >
                    <a className="" target="_blank" href="#" >
                        <img className="imgall" src={this.props.img} alt="Cinque Terre" />
                    </a>
                    <p className="giamgia">GIẢM {numeral(this.props.discount).format('0,0')} VNĐ </p>
                    <div className="desc">
                        <div className="aname">
                            <a classNam="">{this.props.name_phone}</a>
                        </div>
                        <p className="pall">
                            {numeral(this.props.price - this.props.discount).format('0,0')} <sup> đ</sup>
                            <a className="aall"> {numeral(this.props.price).format('0,0')}<sup>đ</sup> </a>
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
                </div>
            )
        }
    }
}
export default RenderPagePhone;