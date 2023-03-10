import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectItem from '../../components/CollectItem'
import Spinner from '../../components/shared/spinner/Spinner'

import { getCollects } from '../../features/collect/collectSlice'

function PrivateAllCollectsTodo() {
    const {collects, isLoading, isSuccess, isError} = useSelector((state) => state.collect)
    
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCollects())
    }, [dispatch])

    console.log(collects.data);
    if(!collects.data) {
        return <Spinner />
    }
  return (
    <>
    <section className="heading">
    <h4>Toutes les collectes en cours</h4>
    <p>Listes des collectes à effectuer.</p>
</section>
<section>
<div className="tickets">
        <div className="ticket-headings">
            <div>date demande</div>
            <div>client</div>
            <div >status</div>
        </div>
        {/* {collects.data.map((collect) =>(
            <CollectItem key={collect._id} collect={collect}/>
        ) )} */}
        {collects.data.filter(collect => collect.status === "todo" || collect.status === "fail").map((collect) =>(
            
            <CollectItem key={collect._id} collect={collect}/>
            ) )}
    </div>
</section>
            </>
  )
}

export default PrivateAllCollectsTodo