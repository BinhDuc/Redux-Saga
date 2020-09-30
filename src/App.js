// Mot react component luc nao cung phai import tu thu vien React
import React from 'react';
// Import cac component khac muon hien thi trong ung dung
import Routes from './routes';
// Component hien thi chinh cua ca ung dung
// Component nay se phai import component Routes
class App extends React.Component {
  // Dua component Routes vao ben trong phan tra ve cua render
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}
// Xuat component nay ra de cac file khac co the import
// Vi App la component chinh cua ung dung nen se duoc import tai
// file index.js o cung thu muc
export default App;