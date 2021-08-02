import React from 'react';
import styles from './Friends.css'


const Friends = (props) => {
    return <div>

            {
                props.friends.map( u => <div key={u.id}>
                        <div>
                            <div ><img src={u.avatar} className={styles.av}  alt=''/> </div>
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
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                </div>
                )
            }
    </div>
}

export default Friends;