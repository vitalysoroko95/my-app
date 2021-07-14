const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_BODY: {
           return {
                ...state,
                newMessageText: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        }
        default:
            return state;
    }

}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_MESSAGE_BODY, body: body});


export default dialogsReducer;
