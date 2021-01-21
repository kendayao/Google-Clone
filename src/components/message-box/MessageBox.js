import React from 'react'
import './MessageBox.css'
import CloseIcon from '@material-ui/icons/Close';
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'

function MessageBox() {
    const [{messageBoxStatus},dispatch]=useStateValue();

    const closeMessageBox=()=>{
        dispatch({
            type: actionTypes.OPEN_MESSAGE_BOX,
            messageBoxStatus: false
        })
    }
    
    return (
        <div className={messageBoxStatus?'messageBox messageBox--show':'messageBox messageBox--hide'} >
            <div className='messageBox__header'>
                <p>New Message</p>
                <CloseIcon onClick={closeMessageBox} fontSize='small' />
            </div>
        </div>
    )
}

export default MessageBox
