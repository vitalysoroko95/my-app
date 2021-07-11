import React from 'react';
import s from './Profile.module.css';
import Blog from "./Blog/Blog";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Album from "./Album/Album";
import {updateNewPostText} from "../../redux/profile-reducer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Album/>
            <Blog state={props.profilePage.postsData}
                  dispatch={props.dispatch}
                  newPostText = {props.newPostText}
            />
        </div>
    )
}


export default Profile;