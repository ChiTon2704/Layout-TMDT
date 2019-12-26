import React from 'react';
import '../Search/index.scss';
import { Link } from 'react-router-dom';
import AutoCompleteText from './AutoCompleteText';
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
                                <AutoCompleteText />
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