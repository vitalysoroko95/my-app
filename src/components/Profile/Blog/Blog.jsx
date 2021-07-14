import React from 'react';
import s from './Blog.module.css';
import Post from "./Post/Post";




const Blog = (props) => {

    let state = props.profilePage;

    let postsElement = state.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.onAddPost();

    }
    let PostChange = (e)=>{
        let text =e.target.value;
        props.onPostChange(text);

    }
    return (
        <div className={s.blog}>
            <div>
                new post
                <div>
                    <textarea  onChange={PostChange}  value={state.newPostText}/>

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