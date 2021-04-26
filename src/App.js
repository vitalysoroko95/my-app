import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Tools from "./components/Tools/Tools";
import Dialogs from "./components/Dialogs/Dialogs";
import s from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Tools state={props.state.toolsPage}/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewText={props.updateNewText}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}


export default App;
