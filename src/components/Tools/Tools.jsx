import React from 'react';
import s from './Tools.module.css';

import FriendsList from "./FriendsList/FriendsList";


const Tools = (props) => {
    return (
       <div className={s.tools}>
        <div className={s.friends}>
            <FriendsList state={props.state} />
        </div>
           <div>
            weather
           </div>
       </div>
    )
}


export default Tools;