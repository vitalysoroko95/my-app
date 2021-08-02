const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';



let initialState = {
    friendsState: [
            {id: 1, name: 'Dima', location : {country: 'Belarus', city: 'Minsk'}, status: 'onm omn omn', isFriend : true, avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
        {id: 2, name: 'Masha', location : {country: 'Russia', city: 'Moscow'}, status: 'onm omn omn', isFriend : false, avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
        {id: 3, name: 'LESHA', location : {country: 'Ukraine', city: 'Kiyv'}, status: 'onm omn omn', isFriend : true, avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
    ]
};

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRIEND:
            return  {
                ...state,
                friendsState:  state.friendsState.map(u => {
                    if (u.id === action.userId){
                        return {...u, isFriend: true}
                    }
                    return u;
                })
            }
        case DELETE_FRIEND:
            return  {
                ...state,
                friendsState:  state.friendsState.map(u => {
                    if (u.id === action.userId){
                        return {...u, isFriend: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, friendsState: [...state.friendsState, ...action.users] }
        }
             default:
                 return state;
    }
}
export const addFriendAC = (userId)=> ({type: ADD_FRIEND, userId })
export const deleteFriendAC = (userId)=> ({type: DELETE_FRIEND, userId})
export const setUsersAC = (users)=> ({type: SET_USERS, users  })


export default friendsReducer;
