import s from "./Friends.module.css";
import React from "react";

const Friends = (props) => {
    return(
        <div className={s.friends}>
        <div>
            <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-avatar-icon-image_1130894.jpg"
                 alt=""/>
        </div>
        <div >{props.name}</div>
        </div>
)

}

export default Friends;