import React from 'react'
import './InboxItem.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function InboxItem({recipient, subject, message, read, timestamp}) {

    
    const currentDateTime=new Date()
    const currentDate=currentDateTime.toLocaleDateString('en-US')
 
    const dateTimeMessage=new Date(timestamp?.toDate())
    const messageDate=dateTimeMessage.toLocaleDateString('en-US')
    const messageTime=dateTimeMessage.toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', hour12: true})
    

    return (
        <div className= 'inboxItem'>
            <div className='inboxItem__left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <p className='inboxItem__left--unread'>{recipient}</p>
            </div>
            <div className='inboxItem__middle'>
                <p className='inboxItem__left--unread'>{subject}</p>
            </div>
            <div className='inboxItem__right'>
                <p className='inboxItem__left--unread'>{currentDate===messageDate?messageTime:messageDate}</p>
            </div>
                
                
              
        </div>
    )
}

export default InboxItem
