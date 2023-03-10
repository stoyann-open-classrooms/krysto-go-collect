import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/user/userSlice';
import { updateCollect } from '../features/collect/collectSlice';
import Modal from './shared/modal/Modal';
import Spinner from './shared/spinner/Spinner';
import Ticket from './shared/ticket/Ticket'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CollectAssignItem({collect}) {

    const [userId , setUserId] = useState({
      assignedTo: "",
        assigned: true
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { users, isLoading } = useSelector((state) => state.user);
   
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault()
       console.log(userId, collect._id)
       assignCollect(userId)
       toast.success('la collecte a été assigner avec succées')
       navigate(`/private/collect-details/${collect._id}`)


    }
 // Update feedback item
 const assignCollect = async ( updItem) => {
  const response = await fetch(
    process.env.REACT_APP_BASE_API_URL + `/collects/${collect._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    }
  );

  const data = await response.json();}
    const handleInput = (e) => {
        setUserId((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    if(isLoading || !users.data) {
        return <Spinner/>
    }
  return (
    <Ticket>
   <div>{new Date(collect.collectDemandeDate).toLocaleDateString()}</div>
   <div>{collect.collectPoint.partnerName}</div>
   <div>{collect.status}</div>


  <Modal btnTxt={"Assigner cette collecte"} titleModal={"Assigner la collecte"}>
    <form onSubmit={onSubmit} action="">
        <div className="form-group">
        <select onChange={handleInput} name="assignedTo" id="assignedTo">
            <option value="">Selectioner un agent</option>
            {users.data.filter(user => user.role === "staff").map((user) =>(
               <option key={user.id}>{user.contact.firstname + " " + user.contact.lastname} </option>
            ))}

        </select>
        <div className="form-group">
            <button type='submit' className="btn">Soumettre</button>
        </div>
        </div>
        
    </form>
  </Modal>
       
</Ticket>
  )
}

export default CollectAssignItem