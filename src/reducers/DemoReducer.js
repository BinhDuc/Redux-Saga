/**
* File thiet lap cac phan xu ly va du lieu tra ve
* cua reducer.
* Du lieu cua reducer duoc tap hop vao 1 noi duoc
* goi la store.
* Store nay dong vai tro la noi trung gian, chiu
* trach nhiem chuyen du lieu giua cac component trong
* ung dung.
*/
// Nhap cac type cua action tu file constants
import { GET_STUDENT_SUCCESS } from "../constants";
// Khai bao du lieu mac dinh cua store
// Du lieu nay la 1 object {}
const DEFAULT_STATE = {
    // Tao ra 1 bien students la 1 mang (tap hop doi tuong)
    // Bien nay se su dung de luu tru thong tin tat ca hoc sinh
    // Du lieu tu Backend chuyen ve se thong qua bien nay dua ve component
    // Luong di la: Saga => Reducer(dang o day) => Container => Component
    students: [
        { id: 1, name: "Huy", score: 9, age: 18 },
        { id: 2, name: "Quang", score: 6, age: 20 },
    ]
}
// Bien state nay la du lieu cua reducer
// Khong giong state o ben component
// state o ben component la du lieu ton tai ben trong
// component do
export default (state = DEFAULT_STATE, action) => {
    // Dung cau lenh switch de kiem tra tung
    // type cua action
    // Ung voi moi action, cau lenh return se tra
    // ve du lieu de container thong qua ham mapStateToProps
    // lay duoc
    switch (action.type) {
        case GET_STUDENT_SUCCESS:
            // Cau lenh ...state su dung de copy cac
            // gia tri hien tai dang co trong reducer
            // Muc dich cua viec copy la de khong anh huong
            // den cac bien khac vi ta chi muon thay doi
            // gia tri cua bien students
            // Sau do ta ghi de len bien students
            // du lieu lay duoc tu Saga
            return {
                ...state,
                students: action.payload
            }
        default:
            return state;
    }
};