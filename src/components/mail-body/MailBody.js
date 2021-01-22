import React from 'react'
import './MailBody.css'
import MailHeaderSide from '../mail-header-side/MailHeaderSide'
import MailInbox from '../mail-inbox/MailInbox'
import MessageBox from '../message-box/MessageBox'
import {useStateValue} from '../../contextAPI/StateProvider'
import {useParams} from 'react-router-dom'
import MailMessage from '../mail-message/MailMessage'

function MailBody() {
    const [{messageBoxStatus},dispatch]=useStateValue();

    const { mailId } =useParams();
    return (
        <div className='mailBody'>
            <MailHeaderSide/>
            {mailId?<MailMessage/>:<MailInbox/>}
            {messageBoxStatus?<MessageBox />:null}
        </div>
    )
}

export default MailBody
