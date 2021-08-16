import React from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }



    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let authRedirectComponent = withAuthRedirect(ProfileContainer);





let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

});





let ProfileContainerWithRouter = withRouter(authRedirectComponent);


export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter);