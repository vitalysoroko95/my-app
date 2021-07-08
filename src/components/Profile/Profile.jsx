import React from 'react';
import s from './Profile.module.css';
import Blog from "./Blog/Blog";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Album/>
            <Blog state={props.profilePage.postsData}
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
                  updateNewPostText = {props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;