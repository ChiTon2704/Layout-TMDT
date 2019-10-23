import React, { Component } from 'react';
import Search from '../Components/Search';
import AllPhone from '../Components/AllPhone/AllPhone';
import NavTypePhone from '../Components/NavTypePhone';
export default class Products extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <AllPhone />
            </div>
        )
    }
}
