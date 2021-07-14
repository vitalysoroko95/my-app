import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Blog from "./Blog";
import {connect} from "react-redux";



let mapStateToProps =(state)=>{

    return{
        profilePage: state.profilePage
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{

        onAddPost : () => {
            dispatch(addPostActionCreator());
        },

       onPostChange : (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}
const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;