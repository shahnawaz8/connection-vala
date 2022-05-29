import { store } from "../store";
import { ADD_TODO, DEC, INC, login, LOGIN, logout, LOGOUT } from "./action";


export const reducer = (store,{type,payload})=>{
    switch(type){
        case LOGIN:
            return{
            ...store,isAuthenticated:true
        }
        case LOGOUT:
            return {
                ...store, isAuthenticated:false, token :""
            }
        default:
            return store
    }
}