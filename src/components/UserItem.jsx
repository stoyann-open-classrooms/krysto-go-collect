import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user}) {
  return (
    <div className='ticket'>
        <div>{new Date(user.createdAt).toLocaleDateString()}</div>
        <div className={`status role-${user.role}`} >{user.role}</div>
        {user.compagny ? ( 
          <p>{user.compagny.compagnyName}</p>
          
        ) : (
           <div className='status role-staff'>Particulier</div>
        )}
        <Link className='btn btn-reverse btn-sm' to={`/private/user-details/${user.id}`}>Détails</Link>
    </div>
  )
}

export default UserItem