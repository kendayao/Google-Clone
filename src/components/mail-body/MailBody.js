import React from 'react'
import './MailBody.css'
import MailHeaderSide from '../mail-header-side/MailHeaderSide'
import MailInbox from '../mail-inbox/MailInbox'
import MessageBox from '../message-box/MessageBox'
import {useStateValue} from '../../contextAPI/StateProvider'

function MailBody() {
    const [{messageBoxStatus},dispatch]=useStateValue();
    return (
        <div className='mailBody'>
            <MailHeaderSide/>
            <MailInbox />
            {messageBoxStatus?<MessageBox />:null}
        </div>
    )
}

export default MailBody
