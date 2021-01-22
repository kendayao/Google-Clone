import React, {useState} from 'react'
import './MessageBox.css'
import CloseIcon from '@material-ui/icons/Close';
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import db from '../../firebase'
import firebase from 'firebase'

function MessageBox() {
    const [{messageBoxStatus},dispatch]=useStateValue();
    const [toEmail, setToEmail]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');

    const closeMessageBox=()=>{
        dispatch({
            type: actionTypes.OPEN_MESSAGE_BOX,
            messageBoxStatus: !messageBoxStatus
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        db.collection('messages').add({
            recipient: toEmail,
            subject: subject,
            message: message,
            read: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setToEmail('')
        setSubject('')
        setMessage('')
        closeMessageBox();
    }

    
    return (
        <div className='messageBox' >
            <div className='messageBox__header'>
                <p>New Message</p>
                <CloseIcon onClick={closeMessageBox} fontSize='small' />
            </div>
            <form className='messageBox__body'>
                <input type='email' value={toEmail} onChange={(event)=>setToEmail(event.target.value)} placeholder='To'/>
                <input type='text' value={subject} onChange={(event)=>setSubject(event.target.value)}  placeholder='Subject'/>
                <textarea type='text' value={message} onChange={(event)=>setMessage(event.target.value)} rows='12'/>
                <div className='messageBox__footer'>
                    <button onClick={handleSubmit} disabled={!toEmail||!subject||!message}>Send</button>
                    <AttachFileIcon/>
                    <FontDownloadOutlinedIcon/>
                    <EmojiEmotionsOutlinedIcon/>
                    <LinkOutlinedIcon/>
                    <ImageOutlinedIcon/>
                </div>
            </form>
        </div>
    )
}

export default MessageBox
