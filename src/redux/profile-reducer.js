import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 23},
        {id: 3, message: 'My first post', likesCount: 23},
    ],
    newPostText: 'Hi, how are you?',
    profile: [],
    status: ""

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = {id: 5, message: state.newPostText, likesCount: 0}

            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newText],

            }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return { ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return { ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {

    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            debugger;
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultcode === 0){
            dispatch(setStatus(status));
            }
        });
}


export default profileReducer;


