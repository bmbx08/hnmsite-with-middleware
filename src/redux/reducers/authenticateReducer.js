import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.id = action.payload.id
        state.password = action.payload.password
        state.authenticate = true
    },
    logoutUser(state, action) {
      (state.id = "")
        (state.password = "")
        (authenticateSlice = action.payload.authenticate)
    },
  },
});

export default authenticateSlice.reducer;
export const authenticateActions = authenticateSlice.actions;

// function authenticateReducer(state=initialState,action){
//     let{type,payload}=action;
//     switch(type){
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer");
//             return {...state, id:payload.id,password:payload.password, authenticate:true}
//         case "LOGOUT_SUCCESS":
//             return{...state, id:"",password:"",authenticate:false}
//         default:
//             return {...state};
//     }
// }

// export default authenticateReducer;
