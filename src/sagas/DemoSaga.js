/**
* File saga su dung de tuong tac voi Backend (noi luu tru du lieu goc)
* Va tra ve du lieu cho Reducer khi co action chuyen toi
* Luong di la: Container => Saga(dang o day) => Reducer => Container
*/
// Nhap cac ham tu thu vien saga de su dung
import { put, takeEvery } from 'redux-saga/effects'
// Nhap cac file API de goi qua Backend
import getStudentAPI from '../apis/getStudents'
import updateStudentAPI from '../apis/updateStudents'
// Nhap type cua cac action tu file constants
// Vi file constants export ra 1 object chua nhieu bien
// nen ta su dung cu phap import * as types de dua het
// cac bien trong file constants vao bien types
import * as types from '../constants'
// Ham se duoc goi khi nhan duoc action GET_STUDENT_REQUEST
function* getStudents() {
    try {
        // Goi API
        const response = yield getStudentAPI();
        // Goi API thanh cong
        // => Ban action SUCCESS cho reducer kem theo du lieu
        // Du lieu tra ve cua API duoc dua vao bien response
        // Sau do lai duoc chuyen vao payload cua action de chuyen di
        // O saga thi ta su dung ham put de chuyen action di
        // Khac voi Container su dung redux, redux su dung ham dispatch
        // de chuyen action di
        yield put({
            type: types.GET_STUDENT_SUCCESS,
            payload: response
        })
    } catch {
        // Co loi trong qua trinh goi API
        // => Ban action FAILURE cho reducer
        yield put({
            type: types.GET_STUDENT_FAILURE,
        })
    }
}
function* updateStudents(action) {
    try {
        // Goi API
        yield updateStudentAPI(action.payload);
        // Goi API thanh cong
        // => Ban action SUCCESS cho reducer kem theo du lieu
        // Du lieu tra ve cua API duoc dua vao bien response
        // Sau do lai duoc chuyen vao payload cua action de chuyen di
        // O saga thi ta su dung ham put de chuyen action di
        // Khac voi Container su dung redux, redux su dung ham dispatch
        // de chuyen action di
        yield put({
            type: types.UPDATE_STUDENT_SUCCESS,
        })
        yield put({
            type: types.GET_STUDENT_REQUEST
        })
    } catch {
        // Co loi trong qua trinh goi API
        // => Ban action FAILURE cho reducer
        yield put({
            type: types.UPDATE_STUDENT_FAILURE,
        })
    }
}
// Tao ra 1 bien chua tat ca cac phan bat action
const StudentSaga = [
    // Ta su dung ham takeEvery de bat action tu Container
    // 2 tham so cua ham takeEvery la:
    // - tham so dau tien la type cua action
    // - tham so thu hai la ham ma sau khi bat duoc action no se goi vao
    // Nhu o day khi bat duoc action GET_STUDENT saga se goi
    // ham getStudents
    takeEvery(types.GET_STUDENT_REQUEST, getStudents),
    takeEvery(types.UPDATE_STUDENT_REQUEST, updateStudents)
];
// Xuat ra bien nay de dua vao file saga chung o duong dan /src/sagas/index.js
export default StudentSaga;