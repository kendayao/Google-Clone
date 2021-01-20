import React from 'react'
import './MailBody.css'
import MailHeaderSide from '../mail-header-side/MailHeaderSide'
import MailInbox from '../mail-inbox/MailInbox'

function MailBody() {
    return (
        <div className='mailBody'>
            <MailHeaderSide/>
            <MailInbox />
        </div>
    )
}

export default MailBody
