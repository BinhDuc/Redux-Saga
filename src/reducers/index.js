/**
* File reducer goc tap hop cac file reducer con
*/
// Nhap ham combineReducers tu thu vien redux
import { combineReducers } from 'redux'
// Nhap cac file reducer con
import DemoReducer from './DemoReducer'
// Su dung ham combineReducers de gop cac reducer con lai
// Ham combineReducers nhan vao 1 doi tuong
// Doi tuong nay bao gom nhieu cap key-value. Trong do:
// - key: ten cua reducer nay, ham mapStateToProps o
// container se phai truy cap vao key nay truoc khi muon
// truy cap du lieu cua reducer do
// - value: du lieu, phan xu ly cua reducer duoc nhap
// tu cac file reducer con
// VD: demo: DemoReducer
// demo o day la key, DemoReducer la value
const rootReducer = combineReducers({
    demo: DemoReducer
});
export default rootReducer;