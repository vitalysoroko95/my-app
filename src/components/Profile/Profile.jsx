import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";

import BlogContainer from "./Blog/BlogContainer";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}  />
            <Album />
            <BlogContainer />
        </div>
    )
}


export default Profile;