import React from 'react'
import { Link } from 'react-router-dom'
import Ticket from './shared/ticket/Ticket'

function CertificatItem({certificat}) {
  return (
    <>
   <Ticket>
        <div>{certificat.recycler.compagny.compagnyName}</div>
        <div>{new Date(certificat.destructionDate).toLocaleDateString()}</div>
        <div>{new Date(certificat.collect.collectDate).toLocaleDateString()}</div>
        <div>{certificat.collect.quantityCollected} KG</div>
        
        <Link className='btn btn-reverse btn-sm' to={`/private/certificat/${certificat._id}`}>Détails</Link>
   </Ticket>
 
    </>
  )
}

export default CertificatItem