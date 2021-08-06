import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {

    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Andry'},
                {id: 5, name: 'ASDASDSA'}

            ],
            messages: [
                {id: 1, message: 'asdasd'},
                {id: 2, message: 'asdasd'},
                {id: 3, message: 'asdasd'},
                {id: 4, message: 'asdasd'},
                {id: 5, message: 'asdasd'},
            ],
            newMessageText: 'АААААА'
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'My first post', likesCount: 23},
                {id: 3, message: 'My first post', likesCount: 23},
            ],
            newPostText: 'Hi, how are you?'

        },

        toolsPage: {
            friendsItems: [
                {name: 'Sasha', id: '1'},
                {name: 'Yilia', id: '2'},
                {name: 'Vitya', id: '3'},
                {name: 'Sasha', id: '4'},
                {name: 'Verka', id: '5'},
                {name: 'Verka', id: '6'},
                {name: 'yaaaaa', id: '4'},
                {name: 'Verka', id: '5'},
                {name: 'Verka', id: '6'},
            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
