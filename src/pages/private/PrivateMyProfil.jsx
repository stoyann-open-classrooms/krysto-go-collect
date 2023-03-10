import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BackButton } from '../../components/shared/BackButton';
import Spinner from '../../components/shared/spinner/Spinner';

import { getProfil } from '../../features/user/userSlice';

function PrivateMyProfil() {
    const {profil, isLoading, isSuccess, isError} = useSelector((state) => state.user)
    
    const dispatch = useDispatch()
  
   
      useEffect(() => {
        dispatch(getProfil());
      }, []);
    
      console.log(profil.data);


      if(isLoading || !profil.data) {
        return <Spinner/>
    }
  return (
    <>
       <BackButton url={"/private/home"} />
    <section className='heading'>
        <h2>Bienvenue sur votre profil {profil.data.username}</h2>
        <p>Mise a part votre mot de passe, pour effectuer des modifications, vous devez avoir le statut administrateur. Si les informations saisies sont erronées, merci de contacter la direction.</p>
    </section>
    <div className="ticket-page">
<hr />
        <header className="ticket-header">
          <h2>
            Role
           
            <span>
             {profil.data.role}
            </span>
          </h2>
          <h2>
            Nom d'utilisateur :  <br />
           
            <span>
            {profil.data.username}
            </span>
          </h2>
          <h2>
          code agent : 
          <span>
          {profil.data.agent.codeAgent}

          </span>
          </h2>
          <h2>
            Type de contrat :  <br />
           
            <span>
            {profil.data.agent.contrat}
            </span>
          </h2>
          <h2>
          Fonction : 
          <span>
          {profil.data.agent.function}
          </span>
          </h2>
          <h2>
            Numéro Cafat : <br />
           
            <span>
            {profil.data.agent.cafat} 
            </span>
          </h2>
          <h2>
          Taux horraire Brut :
            <span>
            {profil.data.agent.tauxHorraire} XPF
            </span>
          </h2>
          <hr />


          <hr />
          <div className="ticket-desc">
            <h3>Contact : </h3>
            <p>Nom : {profil.data.contact.firstname}</p>
            <p>Prénom : {profil.data.contact.lastname}</p>
            <p>email: {profil.data.email}</p>
            <p>Téléphone: {profil.data.contact.phone}</p>
       
          </div>
          <div className="ticket-desc">
            <h3>Adresse: </h3>
            <p>{profil.data.contact.address}</p>
          </div>
        </header>
       
            <button className='btn btn-block btn-danger'>Changer mon mot de passe</button>
     
      </div>
    </>
  )
}

export default PrivateMyProfil