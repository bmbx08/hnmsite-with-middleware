import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers"; //경로는 ./reducers/index 또는 ./reducers 만 써도 자동으로 index.js 읽어옴

import{configureStore} from "@reduxjs/toolkit";

import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";


// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// store을 설정 할 때 다음 4가지를 설정해야 했음.
// combinereducer
// thunk
// applyMiddleware
// composeWithDevTools

const store = configureStore({
  reducer:{
    auth : authenticateReducer,
    product: productReducer
  }
})
//toolkit에서는 devtool,applyMiddleware,thunk,combinereducer들이 자동설정
//reducer들을 모아놓은 combine reducer인 index.js가 필요없음

export default store;