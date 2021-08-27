import React from 'react';
import s from './Blog.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const Blog = (props) => {

    let state = props.profilePage;
    let postsElement = state.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    let addNewPostText = (values) => {
        props.onAddPost(values.newPostBody);

    }

    return (
        <div className={s.blog}>
            <div>
                <h3>New post</h3>
                <AddNewTextFormRedux onSubmit={addNewPostText}/>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

const AddNewTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostBody" placeholder="Enter Your Text"/>
            </div>
            <div>
                <button className={s.button}>
                    Add post
                </button>
            </div>
        </form>
    )
}

const AddNewTextFormRedux = reduxForm({
    form: 'blogAddNewTextForm'
})(AddNewTextForm)
export default Blog;