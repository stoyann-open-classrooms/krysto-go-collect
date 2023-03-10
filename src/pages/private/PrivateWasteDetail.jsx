import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import CollectPointItem from "../../components/CollectPointItem";
import { BackButton } from "../../components/shared/BackButton";
import Spinner from "../../components/shared/spinner/Spinner";

import { getWaste } from "../../features/waste/wasteSlice";
function PrivateWasteDetail() {

  const navigate = useNavigate()

    const { waste, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.waste
      );
      const params = useParams();
      const dispatch = useDispatch();
    
      const deleteWaste = async (id) => {
        console.log(id);
        
        if (window.confirm("Vous êtes sur le point de supprimer ce déchet voulez vous continuer ?")) {
          await fetch(
            process.env.REACT_APP_BASE_API_URL + `/${id}`,
            { method: "DELETE" }
          );
          toast.success("Dechets suprimé avec succés")
          navigate('/private/wastes')
          }    
        }
      useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(getWaste(params.id));
        // eslint-disable-next-line
      }, [isError, message, params.id]);
    
      console.log(waste);
      if(!waste.data || isLoading) {
        return <Spinner/>
    }
    if(isError) {
        return <h3>Une erreur est survenue merci de réesayer.</h3>
    }
  return (
    <>
   <div className="ticket-page"> 
      
      <header className="ticket-header">
          <BackButton url={'/private/wastes'}/>
        <button onClick={() => deleteWaste(waste.data.id)} className="btn btn-danger">Supprimer le déchet</button>
          <h2>Catégorie du déchet : <span>{waste.data.wasteCategory}</span></h2>
          <h2>Type du déchets <span>{waste.data.wasteType}</span></h2>

      </header>
      
     <hr />
      <section>
        <h4 className="title">Point de collecte pour ce dechet</h4>

        <div className="tickets">
            <div className="ticket-headings">
                <div>date de création</div>
                <div >partenaire</div>
                <div >Fréquence</div>
            </div>
      {waste.data.collectPoints.map((collectPoint) =>(
          <CollectPointItem key={collectPoint._id} collectPoint={collectPoint}/>
          ) )}
            </div>
      </section>

      <button className="btn btn-block btn-danger ">Modifier le déchet</button>

      
  
     </div>
    </>

  )
}

export default PrivateWasteDetail