import React from 'react'
import { Link } from 'react-router-dom'
import Ticket from './shared/ticket/Ticket'

function CollectPointItem({collectPoint}) {
  return (
    <Ticket>
        <div>{new Date(collectPoint.createdAt).toLocaleDateString()}</div>
        <div>{collectPoint.partnerName}</div>
        {collectPoint.totalRecycled ? ( <div>{collectPoint.totalRecycled} KG</div>) : ( <div>0 KG</div> )}
       
        <Link className='btn btn-reverse btn-sm' to={`/private/collect-points/${collectPoint._id}`}>Détails</Link>
    </Ticket>
  )
}

export default CollectPointItem