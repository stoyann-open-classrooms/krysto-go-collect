import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectItem from "../../components/CollectItem";
import Spinner from "../../components/shared/spinner/Spinner";

import { getCollects } from "../../features/collect/collectSlice";


function PrivateCollectHistoric() {

    const {collects, isLoading, isSuccess, isError} = useSelector((state) => state.collect)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCollects())
    }, [dispatch])

    console.log(collects.data);

    if(isLoading || !collects.data) {
        return <Spinner/>
    }
  return (
    <>
      <section className="heading">
        <h4>Historiques des collectes</h4>
        <p>Historiques des collectes effectuer</p>
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
            {collects.data.filter(collect => collect.status === "done").map((collect) =>(
                <CollectItem key={collect.id} collect={collect}/>
            ) )}
        </div>
    </section>
    </>
  )
}

export default PrivateCollectHistoric