import React from 'react';
import RenderPagePhone from '../RenderPagePhone';
import axios from 'axios';
import './index.scss';

//khởi tạo state phone là một mãng trống
class PhoneSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        }
    }
    // đỗ dử liệu lấy từ API vào biến đã khởi tạo
    componentDidMount() {
        //API lay het san pham
        axios.post(`http://localhost:7000/api/phone/getallphones`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    // render dữ liệu đã lấy ra giao diện

    // const elementsIPhone = this.state.phone.map((product) =>

    render() {

        const elementsIPhone = this.state.phones.map((product, index) => {
            if (product.is_sale === true) {
                return (
                    <RenderPagePhone
                        _id={product._id}
                        key={index}
                        name_phone={product.name_phone}
                        // category={product.name_category}
                        price={product.price}
                        sale={product.sale}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        });
        return (
            <div className='PageIPhoneComponent phone-sale'>
                {/* <div className="banner">
                    <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotioncategory/cate_huawei_810.png"  alt='Huawei'/>
                </div> */}
                <div className="heightphone-sale">
                    <div >
                        {elementsIPhone}
                    </div>
                </div>
            </div>
        )
    }
}
export default PhoneSale;