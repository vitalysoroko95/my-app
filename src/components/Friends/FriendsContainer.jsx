import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {addFriendAC, deleteFriendAC, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../../redux/friends-reducer";
import * as axios from "axios";

class FriendsContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    pageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }


    render() {
        return <Friends
        totalUsersCount ={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        pageClick={this.pageClick}
        currentPage={this.props.currentPage}
        deleteFriend={this.props.deleteFriend}
        addFriend={this.props.addFriend}
        friends={this.props.friends}
        />
    }
}



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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
