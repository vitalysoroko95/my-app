import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Tools from "./components/Tools/Tools";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Tools/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}
                    />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/login' render={withSuspense(LoginPage)}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}


export default SocialNetworkApp;