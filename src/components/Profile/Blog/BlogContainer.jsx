import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import Blog from "./Blog";
import {connect} from "react-redux";



let mapStateToProps =(state)=>{

    return{
        profilePage: state.profilePage
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{

        onAddPost : (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}
const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;