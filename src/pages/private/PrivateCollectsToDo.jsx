import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectItem from "../../components/CollectItem";
import Spinner from "../../components/spinner/Spinner";
import UserItem from "../../components/UserItem";
import { getCollects } from "../../features/collect/collectSlice";
import { getProfil } from "../../features/user/userSlice";


function PrivateCollectsToDo() {

    const {collects, isLoading, isSuccess, isError} = useSelector((state) => state.collect)
    
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCollects())
    }, [dispatch])

    console.log(collects.data);

    const { profil } = useSelector(
        (state) => state.user
      );
   
      useEffect(() => {
        dispatch(getProfil());
      }, []);
    
      console.log(profil.data);



    if(isLoading || !collects.data || !profil.data) {
        return <Spinner/>
    }
  return (
    <>
      <section className="heading">
        <h4>Mess collectes à effectuer</h4>
        <p>Listes des collectes a effectuer.</p>
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
            {collects.data.filter(collect => collect.status === "todo" || collect.status === "fail").filter( collect => profil.data._id === collect.assignedTo).map((collect) =>(
              
              <CollectItem key={collect.id} collect={collect}/>
            ) )}
        </div>
    </section>
    </>
  )
}

export default PrivateCollectsToDo