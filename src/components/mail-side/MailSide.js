import React from 'react'
import './MailSide.css'
import MailSideRow from '../mail-side-row/MailSideRow'
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

function MailSide() {
    const [{messageBoxStatus},dispatch]=useStateValue();

    const openMessageBox=()=>{
        dispatch({
            type: actionTypes.OPEN_MESSAGE_BOX,
            messageBoxStatus: !messageBoxStatus
        })
    }

    return (
        <div className='mailSide'>
            <button onClick={openMessageBox}><img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' className='mailSide__compose-img'/>Compose</button>
            <div className='mailSide__options'>
                <MailSideRow Icon={InboxIcon} title={'Inbox'} active />
                <MailSideRow Icon={StarIcon} title={'Starred'} />
                <MailSideRow Icon={WatchLaterIcon} title={'Snoozed'} />
                <MailSideRow Icon={LabelImportantIcon} title={'Important'} />
                <MailSideRow Icon={SendIcon} title={'Sent'} />
                <MailSideRow Icon={InsertDriveFileIcon} title={'Drafts'} />
                <MailSideRow Icon={LabelIcon} title={'Personal'} />
                <MailSideRow Icon={KeyboardArrowDownIcon} title={'More'} />
            </div>
            <div className='mailSide__meet-options'>
                <p>Meet</p>
                <MailSideRow Icon={VideocamIcon} title={'New meeting'} />
                <MailSideRow Icon={KeyboardIcon} title={'Join a meeting'} />
            </div>
        </div>
    )
}

export default MailSide
