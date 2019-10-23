import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import PageXiaomi from '../Components/PageXiaomi';
export default class IPhone extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <PageXiaomi/>
            </div>
        )
    }
}
