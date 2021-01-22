import React from 'react'
import './MailHeaderSideRow.css'
import {useStateValue} from '../../contextAPI/StateProvider'
import {actionTypes} from '../../contextAPI/reducer'



function MailHeaderSideRow({Icon, title, active}) {

    const [{messages},dispatch]=useStateValue();

    return (
        <div className={active?'mailHeaderSideRow mailHeaderSideRow--active': 'mailHeaderSideRow'}>
            <div className='mailHeaderSideRow__left'>
            <Icon fontSize='small' className={active?'mailHeaderSideRow--active': 'mailHeaderSideRow__icon'} />
            <p>{title}</p>
            </div>
            <div className={active?'mailHeaderSideRow__right--show mailHeaderSideRow__right':'mailHeaderSideRow__right--hide'}>
                <p>{messages?.length}</p>
            </div>         
        </div>
    )
}

export default MailHeaderSideRow
