import {authAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
           return {
                ...state,
                ...action.payload,
               isAuth: true
            }
        }
        default:
            return state;
    }

}


export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload:{email, id, login, isAuth}});

export const getAuthUserData  = () => (dispatch) => {

    authAPI.me().then(response => {
        if(response.data.resultCode ===0){
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
    });
}
export const login = (email,password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode ===0){
           dispatch(getAuthUserData());
        }
    });
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode ===0){
           dispatch(setAuthUserData(null, null, null, false));
        }
    });
}


export default authReducer;
