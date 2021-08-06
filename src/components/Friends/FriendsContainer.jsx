import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {
    addFriend,
    deleteFriend,
    setCurrentPage,
    setFetching,
    setTotalCount,
    setUsers
} from "../../redux/friends-reducer";
import * as axios from "axios";
import Preloader from "../../common/preloader/Preloader";


class FriendsContainer extends React.Component {


    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    pageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                pageClick={this.pageClick}
                currentPage={this.props.currentPage}
                deleteFriend={this.props.deleteFriend}
                addFriend={this.props.addFriend}
                friends={this.props.friends}
            />
        </>

    }

}


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friendsState,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching


    }
}


export default connect(mapStateToProps, {
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalCount: setTotalCount,
    setIsFetching: setFetching

})(FriendsContainer);
