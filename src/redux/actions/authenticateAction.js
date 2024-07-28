import { authenticateActions } from "../reducers/authenticateReducer";

function login(id,password){  
    return(dispatch,getState)=>{
        console.log("login success action");
        dispatch(authenticateActions.loginUser({id,password}));
        // dispatch({type:"LOGIN_SUCCESS",payload:{id,password}});
    };
}  //로그인은 middleware을 필요로 하지 않지만, 원래라면 데이터베이스와 요청으로 주고 받기에 middleware을 여기서 사용.

function logout(){
    return(dispatch,getState)=>{
        console.log("logout success action");
        dispatch(authenticateActions.logoutUser());
        // dispatch({type:"LOGOUT_SUCCESS"});
    }
}

export const authenticateAction = {login, logout};