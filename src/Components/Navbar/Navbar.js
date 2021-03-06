import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/index.scss';
class Navbar extends React.Component {
    render() {
        return (
            <div className="nava">
                <nav className="navbar navbar-expand-sm bg-warning justify-content-center fixed-top">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <NavLink to='/' className='nav-link'>TRANG CHỦ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/introduce' className='nav-link'>GIỚI THIỆU</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className='nav-link'>SẢN PHẨM</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/news' className='nav-link'>TIN TỨC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className='nav-link'>LIÊN HỆ</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;
