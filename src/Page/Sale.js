import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import Sale from '../Components/Sale';
export default class PhoneSale extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <Sale/>
            </div>
        )
    }
}
