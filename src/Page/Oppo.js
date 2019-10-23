import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import PageOppo from '../Components/PageOppo';
export default class IPhone extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <PageOppo/>
            </div>
        )
    }
}
