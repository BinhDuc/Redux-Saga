// De su dung component cua React ta can
// import tu thu vien
import React, { Component } from 'react'
// De chinh giao dien cho component tu cac file css
// ta can tao file css va import vao file nay
// import '../styles/demo.css'
// Animate.css
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
import '../fonts/flaticon/font/flaticon.css'
// Import cac file component khac
import Student from './Student'
class DemoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            age: '',
            score: ''
        }
    }
    render() {
        // Du lieu tu Container chuyen qua se duoc lay ra
        // Va dua vao component con (Student) duoc dinh nghia o ben tren
        // Du lieu tu students la 1 tap hop cac doi tuong
        // thong qua ham map de tao ra nhieu the <Student />
        // Cac the nay duoc gan vao bien dataTable
        let dataTable = this.props.students.map((student, idx) => (
            <Student key={idx} {...this.props} item={student}
                onClickItem={(data) => this.setState(data)} />
        )
        )
        return (
            <div className="wrap-demo-component w3-gray ">
                <h1>Danh sách học viên</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Mã số</th>
                            <th>Họ tên</th>
                            <th>Tuổi</th>
                            <th>Điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*
Bien dataTable dang chua cac the <Student />
duoc hien thi len giao dien su dung cu phap JSX
{ten_bien}
*/}
                        {dataTable}
                    </tbody>
                </table>
                <p>{this.state.id}</p>

                <input type="text" value={this.state.name} className="form-control" onChange={(e) => this.setState({ name: e.target.value })} />
                <input type="text" value={this.state.age} className="form-control" onChange={(e) => this.setState({ age: e.target.value })} />
                <input type="text" value={this.state.score} className="form-control" onChange={(e) => this.setState({ score: e.target.value })} />
                <button onClick={() => this.props.updateStudents(this.state)} >Update Student</button>
            </div>
        )
    }
}
// Vi ca 2 component Student, AddNewStudentForm
// duoc tap hop vao component DemoComponent nen
// ta chi can xuat ra component DemoComponent
// de nhap vao Container
export default DemoComponent;