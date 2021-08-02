import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {addFriendAC, deleteFriendAC, setUsersAC} from "../../redux/friends-reducer";



let mapStateToProps =(state) => {
    return {
        friends: state.friendsPage.friendsState
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        addFriend: (userId) => {
        dispatch(addFriendAC(userId));
        },
        deleteFriend: (userId) => {
            dispatch(deleteFriendAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }

    }
}
const FriendsContainer = connect (mapStateToProps, mapDispatchToProps) (Friends);
export default  FriendsContainer;