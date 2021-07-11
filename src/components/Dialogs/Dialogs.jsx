import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);



    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }


    let updateBody = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
                <div>
                    <div>
                        <textarea onChange={updateBody}   value={props.newMessageText }/>
                    </div>
                    <div>
                        <button className={s.button} onClick={sendMessage}>
                            Отправить
                        </button>
                    </div>
                </div>

        </div>
    )
}

export default Dialogs;