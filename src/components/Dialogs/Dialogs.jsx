import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessage = state.newMessageText;


    let sendMessage = () => {
       props.onSendMessage();
    }


    let updateBody = (e) => {
        let body = e.target.value;
        props.onUpdateBody(body);
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
                        <textarea onChange={updateBody}   value={newMessage}/>
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