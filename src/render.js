import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewText} from "./redux/state";

//addPost('apsdpapd')

export let reRender =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateText = {updateNewText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reportWebVitals();
