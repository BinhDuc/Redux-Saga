/*
File nay de dinh nghia ra cac action
Mot action la 1 object {}
De cho ro rang, ta thong nhat dinh nghia 1 action
gom 2 phan la
- type: ten cua action, su dung de saga, reducer phan biet cac action voi nhau
- payload: du lieu can chuyen sang reducer, saga (neu co)
*/
// Lay ra cac type cua action
// Vi file constants khong phai chi export default
// ma no export ra 1 doi tuong chua nhieu bien
// Nen ta co the su dung cu phap duoi
// import { ten_bien_thu_nhat, ten_bien_thu_2 } from 'duong_dan_file'
import *as types from "../constants"
/*
Ta cung co the import tat ca cac bien thong qua kieu
import * as types from "../constants"
Tuc la gom het cac bien trong file constants vao bien types
Sau do neu muon lay ra bien nao ta su dung cu phap
types.ten_bien_can_lay_ra
VD: types.GET_STUDENT_REQUEST
*/
// Dinh nghia cac ham
// Cac ham nay tra ve object chinh la cac action de cac
// component chuyen du lieu qua cho nhau
function getStudentsAction() {
    return {
        type: types.GET_STUDENT_REQUEST
    }
}
function updateStudentsAction(data) {
    return {
        type: types.UPDATE_STUDENT_REQUEST,
        payload: data
    }
}
export {
    getStudentsAction,
    updateStudentsAction
}
