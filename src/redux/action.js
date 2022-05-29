export const INC = 'INC';

export const DEC = 'DEC';

export const ADD_TODO = 'ADD_TODO';


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (payload)=>{
    return{
        type:LOGIN,
        payload
    }
}

export const logout = ()=>{
    return {
        type:LOGOUT
    }
}