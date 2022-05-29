import { store } from "../store";
import { LOGGIN_FAILED, LOGGIN_LOADING, LOGGIN_SUCCESS, loginLoging, LOGOUT } from "./action";

const initState = {
    loading:false,
    error:false,
    isAuthenticated:false,
    token:"",
    username:""
};

export const loginReducer = (state = initState, {type,payload})=>{
    switch(type){
        case LOGGIN_LOADING:
            return {...state, loading:true};
        case LOGGIN_SUCCESS:
            return {...state, 
                error:false,
                loading:false,
                isAuthenticated:true,
                token:payload.token,
                username:payload.username
            };
        case LOGGIN_FAILED:
            return {
                ...state,
                error:true,
                loading:false,
                isAuthenticated:false,
                token: "",
                username:""
            }
        case LOGOUT:
            return {...initState}
        default:
            return state;
    }
};


