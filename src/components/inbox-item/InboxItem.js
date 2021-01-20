import React from 'react'
import './InboxItem.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function InboxItem() {
    return (
        <div className= 'inboxItem'>
            <div className='inboxItem__left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <p className='inboxItem__left--unread'>Kaeneth Dayao</p>
            </div>
            <div className='inboxItem__middle'>
                <p className='inboxItem__left--unread'>This is the new gmail </p>
            </div>
            <div className='inboxItem__right'>
                <p className='inboxItem__left--unread'> 1:17 PM</p>
            </div>
                
                
              
        </div>
    )
}

export default InboxItem
