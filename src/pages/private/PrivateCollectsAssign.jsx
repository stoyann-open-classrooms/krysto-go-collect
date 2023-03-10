import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectAssignItem from "../../components/CollectAssignItem";

import CollectItem from "../../components/CollectItem";
import Spinner from "../../components/shared/spinner/Spinner";

import UserItem from "../../components/UserItem";
import { asignCollect, getCollects, updateCollect } from "../../features/collect/collectSlice";
import { getUsers } from "../../features/user/userSlice";




function PrivateCollectsAssign() {


  const { users } = useSelector((state) => state.user);

    const {collects, isLoading, isSuccess, isError} = useSelector((state) => state.collect)

    const dispatch = useDispatch()


 
    useEffect(() => {
        dispatch(getCollects())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    

    if(isLoading || !collects.data || !users.data) {
        return <Spinner/>
    }
  return (
    <>
      <section className="heading">
        <h4>Collectes à assigner</h4>
        <p>Listes des collectes à assigner a un membre du staff.</p>
    </section>


   
    <section>
    <div className="tickets">
            <div className="ticket-headings">
                <div>date demande</div>
                <div>client</div>
                <div>Status</div>
                <div>Action</div>
            </div>
       
            {collects.data.filter(collect => collect.assigned === false).map((collect) =>(
              <>
               <CollectAssignItem key={collect._id} collect={collect}/>
              </>
            ) )}
        </div>
    </section>
    </>
  )
}

export default PrivateCollectsAssign