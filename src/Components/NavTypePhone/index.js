import React from 'react';

class NavTypePhone extends React.Component {
    render() {
        return (
            <div className="body AllPhoneComponent">
                <div className="allphone-img text-center">
                    <a href="/iphone"><img className="a" src="https://cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg" /></a>
                    <a href="/samsung"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" /></a>
                    <a href="/oppo"><img className="a" src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_57.jpg" /></a>
                    <a href="/xiaomi"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_31.png" /></a>
                    <a href="/huawei"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" /></a>
                    <a href="/nokia"><img className="a" src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" /></a>
                </div>
            </div>
        )
    }
}
export default NavTypePhone;