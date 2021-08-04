import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {addFriendAC, deleteFriendAC, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../../redux/friends-reducer";


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friendsState,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendAC(userId));
        },
        deleteFriend: (userId) => {
            dispatch(deleteFriendAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }

    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;