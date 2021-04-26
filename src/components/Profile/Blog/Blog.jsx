import React from 'react';
import s from './Blog.module.css';
import Post from "./Post/Post";


const Blog = (props) => {

    let postsElement = props.state.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }
   let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewText(text);
    }

    return (<div className={s.blog}>
            <div>
                new post
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText } />

                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}
export default Blog;