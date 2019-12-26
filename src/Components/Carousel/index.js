import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
    render() {
        return (
            <div className="grid-container body">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <Link to="products/5dbae489683c4b1b3c2b3a94"> <img src="https://cdn.tgdd.vn/2019/10/banner/800-300-800x300-(2).png" alt="Los Angeles" width="100%" /></Link>
                        </div>
                        <div className="carousel-item">
                        <Link to="products/5db1823a7627db2ce419b59d">  <img src="https://cdn.tgdd.vn/2019/09/banner/thu-cu-note10-800-300-800x300-(2).png" alt="Chicago" width="100%" /></Link>
                        </div>
                        <div className="carousel-item">
                        <Link to="products/5db182797627db2ce419b5a0">   <img src="https://cdn.tgdd.vn/2019/09/banner/oppo-A9-800-300-800x300-(3).png" alt="New York" width="100%" /></Link>
                        </div>
                    </div>
                    <p className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </p>
                    <p className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </p>
                </div>
                <div className="QC-right">
                    <div >
                        <Link to="products/5db1829a7627db2ce419b5a3"><img src="https://cdn.tgdd.vn/2019/10/banner/A20s-398-110-398x110.png" alt="phone"/></Link>
                    </div>
                    <div >
                        <Link to="products/5dd22bacda77a309b4b930a3"><img src="https://cdn.tgdd.vn/2019/10/banner/Sticky-iPhone-398-110-398x110.png" alt="phone"/></Link>
                    </div>
                    <div >
                        <Link to="products/5db182437627db2ce419b59e"><img  src="https://imgs.viettelstore.vn/images/Advertises/tra-gop-homecredit-phai_27606051802102019.jpg" alt="phone"/></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Carousel;