import React from 'react'
import './MailHeaderSide.css'
import MailHeaderSideRow from '../mail-header-side-row/MailHeaderSideRow'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import {useStateValue} from '../../contextAPI/StateProvider';
import {actionTypes} from '../../contextAPI/reducer'

function MailHeaderSide() {
    const [{},dispatch]=useStateValue();

    const openMessageBox=()=>{
        dispatch({
            type: actionTypes.OPEN_MESSAGE_BOX,
            messageBoxStatus: true
        })
    }

    return (
        <div className='mailheaderside'>
            <button onClick={openMessageBox}><img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' className='mailheaderside__compose-img'/>Compose</button>
            <div className='mailheaderside__options'>
                <MailHeaderSideRow Icon={InboxIcon} title={'Inbox'} active />
                <MailHeaderSideRow Icon={StarIcon} title={'Starred'} />
                <MailHeaderSideRow Icon={WatchLaterIcon} title={'Snoozed'} />
                <MailHeaderSideRow Icon={LabelImportantIcon} title={'Important'} />
                <MailHeaderSideRow Icon={SendIcon} title={'Sent'} />
                <MailHeaderSideRow Icon={InsertDriveFileIcon} title={'Drafts'} />
                <MailHeaderSideRow Icon={LabelIcon} title={'Personal'} />
                <MailHeaderSideRow Icon={KeyboardArrowDownIcon} title={'More'} />
            </div>
            <div className='mailheaderside__meet-options'>
                <p>Meet</p>
                <MailHeaderSideRow Icon={VideocamIcon} title={'New meeting'} />
                <MailHeaderSideRow Icon={KeyboardIcon} title={'Join a meeting'} />
            </div>
        </div>
    )
}

export default MailHeaderSide
