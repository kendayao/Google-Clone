import React from 'react'
import './InboxItem.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useHistory} from 'react-router-dom'
import db from '../../firebase'

function InboxItem({recipient, subject, message, id, read, timestamp}) {
    const history=useHistory();
    
    const currentDateTime=new Date()
    const currentDate=currentDateTime.toLocaleDateString('en-US')
 
    const dateTimeMessage=new Date(timestamp?.toDate())
    const messageDate=dateTimeMessage.toLocaleDateString('en-US')
    const messageTime=dateTimeMessage.toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', hour12: true})

    const handleInboxItemClick=()=>{
        history.push('/mail/'+id)
        if(!read){
            db.collection('messages').doc(id).set({
                read: true
            }, {merge: true})
        }
    }

    return (
        <div className= 'inboxItem' onClick={handleInboxItemClick}>
            <div className='inboxItem__left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <p className={read?'inboxItem__left--read': 'inboxItem__left--unread'}>{recipient}</p>
            </div>
            <div className='inboxItem__middle'>
                <p className={read? 'inboxItem__middle--read':'inboxItem__middle--unread'}>{subject}</p>
            </div>
            <div className='inboxItem__right'>
                <p className={read?'inboxItem__right--read':'inboxItem__right--unread'}>{currentDate===messageDate?messageTime:messageDate}</p>
            </div>
        </div>
    )
}

export default InboxItem
