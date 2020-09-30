// Phan nay la cau hinh khoi tao cua React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Sau khi da tao cac file reducer, saga goc
// Lap trinh vien can import chung vao day
import rootReducer from './reducers'
import rootSaga from './sagas'
// Tiep den la import cac component khoi tao cua cac thu vien redux, saga
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// Phan code nay de cau hinh cho saga, redux
// Luu y la no nhan tham so chinh la cac file reducer, saga
// ma lap trinh vien vua import phia tren
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)
// Sau khi thiet lap xong thi lap trinh vien can boc phan hien thi chinh cua app
// vao ben trong component Provider cua thu vien redux de hoan tat cau hinh
// va truyen tham so store vao cho no
// VD: o day App la component hien thi chinh cua trang web nen no duoc boc
// ben trong component Provider
ReactDOM.render(
  <React.StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
