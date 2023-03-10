import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


import { getCollectPoints } from "../../features/collectPoint/collectPointSlice"
import CollectPointItem from "../../components/CollectPointItem"
import Spinner from "../../components/shared/spinner/Spinner"
import { BackButton } from "../../components/shared/BackButton"

function PrivateCollectPointList() {

    const {collectPoints, isLoading, isSuccess, isError} = useSelector((state) => state.collectPoint)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCollectPoints())
    }, [dispatch])

    console.log(collectPoints);

    if(isLoading || !collectPoints.data) {
        return <Spinner/>
    }
  return (
    <>
    <section className="heading">
        <BackButton url={'/private/home'}/>
        <h3>Liste des point de collectes</h3>
        <p>Les points de collects en base de données.</p>
    </section>
    <section>
    
        <div className="tickets">
            <div className="ticket-headings">
                <div>date de création</div>
                <div >partenaire</div>
                <div>Total recyclé</div>
            </div>
            {collectPoints.data.map((collectPoint) =>(
                <CollectPointItem key={collectPoint._id} collectPoint={collectPoint} />
            ) )}
        </div>
    </section>
    </>
  )
}

export default PrivateCollectPointList