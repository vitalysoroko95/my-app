import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onSendMessage: () => {
           dispatch(sendMessageActionCreator())
        },
        onUpdateBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
