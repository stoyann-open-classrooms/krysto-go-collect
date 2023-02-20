import React from 'react'
import { Link } from 'react-router-dom'

function CollectItem({collect}) {
  return (
    <div className='ticket'>
        <div>{new Date(collect.collectDemandeDate).toLocaleDateString()}</div>
         {collect.collectPoint.partnerName ? (<div>{collect.collectPoint.partnerName}</div>) : ("")}
         {collect.quantityCollected ? (<div>{collect.quantityCollected} KG</div>) : ("")}
        <div className={`status collect-${collect.status}`} >{collect.status}</div>
        <Link className='btn btn-reverse btn-sm' to={`/private/collect-details/${collect._id}`}>Détails</Link>
    </div>
  )
}

export default CollectItem