import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, follow, unFollow}) => {

    return (
        <div>
             <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.av}
                                 alt=''/>

                        </NavLink>
                    </div>
                    <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unFollow(user.id);
                                          }
                                          }>UNFOLLOW</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id);
                                          }
                                          }>FOLLOW</button>}
                    </div>
                    </span>

            <span>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>

                            <div>
                                <div>{'user1.location.country'}</div>
                                <div>{'user1.location.city'}</div>
                            </div>
                        </span>
        </div>
    )
}


export default User;