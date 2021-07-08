import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import state from "./redux/state";


 let reRender =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText = {updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRender(state);

subscribe(reRender);


