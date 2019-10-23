import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import PageIPhone from '../Components/PageIPhone';
export default class IPhone extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <PageIPhone/>
            </div>
        )
    }
}
