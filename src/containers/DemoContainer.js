/**
* File container la 1 React Component no
* se dinh nghia ra cac ham goi sang Saga thong qua mapDispatchToProps
* va nhan du lieu tu Reducer va chuyen xuong cho component thong qua
* mapStateToProps
*/
import React, { Component } from 'react';
// Nhap ham connect tu thu vien react-redux
import { connect } from 'react-redux';
// Nhap cac action duoc dinh nghia trong folder actions
import * as actions from '../actions/getStudentActions';
// Nhap file component
// import DemoComponent from '../components/DemoComponent'
import Menu from '../components/Menu'
// mapStateToProps la 1 ham
// ham nay thong qua connect se
// tra ve state chinh la du lieu tu reducer
// Co 2 cach khai bao ham (kieu moi va kieu cu)
// const ten_ham = (tham_so_thu_nhat) => { // than ham }
// function ten_ham (tham_so_thu_nhat) { // than_ham }
const mapStateToProps = (state) => {
    // Ta co the thong qua state de truy cap du lieu tu reducer
    // Cu phap state.demo.students
    // demo o day la bien tu file index cua reducer goc
    // tai duong dan src/reducers/index.js
    // students o day la bien nam trong file DemoReducer
    // ma ta muon truy cap
    return {
        // students: state.demo.students
        // Lay het cac du lieu trong DemoReducer
        ...state.demo
    }
}
// Khai bao kieu cu nhu sau:
// function mapStateToProps (state) {
// return {
// items: state.items.listItem
// }
// }
// mapDispatchToProps la 1 ham su dung de dinh nghia
// cac ham ma component thong qua cac ham do se goi toi
// saga de lien lac voi backend
// Ham nay nhan vao tham so dispatch
// dispatch su dung de ban di action toi saga, reducer (trong truong hop reducer can)
function mapDispatchToProps(dispatch) {
    return {
        initLoad: function () {
            const action = actions.getStudentsAction()
            dispatch(action)
        },
        updateStudents: function (data) {
            const action = actions.updateStudentsAction(data)
            dispatch(action)
        }
    }
}
class DemoContainer extends Component {
    // Day la ham dac biet nam trong lifecycle cua 1 React Component
    // Ham nay se duoc thiet lap mac dinh chay khi ham render chay
    // lan dau tien
    componentDidMount() {
        // Ta da dinh nghia ham initLoad o mapDispatchToProps
        // Ta biet no nam o props cua component nay thong qua ham connect
        // Vay muon goi no ra ta chi can goi bang cu phap this.props.ten_ham()
        // Luu y: ta can lay du lieu khi nguoi dung truy cap trang luon
        // nen ta se goi sang backend tai day
        // Khong giong nhu API them, nguoi dung phai thao tac roi bam
        // xac nhan thi ta moi gui sang backend
        this.props.initLoad()
    }
    render() {
        return (
            //             <div>
            //                 {/*
            // Nhap component lam con cua container
            // va chuyen tat ca cac props cua minh
            // (gom du lieu tu mapStateToProps, mapDispatchToProps)
            // xuong cho component thong qua cu phap
            // {...this.props}
            // */}             <Menu></Menu>
            //                 <DemoComponent {...this.props} />
            //             </div>
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
// Ham connect se dua du lieu tu mapStateToProps, mapDispatchToProps
// vao lam props cua DemoContainer
export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer)