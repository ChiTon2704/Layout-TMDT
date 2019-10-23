import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import PageSamSung from '../Components/PageSamsung';
export default class IPhone extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <PageSamSung/>
            </div>
        )
    }
}
