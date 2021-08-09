import React from 'react';
import styles from './Friends.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";


let Friends = (props) => {
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
            props.friends.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id }>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.av}
                                  alt=''/>
                        </div>
                        </NavLink>
                        <div>
                            {u.isFriend
                                ? <button onClick={() => {
                                    props.deleteFriend(u.id)
                                }}>DELETE FRIEND</button>
                                : <button onClick={() => {
                                    props.addFriend(u.id)
                                }}>ADD FRIEND</button>}
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