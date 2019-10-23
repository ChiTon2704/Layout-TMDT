import React, { Component } from 'react';
import Search from '../Components/Search';
import NavTypePhone from '../Components/NavTypePhone';
import PageHuawei from '../Components/PageHuawei';
export default class IPhone extends Component {
    render() {
        return (
            <div>
                <Search />
                <NavTypePhone/>
                <PageHuawei/>
            </div>
        )
    }
}
