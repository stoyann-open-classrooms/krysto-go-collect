import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCollect, reset } from "../../features/collect/collectSlice";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";

function PrivateCollectDetails() {
  const { collect, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.collect
  );
  const params = useParams();
  const dispatch = useDispatch();

 

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getCollect(params.id));
    // eslint-disable-next-line
  }, [isError, message, params.id]);

  console.log(collect);
if(!collect.data || isLoading) {
    return <Spinner/>
}
if(isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>
}
  return <div className="ticket-page"> 
  
    <header className="ticket-header">
        <button className="btn btn-sm">Retour</button>
        <h2>Client : {collect.data.collectPoint.partnerName} <span className="status">{collect.data.collectPoint.location.city}</span></h2>
        <h2>ID de la collecte : {collect.data._id} <span className={`status collect-${collect.data.status}` }>{collect.data.status}</span></h2>
        <h4>Date de la demande : {new Date(collect.data.collectDemandeDate).toLocaleDateString()}</h4>
        <hr />
        <div className="ticket-desc">
            <h3>Remarque: </h3>
        <p>{collect.data.collectPoint.description}</p>
        
        </div>
        <div className="ticket-desc">
            <h3>Adresse: </h3>
        <p>{collect.data.collectPoint.location.formattedAddress}</p>
        </div>
    </header>
    <section>



    </section>
   </div>;
}

export default PrivateCollectDetails;
