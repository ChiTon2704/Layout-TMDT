import React from 'react';
import {NavLink} from 'react-router-dom';

class NavTypePhone extends React.Component {
    render() {
        return (
            <div className="body AllPhoneComponent">
                <div className="allphone-img text-center">
                    <NavLink to="/iphone"><img className="a" src="https://cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg" alt="phone"/></NavLink>
                    <NavLink to="/samsung"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" alt="phone"/></NavLink>
                    <NavLink to="/oppo"><img className="a" src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_57.jpg" alt="phone"/></NavLink>
                    <NavLink to="/xiaomi"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_31.png" alt="phone"/></NavLink>
                    <NavLink to="/huawei"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" alt="phone"/></NavLink>
                    <NavLink to="/nokia"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" alt="phone"/></NavLink>
                </div>
            </div>
        )
    }
}
export default NavTypePhone;