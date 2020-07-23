import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
export default class AutoCompleteText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: [],
            suggestions: []
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:7000/api/phone/getallphones`)// địa chỉ AIP
            .then((result) => {
                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, `i`);
            suggestions = this.state.phones.sort().filter(v => regex.test(v.name_phone));

        }
        this.setState(() => ({ suggestions }))
    }
    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="searchlist">
                {suggestions.map((item) =>
                    <div className="itemsearch">
                        <Link className="href" to={'products/' + item._id}>
                            <div className="row  " >
                                <div className="col-3">
                                    <img src={item.img} />
                                </div>
                                <div className="col-9 name-price">
                                    <span>  {item.name_phone}</span>
                                    <span className="price" > {numeral(item.price).format('0,0')} đ </span>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </ul>

        );
    }

    render() {
        return (
            <div className="input-group " >
                <input onChange={this.onTextChanged} type="text" placeholder="Bạn cần tìm sản phẩm nào.." aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                <div className="input-group-append">
                    <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                </div>
                {this.renderSuggestions()}

            </div>
        )
    }
}
