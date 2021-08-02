import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer


});

let store = createStore(reducers);

export default store;