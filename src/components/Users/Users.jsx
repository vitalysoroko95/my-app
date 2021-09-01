import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, pageClick, totalUsersCount, pageSize, users, ...props}) => {


    return <div>
        <Paginator currentPage={currentPage} pageClick={pageClick} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unFollow={props.unFollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;