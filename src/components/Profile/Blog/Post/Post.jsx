import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


    return (<div className={s.posts}>
            <div>
                <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-avatar-icon-image_1130894.jpg"
                     alt=""/>
                {' ' + props.message}
            </div>
            <div>
                <span>
                    likes
                </span>{' '+props.likesCount}
            </div>
        </div>
    )
}

export default Post;