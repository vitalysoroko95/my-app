import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onUpdateBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }

    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
