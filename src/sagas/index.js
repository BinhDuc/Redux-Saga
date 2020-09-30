/**
* File nay su dung de gom nhom tat ca cac file saga khac
*/
// Nhap ham all tu thu vien saga su dung de ket noi cac saga
import { all } from 'redux-saga/effects'
// Nhap cac file saga con
// Vi cac file saga con su dung export default
// Nen ta chi can dat ten cho file ma ta import
// Cu phap: Ten_Bien from 'duong_dan_file'
import DemoSaga from './DemoSaga'
function* rootSaga() {
    // Su dung ham all de
    yield all([
        // Vi ta can gom nhom tat ca cac phan bat action cua saga
        // (ham takeEvery) nen ta phai lay het cac ham takeEvery
        // tu cac file saga con
        // Cu phap ...Ten_Bien de lay ra tat ca cac bien con tu
        // 1 mang (array) hoac 1 doi tuong (object)
        ...DemoSaga
    ]);
}
// Xuat ra saga tong de dua vao file index ngoai cung,
// nham muc dich setup Saga cho toan bo ung dung
export default rootSaga;