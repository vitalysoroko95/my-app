import {compose} from "redux";

const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_FETCHING = 'SET_FETCHING';


let initialState = {
    friendsState: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
}


const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friendsState: state.friendsState.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: true}
                    }
                    return u;
                })
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friendsState: state.friendsState.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, friendsState: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage};
        }

        case SET_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.count};
        }
        case SET_FETCHING : {
            return {...state, isFetching: action.isFetching};
        }

        default:
            return state;
    }
}
export const addFriendAC = (userId) => ({type: ADD_FRIEND, userId})
export const deleteFriendAC = (userId) => ({type: DELETE_FRIEND, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, count:totalCount })
export const setFetchingAC = (isFetching) => ({type: SET_FETCHING, isFetching })


export default friendsReducer;
