import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers"; //경로는 ./reducers/index 또는 ./reducers 만 써도 자동으로 index.js 읽어옴

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
