import React from 'react'
import './MailBody.css'
import MailHeaderSide from '../mail-header-side/MailHeaderSide'
import MailInbox from '../mail-inbox/MailInbox'
import MessageBox from '../message-box/MessageBox'

function MailBody() {
    return (
        <div className='mailBody'>
            <MailHeaderSide/>
            <MailInbox />
            <MessageBox />
        </div>
    )
}

export default MailBody
