import React from 'react';
// Nhap cac component can thiet tu thu
// vien react-router-dom (thu vien dieu huong)
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';
// Cac page duoc gom vao duong dan src/pages/index
// Nhap vao file nay thong qua bien page
// Truy cap toi cac page cu the bang cu phap page.Ten_page
import * as page from './pages';
// Tao ra 1 component dung de dieu huong khi nguoi dung
// go url tren ung dung
class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*
The Route dung de dieu huong bao gom may props nhu sau:
- exact: de bat duong dan chinh xac
- path: dinh nghia cac route
- component: component duoc chuyen den khi nguoi dung
danh vao dung path duoc quy dinh
VD: Duong dan '/' tuong trung cho trang chu se duoc
huong vao Homepage
Duong dan '/demo' se dua vao trang demo
*/}
                    <Route exact path='/' component={page.HomePage} />
                    <Route path='/demo' component={page.DemoPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
// Xuat component nay ra de dua vao component chinh cua ung dung
export default Routes;
