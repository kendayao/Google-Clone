import React from 'react'
import './MailBody.css'
import MailSide from '../mail-side/MailSide'
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
            <MailSide/>
            {mailId?<MailMessage mailId={mailId}/>:<MailInbox/>}
            {messageBoxStatus?<MessageBox />:null}
        </div>
    )
}

export default MailBody
