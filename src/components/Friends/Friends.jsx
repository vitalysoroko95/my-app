import React from 'react';
import styles from './Friends.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Friends extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    pageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>

            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        this.pageClick(p)
                    }} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.friends.map(u => <div key={u.id}>
                        <div>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.av}
                                      alt=''/>
                            </div>
                            <div>
                                {u.isFriend
                                    ? <button onClick={() => {
                                        this.props.deleteFriend(u.id)
                                    }}>DELETE FRIEND</button>
                                    : <button onClick={() => {
                                        this.props.addFriend(u.id)
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
}

export default Friends;