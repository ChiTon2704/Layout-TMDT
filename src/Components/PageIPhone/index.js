import React from 'react';
import RenderPagePhone from '../RenderPagePhone';
import './PageIPhone.scss'

// import phone from '../AllPhone/phone.json';
// npm i axios
import axios from 'axios';

//khởi tạo state phone là một mãng trống
class PhoneInHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        }
    }
    // đỗ dử liệu lấy từ API vào biến đã khởi tạo
    componentDidMount() {
        axios.get(`http://localhost:7000/api/phones/iphone`)// địa chỉ AIP
            .then((result) => {
                console.log(result.data)

                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    // render dữ liệu đã lấy ra giao diện
    render() {
        const elementsIPhone =this.state.phones.map((product,index) => {
            if (product.category === "Iphone") {
                return (
                    <RenderPagePhone
                    _id={product._id}
                    key={index}
                    name_phone={product.name_phone}
                    category={product.name_category}
                    price={product.price}
                    discount={product.discount}
                    img={product.img}
                    description={product.description}
                    />
                )
            }
        });
        return (
            <div className='PageIPhoneComponent'>
                <div className="banner">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotioncategory/cate_iphone_509.png"/>
                </div>
                <div className="heightphone">
                    <div >
                        {elementsIPhone}
                    </div>
                </div>
            </div>
        )
    }
}
export default PhoneInHome;