import React from 'react'
import './MailSideRow.css'
import {useStateValue} from '../../contextAPI/StateProvider'

function MailSideRow({Icon, title, active}) {

    const [{messages},dispatch]=useStateValue();

    return (
        <div className={active?'mailSideRow mailSideRow--active': 'mailSideRow'}>
            <div className='mailSideRow__left'>
                <Icon fontSize='small' className={active?'mailSideRow--active': 'mailSideRow__icon'} />
                <p>{title}</p>
            </div>
            <div className={active?'mailSideRow__right--show mailSideRow__right':'mailSideRow__right--hide'}>
                <p>{messages?.length}</p>
            </div>         
        </div>
    )
}

export default MailSideRow
