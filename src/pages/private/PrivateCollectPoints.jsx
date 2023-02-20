import React from 'react'
import { Link } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'

function PrivateCollectPoints() {
  return (
    <>
    <section>
    <BackButton url={'/private/home'}/>
        <h3>Gerer les points de collectes</h3>
    </section>
    <Link to={'/private/collect-points-list'} className='btn btn-block'> liste des points de collectes</Link>
    <Link to={'/private/add-collectPoint'} className='btn btn-block'> Ajouter un point de collecte</Link>
    </>
  )
}

export default PrivateCollectPoints