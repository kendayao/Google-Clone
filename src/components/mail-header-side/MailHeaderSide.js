import React from 'react'
import './MailHeaderSide.css'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

function MailHeaderSide() {
    return (
        <div className='mailheaderside'>
            <button><img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' className='mailheaderside__compose-img'/>Compose</button>
            <div className='mailheaderside__options'>

            </div>
        </div>
    )
}

export default MailHeaderSide
