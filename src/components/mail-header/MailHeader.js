import React from 'react'
import './MailHeader.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from "@material-ui/icons/Apps"
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'


function MailHeader() {

    return (
        <div className='mailHeader'>
            <div className='mailHeader__left'>
                <MenuIcon />
                <Link to='/' className='mailHeader__links'>
                    <img src='https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png' alt='gmail logo' />
                    <p>Gmail</p>
                </Link>
                <div className='mailHeader__input'>
                    <SearchIcon className='mailHeader__input-icon'/>
                    <input placeholder='Search mail'/>
                </div>
            </div>
           
            <div className='mailHeader__right'>
                <HelpOutlineIcon />
                <SettingsOutlinedIcon />
                <AppsIcon />
                <Avatar />
            </div>
            
        </div>
    )
}

export default MailHeader
