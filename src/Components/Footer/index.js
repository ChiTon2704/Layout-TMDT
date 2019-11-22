import React from 'react';
import '../Footer/index.scss';
import hnct from './hnct.png';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-5 about ">
                            <h5>More About Company</h5>
                            <p> đây là cửa hàng điện thoại chuyên cung cấp những dòng điện thoại mới </p>
                        </div>
                        <div className="col-4 about member ">
                            <h5>Member</h5>
                            <p>
                                <li>Hoang Nam</li>
                                <li>Chi Ton</li>
                            </p>
                        </div>
                        <div className="col-3 about">
                            <h5>Address</h5>
                            <p>
                                <span>155 Su Van Hanh</span>
                                <br/>
                                <span>District 10</span>
                                <br/>
                                <span>Ho Chi Minh City, Vietnam</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row follow">
                        <div className="col-3 ">
                            <h5>Follow Us</h5>
                            <div>
                                <ul className="social-network social-circle">
                                    {/* <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li> */}
                                    <li><a href="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    {/* <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li> */}
                                    <li><a href="/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 text-center" >
                            <h6>HN_CT Company</h6>
                            <a href="/" className="">
                                <img className="img " src={hnct} alt="phone"/>
                            </a>
                        </div>
                        <div className="col ">
                            <h5>Contact</h5>
                             <span>Phone : 0963 878 734 </span> 
                             <br/>
                             <span>Email : ngoko12a6@gmail.com</span>
                           
                        </div>

                    </div>

                </div>
                <div className="copyright">
                    <p>© 2019. HN - CT Company. All rights reserved | 0963 878 734</p>
                </div>
            </div>
        )
    }
}
export default Footer;