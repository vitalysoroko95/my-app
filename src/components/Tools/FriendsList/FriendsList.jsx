import React from 'react';
import s from "./FriendsList.module.css"
import Friends from "./Friends/Friends";


const FriendsList = (props) => {
    let friendItem = props.state.friendsItems.map(f => <Friends name={f.name}/>);

    return (
        <div className={s.friendsList}>
            {friendItem}
        </div>
    )
}


export default FriendsList;