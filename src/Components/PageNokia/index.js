import React from 'react';
import RenderPagePhone from '../RenderPagePhone';

import phone from '../AllPhone/phone.json';
// npm i axios
import axios from 'axios';

//khởi tạo state phone là một mãng trống
class PhoneInHome extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         phones: []
    //     }
    // }
    // // đỗ dử liệu lấy từ API vào biến đã khởi tạo
    // componentDidMount() {
    //     axios.get('https://sour-dentist.glitch.me/api/getPhones2')// địa chỉ AIP
    //         .then((result) => {
    //             console.log(result.data)

    //             this.setState(() => ({
    //                 phones: result.data
    //             }))
    //         })
    // }
    // render dữ liệu đã lấy ra giao diện
    render() {
        const elementsIPhone =phone.map((product) => {
            if (product.category === "Nokia") {
                return (
                    <RenderPagePhone
                    key={product.id}
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
                    <a>
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotioncategory/nokia_cate_3_trieu_1710.png" />
                    </a>
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