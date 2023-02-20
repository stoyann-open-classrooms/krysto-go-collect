import React from 'react'
import { Link } from 'react-router-dom'

function CollectPointItem({collectPoint}) {
  return (
    <div className='ticket'>
        <div>{new Date(collectPoint.createdAt).toLocaleDateString()}</div>
        <div>{collectPoint.partnerName}</div>
        <div>{collectPoint.waste}</div>
       
        <Link className='btn btn-reverse btn-sm' to={`/private/collect-points/${collectPoint._id}`}>Détails</Link>
    </div>
  )
}

export default CollectPointItem