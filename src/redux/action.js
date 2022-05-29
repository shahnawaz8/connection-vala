import axios from "axios";

export const LOGGIN_LOADING = "LOGGIN_LOADING";
export const LOGGIN_SUCCESS = "LOGGIN_SUCCESS";
export const LOGGIN_FAILED = "LOGGIN_FAILED";
export const LOGOUT = "LOGOUT";

export const loginLoging = ()=>{
    type:LOGGIN_LOADING
}

export const loginSuccess = (payload)=>{
    type:LOGGIN_SUCCESS,
    payload
}

export const loginFailed = ()=>{
    type:LOGGIN_FAILED
}

export const logout = ()=>{
    type:LOGOUT
}

export const login = 
    ({username,password}) =>
    (dispatch) =>{
        dispatch(loginLoging());
        axios.get("http://localhost:5000/api/user/login",{
            username,
            password
        })
        .then((res)=>dispatch(loginSuccess({username,token:res.token})))
        .catch((err)=>dispatch(loginFailed()));
    }

