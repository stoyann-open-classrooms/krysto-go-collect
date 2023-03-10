import React from 'react'
import { Link } from 'react-router-dom'
import Ticket from './shared/ticket/Ticket'

function MessageItem({message}) {
  return (
    <Ticket>
        <div>{new Date(message.createdAt).toLocaleDateString()}</div>
        <div>{message.object}</div>
        
        <div className={`status message-${message.status}`}>
            {message.status}
          </div>
        <Link className='btn btn-reverse btn-sm' to={`/private/message-details/${message._id}`}>Détails</Link>
    </Ticket>
  )
}

export default MessageItem