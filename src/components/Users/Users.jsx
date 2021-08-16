import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>

        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.pageClick(p)
                }} className={props.currentPage === p && styles.selectedPage}>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.av}
                                      alt=''/>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toogleFollowingInProgress(true, u.id)
                                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/${u.id}', {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "ca9c4ec8-37c3-4650-8743-62f5aae466a6"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id);
                                        }
                                        props.toogleFollowingInProgress(false, u.id);
                                    })
                                }}>UNFOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toogleFollowingInProgress(true, u.id)
                                    axios.post('https://social-network.samuraijs.com/api/1.0/follow/${u.id}', {}, {
                                        withCredentials: true,
                                        headers: {"API-KEY": "ca9c4ec8-37c3-4650-8743-62f5aae466a6"}
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toogleFollowingInProgress(false, u.id)
                                    })
                                }}>FOLLOW</button>}
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

export default Users;