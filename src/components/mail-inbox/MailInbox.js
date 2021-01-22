import React, {useEffect} from 'react'
import './MailInbox.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxItem from '../inbox-item/InboxItem'
import CreateIcon from '@material-ui/icons/Create';
import db from '../../firebase'
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'

function MailInbox() {

    const [{messages,messageBoxStatus},dispatch]=useStateValue();

    useEffect(()=>{
        const unsubscribe=db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>(
           dispatch({
               type: actionTypes.SET_MESSAGES,
               messages: snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            }))
           })
        ))
        return()=>unsubscribe();
    },[dispatch])

    const openMessageBox=()=>{
        dispatch({
            type: actionTypes.OPEN_MESSAGE_BOX,
            messageBoxStatus: !messageBoxStatus
        })
    }

    return (
        <div className='mailInbox'>
            <div className='mailInbox__top'>
                <CheckBoxOutlineBlankIcon fontSize='small' />
                <ArrowDropDownIcon fontSize='small' />
                <RefreshIcon fontSize='small' />
                <MoreVertIcon fontSize='small' />
                <CreateIcon onClick={openMessageBox}/>
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
                {messages.length===0?
                    <p className='mailInbox__noMailMessage'>No New Mail</p>:
                    messages.map(message=>(<InboxItem 
                    recipient={message.data.recipient} 
                    subject={message.data.subject}
                    message={message.data.message}
                    read={message.data.read}
                    timestamp={message.data.timestamp}
                    id={message.id}
                    key={message.id}
                />))}
            </div>
        </div>
    )
}

export default MailInbox
