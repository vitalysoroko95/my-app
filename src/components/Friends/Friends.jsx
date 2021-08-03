import React from 'react';
import styles from './Friends.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Friends = (props) => {
    if(props.friends.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }
    return <div>
            {
                props.friends.map( u => <div key={u.id}>
                        <div>
                            <div ><img src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.av}  alt=''/> </div>
                            <div>
                                {u.isFriend
                                    ? <button onClick={()=>{props.deleteFriend(u.id)}}>DELETE FRIEND</button>
                                    :<button onClick={()=>{props.addFriend(u.id)}}>ADD FRIEND</button>}
                               </div>
                        </div>

                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>

                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                </div>
                )
            }
    </div>
}

export default Friends;