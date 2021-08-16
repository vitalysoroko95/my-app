import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unFollow
} from "../../redux/users-reducer";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
       usersAPI.getUsers(this.props.currentPage , this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }

    pageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                pageClick={this.pageClick}
                currentPage={this.props.currentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users}
                toogleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress ={this.props.followingInProgress}
            />
        </>

    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress


    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress

})(UsersContainer);
