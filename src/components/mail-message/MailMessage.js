import React, {useEffect, useState} from 'react'
import './MailMessage.css'
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import db from '../../firebase'
import {useHistory} from 'react-router-dom'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';




function MailMessage({mailId}) {
    const history = useHistory();
    
    const [message, setMessage]=useState({})
    
   
    useEffect(()=>{
        let unsubscribe;
         unsubscribe=db.collection("messages").doc(mailId).onSnapshot(snapshot=>(
            setMessage(snapshot.data())
        ))
       return ()=>(
           unsubscribe()
       )
    },[mailId])

    const deleteMessage=()=>{
        history.push('/mail')
        db.collection("messages").doc(mailId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        
    }

    const dateTimeMessage=new Date(message.timestamp?.toDate())
    const messageTime=dateTimeMessage.toLocaleDateString('en-US',{month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true})
  
    return (
        <div className='mailMessage'>
            <div className='mailMessage__top'>
                <ArrowBackIcon onClick={()=>history.push('/mail')} />
                <DeleteIcon onClick={deleteMessage}/>
            </div>
            <div className='mailMessage__title'>
                <div className='mailMessage__title-left'>
                    <p>{message.subject}</p>
                    <LabelImportantIcon/>
                    <p>{message.recipient}</p>
                </div>
                <div className='mailMessage__title-right'>
                    <p>{messageTime}</p>
                </div>
               
              
            </div>
            <div className='mailMessage__body'>
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default MailMessage
