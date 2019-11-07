import React from 'react';
import '../Search/index.scss';
import { Link } from 'react-router-dom';
class Search extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         numCart: this.props.soluong
    //     }
    // }
    render() {
        return (
            <div className="search_bar">
                <div className="row ">
                    {/* logo */}
                    <div className="col-1  ">
                    </div>
                    {/* search */}
                    <div className="col-5 search">
                        <form action="">
                            <div className="p-1 bg-light rounded   shadow-sm mb-4 ">
                                <div className="input-group ">
                                    <input type="search" placeholder="Bạn cần tìm sản phẩm nào.." aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Account */}
                    <div className="col-3  text-center" >
                        <div className="account vertical-center ">
                            {/* <i className=' fas fa-user-alt'></i> */}
                            {/* <a className="tk">Tài khoản</a> */}
                        </div>
                    </div>
                    {/* cart */}
                    <div className="col-2 " >
                        <Link className="href" to='/cart'>
                            <span className="cartspan vertical-center">
                                <i className="cart fas fa-shopping-cart "></i>
                                <i className="">Giỏ hàng()</i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;