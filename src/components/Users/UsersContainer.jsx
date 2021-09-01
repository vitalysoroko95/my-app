import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from "../../redux/users-reducer";
import Preloader from "../../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,

} from "../../redux/users-selectors";


class UsersContainer extends React.Component {


    componentDidMount() {

        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);

    }

    pageClick = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);

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
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }

}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, toggleFollowingInProgress, requestUsers
    }))(UsersContainer);