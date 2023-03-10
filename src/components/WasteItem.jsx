
import { Link } from 'react-router-dom'

function WasteItem({waste}) {
  return (
    <div className='ticket'>
    <div>{waste.wasteCategory}</div>
    <div>{waste.wasteType}</div>
    <div>{waste.collectPoints.length}</div>
    <Link className='btn btn-reverse btn-sm' to={`/private/waste/${waste._id}`}>Détails</Link>
</div>
  )
}

export default WasteItem