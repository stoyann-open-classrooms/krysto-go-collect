import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/shared/spinner/Spinner";

import { createNewCollectPoint } from "../../features/collectPoint/collectPointSlice";
import { getUsers } from "../../features/user/userSlice";
import { getWastes } from "../../features/waste/wasteSlice";

function PrivateAddCollectPoint() {
    const {users, isLoading, isSuccess, isError} = useSelector((state) => state.user)
    const {wastes} = useSelector((state) => state.waste)
   const [collectPoint , setCollectPoint] = useState()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    useEffect(() => {
        dispatch(getWastes())
    }, [dispatch])

  

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(collectPoint);
        dispatch(createNewCollectPoint(collectPoint))
    }


    const handleInput = (e) => {
        setCollectPoint((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
  




    if(isLoading || !users.data || !wastes.data) {
        return <Spinner/>
    }
  return (
    <>
      <section className="heading">
        <h4>Ajouter un point de collect</h4>
        <p>Ajouter un nouveau point de collecte en base de données</p>
      </section>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <select name="user" id="user" onChange={handleInput} >
            <option value="">selectioner un client</option>
            {users.data.filter(user => user.role === "partner").map((user) =>(
                <option key={user.id} value={user.id}>{user.compagny.compagnyName}</option>            
            ) )}
            
          </select>
        </div>

        <div className="form-group">
          <select name="waste" id="waste" onChange={handleInput} >
            <option value="">selectioner un type de déchets</option>
            {wastes.data.map((waste) =>(
                <>
                {waste.plasticType ? (
                    <option  value={waste.id}>{waste.wasteCategory + "/" +  waste.wasteType + "/" + "type de plastique : " + waste.plasticType}</option>
                    
                    ) : (
                        
                        <option  value={waste.id}>{waste.wasteCategory + "/" +   waste.wasteType}</option>
                        )}
                        </>
              
            ) )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse du point de collecte</label>
          <input name="address" id="address" onChange={handleInput}  type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description du point de collecte</label>
          <textarea onChange={handleInput}  name="description" id="description" cols="30" rows="10"></textarea>
        </div>
        <button className="btn btn-block" type="submit">
          Enregistrer le point de collecte
        </button>
      </form>
    </>
  );
}

export default PrivateAddCollectPoint;
