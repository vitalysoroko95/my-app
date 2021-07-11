const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';


const dialogsReducer = (store, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            store.newMessageText = action.body;
            return store;
        case SEND_MESSAGE:
            let body = store.newMessageText;
            store.messages.push({id: 6, message: body});
            store.newMessageText = '';
            return store;
    }

}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_MESSAGE_BODY, body: body});


export default dialogsReducer;
