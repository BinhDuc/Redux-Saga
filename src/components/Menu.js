import React, { Component } from 'react'
import '../styles/demo.css'
import avata from '../styles/avata.jpg'
import '../css/animate.css'
// Icomoon Icon Fonts
import '../css/icomoon.css'
// Bootstrap
import '../css/bootstrap.css'
// Flexslider
import '../css/flexslider.css'

// Owl Carousel 
import '../css/owl.carousel.min.css'
import '../css/owl.theme.default.min.css'
//Theme style
import '../css/style.css'

//Flaticons
// import '../fonts/flaticon/font/flaticon.css'
class Menu extends Component {
    render() {
        return (
            <nav className="w3-sidebar w3-collapse w3-orange w3-animate-left my-nav w3-center" id="mySidebar">
                <br></br>
                {/* <div class="w3-container">
                    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                        <i class="fa fa-remove"></i>
                    </a>
                    <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round">
                        <h4><b>PORTFOLIO</b></h4>
                        <p class="w3-text-grey">Template by W3.CSS</p>
                </div> */}
                <div className="w3-container">
                    <a href='/' onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                        <i class="fa fa-remove"></i>
                    </a>
                    <img src={avata} alt="" className="w3-round w3-card-4 avata" />
                    <h4><b>Nguyễn Bình Đức</b></h4>
                    <p>Student & FrontEnd Developer</p>

                </div>
                <div className="w3-bar-block w3-center">
                    <a href="#portfolio" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal btn-links">ABOUT</a>
                    <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">Experience</a>
                    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">Education</a>
                    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">Skills</a>
                    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">Projects</a>
                    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">Interests</a>
                    <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding btn-links">The end</a>
                </div>
                <div className="w3-panel w3-large ">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity social-links"></i>
                    <i className="fa fa-snapchat w3-hover-opacity social-links"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity social-links"></i>
                    <i className="fa fa-twitter w3-hover-opacity social-links"></i>
                    <i className="fa fa-linkedin w3-hover-opacity social-links"></i>
                </div>
            </nav>
        )
    }
}
export default Menu