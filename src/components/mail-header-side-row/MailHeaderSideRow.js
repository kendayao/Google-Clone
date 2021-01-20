import React from 'react'
import './MailHeaderSideRow.css'



function MailHeaderSideRow({Icon, title, active}) {
    return (
        <div className={active?'mailHeaderSideRow mailHeaderSideRow--active': 'mailHeaderSideRow'}>
            <div className='mailHeaderSideRow__left'>
            <Icon fontSize='small' className={active?'mailHeaderSideRow--active': 'mailHeaderSideRow__icon'} />
            <p>{title}</p>
            </div>
            <div className={active?'mailHeaderSideRow__right--show mailHeaderSideRow__right':'mailHeaderSideRow__right--hide'}>
                <p>100</p>
            </div>         
        </div>
    )
}

export default MailHeaderSideRow
