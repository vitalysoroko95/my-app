import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";

import BlogContainer from "./Blog/BlogContainer";



const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Album />
            <BlogContainer />
        </div>
    )
}


export default Profile;