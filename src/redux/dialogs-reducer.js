const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        }
        default:
            return state;
    }

}


export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});



export default dialogsReducer;
