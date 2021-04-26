import React from 'react';
import s from './Profile.module.css';
import Blog from "./Blog/Blog";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Album/>
            <Blog state={props.profilePage}
            addPost={props.addPost}
            updateNewText={props.updateNewText}
            />
        </div>
    )
}

export default Profile;