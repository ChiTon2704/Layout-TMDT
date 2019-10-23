import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Home from '../Page/Home';
import Products from '../Page/Products';
import IPhone from '../Page/IPhone';
import SamSung from '../Page/SamSung';
import Oppo from '../Page/Oppo';
import Xiaomi from '../Page/Xiaomi';
import Huawei from '../Page/Huawei';
import Nokia from '../Page/Nokia';
export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/' component={Home} exact={true} />
                        <Route path='/products' component={Products} />
                        <Route path='/iphone' component={IPhone}/>
                        <Route path='/samsung' component={SamSung}/>
                        <Route path='/oppo' component={Oppo}/>
                        <Route path='/xiaomi' component={Xiaomi}/>
                        <Route path='/huawei' component={Huawei}/>
                        <Route path='/nokia' component={Nokia}/>
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
