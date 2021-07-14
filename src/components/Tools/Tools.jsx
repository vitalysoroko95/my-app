import React from 'react';
import s from './Tools.module.css';
import FriendsList from "./FriendsList/FriendsList";


const Tools = () => {
    return (
        <div className={s.tools}>
            <div className={s.friends}>
                FriendList
            </div>
            <div>
                weather
            </div>
        </div>
    )
}


export default Tools;