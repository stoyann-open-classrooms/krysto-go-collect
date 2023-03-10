import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import Spinner from "../../components/shared/spinner/Spinner";

import WasteItem from "../../components/WasteItem";
import { getWastes } from "../../features/waste/wasteSlice";
function PrivateWastes() {

    const {wastes, isLoading, isSuccess, isError} = useSelector((state) => state.waste)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getWastes())
    }, [dispatch])

   
  console.log(wastes);
   
  
  if(isLoading || !wastes.data) {
        return <Spinner/>
    }

  return (
    <>
      <section className="heading">
        <h2>Gerer les déchets</h2>
      </section>

      <section>
      <div className="tickets">
            <div className="ticket-headings">
                <div>Catégorie</div>
                <div >Type</div>
                <div >Points de collecte</div>
            </div>
         {wastes.data.map((waste) =>(
             <WasteItem key={waste._id} waste={waste} />
             ) )}
             </div>
      </section>
      <Link
        className="btn btn-block btn-reverse btn-danger "
        to={"/private/wastes/new-waste"}
      >
        Ajouter un type de déchets
      </Link>
    </>
  );
}

export default PrivateWastes;
