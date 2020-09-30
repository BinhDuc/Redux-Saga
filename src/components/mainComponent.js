// De su dung component cua React ta can
// import tu thu vien
import React, { Component } from 'react'
// De chinh giao dien cho component tu cac file css
// ta can tao file css va import vao file nay
import '../styles/demo.css'
// Import cac file component khac
import Menu from './Menu'
class mainComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle"
                        data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                    <Menu></Menu>
                </div>
            </div>
        )
    }
}
export default mainComponent