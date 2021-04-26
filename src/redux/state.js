import {reRender} from "../render";


let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Andry'},
            {id: 5, name: 'ASDASDSA'}

        ],
        messages : [
            {id: 1, message: 'asdasd'},
            {id: 2, message: 'asdasd'},
            {id: 3, message: 'asdasd'},
            {id: 4, message: 'asdasd'},
            {id: 5, message: 'asdasd'},
        ],
    },
    profilePage:{
        postsData : [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'My first post', likesCount: 23},
            {id: 3, message: 'My first post', likesCount: 23},
        ],
        newPostText : 'Hi, how are you?'

    },

    toolsPage: {
        friendsItems : [
            {name: 'Sasha' , id: '1'},
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
}

export let addPost = (postMessage) =>{
    let newPost ={id:5, message:postMessage, likesCount:0 }
    state.profilePage.postsData.push(newPost)
    reRender(state);
}
export let updateNewText = (newText) =>{

    state.profilePage.newPostText= newText;
    reRender(state);
}

export default state;