import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../components/spinner/Spinner';
import { getUser } from '../../features/user/userSlice';
function PrivateUserDetails() {
    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.user
      );
      const params = useParams();
      const dispatch = useDispatch();
    
     
    
      useEffect(() => {
        if (isError) {
          toast.error(message);
        }
        dispatch(getUser(params.id));
        // eslint-disable-next-line
      }, [isError, message, params.id]);
    
      console.log(user);
      if(!user.data || isLoading) {
        return <Spinner/>
    }
    if(isError) {
        return <h3>Une erreur est survenue merci de réesayer.</h3>
    }
      return <div className="ticket-page"> 
      
        <header className="ticket-header">
            <button className="btn btn-sm">Retour</button>
            <h2>Username : {user.data.username} <span>{user.data.email}</span></h2>
            <h2>ID de l'utilisateur : {user.data._id} <span className={`status role-${user.data.role}` }>{user.data.role}</span></h2>
            
            <hr />
            {/* <div className="ticket-desc">
                <h3>Remarque: </h3>
            <p>{collect.data.collectPoint.description}</p>
            
            </div>
            <div className="ticket-desc">
                <h3>Adresse: </h3>
            <p>{collect.data.collectPoint.location.formattedAddress}</p>
            </div> */}
        </header>
        <section>
    
    
    
        </section>
       </div>;
}

export default PrivateUserDetails