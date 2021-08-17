import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";

import BlogContainer from "./Blog/BlogContainer";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}  />
            <Album />
            <BlogContainer />
        </div>
    )
}


export default Profile;