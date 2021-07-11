import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";


 let reRender =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRender(store.getState());

store.subscribe(reRender);


