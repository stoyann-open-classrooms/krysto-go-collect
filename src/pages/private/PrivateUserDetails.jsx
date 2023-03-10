import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackButton } from '../../components/shared/BackButton';
import Spinner from '../../components/shared/spinner/Spinner';

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
            <BackButton url={'/private/user-list'}/>
            {user.data.compagny ? ( 
          <>
            <h2>Raison sociale : {user.data.compagny.compagnyName} <span>{user.data.email}</span></h2>
            <h2> RIDET : {user.data.compagny.ridet}</h2>
          </>
          
        ) : (
           <div>Particulier</div>
        )}


            
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
        
       <div className="button-container">

        <button className="btn btn-block ">Modifier l'utilisateur </button>
        <button className="btn btn-block btn-danger">Supprimer l'utilisateur </button>
       </div>
        <section>
          <h5>Point de collecte du client</h5>
        {user.data.collectPoints.map((collectPoint) =>(
            <div key={collectPoint._id}>{collectPoint.waste}</div>
            // <CollectItem key={collect._id} collect={collect}/>
            ) )}
        </section>
        
    
       </div>;
}

export default PrivateUserDetails