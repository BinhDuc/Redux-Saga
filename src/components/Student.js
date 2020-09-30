import React, { Component } from 'react'
// Tao ra 1 component cua React voi cu phap
// class Ten_Component extends React.Component {}
// Component Student chi bao gom cac the html
// de hien thi thong tin hoc sinh
class Student extends Component {
    render() {
        // Thong tin hoc sinh se duoc truyen xuong day
        // thong qua props item
        // Khi goi component student o dau ta can dua props item
        // de Student nhan cac thong tin ma hien ra
        // VD: <Student item={{ id: 1, name: 'Huy', age: 10, score: 5 }} />
        // React se chuyen cac the td duoi day thanh
        // <td>1</td>
        // <td>Huy</td>
        // <td>10</td>
        // <td>5</td>
        return (
            <tr onClick={() => this.setState(this.props.onClickItem({
                id: this.props.item.id, name: this.props.item.name, age: this.props.item.age, score: this.props.item.score
            }))}>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.age}</td>
                <td>{this.props.item.score}</td>
            </tr>
        )
    }
}
export default Student