import React, {useEffect, useState} from 'react'
import './MailInbox.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxItem from '../inbox-item/InboxItem'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import db from '../../firebase'

function MailInbox() {

    const [messages, setMessages]=useState([])

    useEffect(()=>{
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>(
            setMessages(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        ))

            
    },[])

    console.log(messages)


    return (
        <div className='mailInbox'>
            <div className='mailInbox__top'>
                <CheckBoxOutlineBlankIcon fontSize='small' />
                <ArrowDropDownIcon fontSize='small' />
                <RefreshIcon fontSize='small' />
                <MoreVertIcon fontSize='small' />
            </div>
            <div className='mailInbox__middle'>
                <div className='mailInbox__options mailInbox__options--active' >
                    <InboxIcon fontSize='small' />
                    <p>Primary</p>
                </div>
                <div className='mailInbox__options'>
                    <PeopleIcon fontSize='small' />
                    <p>Social</p>
                </div>
                <div className='mailInbox__options'>
                    <LocalOfferIcon fontSize='small'/>
                    <p>Promotions</p>
                </div>
            </div>
            <div className='mailInbox__bottom'>
                {messages.map(message=>(<InboxItem 
                recipient={message.data.recipient} 
                subject={message.data.subject}
                message={message.data.message}
                timestamp={message.data.timestamp}
                key={message.id}
                />))}
            </div>
        </div>
    )
}

export default MailInbox
