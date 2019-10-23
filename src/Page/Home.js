import React, { Component } from 'react';
import Search from '../Components/Search';
import Carousel from '../Components/Carousel';
import PhoneInHome from '../Components/PhoneInHome';
// import Body2 from '../Components/Body2';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Search />
                <Carousel />
                {/* <Body2 /> */}
                <PhoneInHome/>
            </div>
        )
    }
}
