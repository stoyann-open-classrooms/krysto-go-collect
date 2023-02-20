import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil, reset } from "../../features/user/userSlice";
import Spinner from "../../components/spinner/Spinner";
import {MdLocalCarWash , MdPersonAdd} from 'react-icons/md'
import {BsFillPinMapFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {FaHistory} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'

function PrivateHome() {
  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfil());
  }, []);

  console.log(profil.data);
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess, isError]);

 

  if (!profil.data || isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <section className="heading">
          <h4>Bienvenue {profil.data.username}</h4>
          <p>Merci de choisir une option ci-dessous :</p>
        </section>

        <section className="container">
      
          <Link className="btn btn-block" to={"/private/collects-todo"}>
            <MdLocalCarWash/>
          Commencer mes collectes
          </Link>

          {profil.data.role === "admin" ? (
            <>
             
              <Link
                className="btn btn-block btn-reverse "
                to={"/private/all-collects-todo"}
              >
               <MdLocalCarWash/>
                Liste des collectes en cours
              </Link>
              <Link
                className="btn btn-block btn-reverse "
                to={"/private/collects-points"}
              >
                <BsFillPinMapFill/>
                Gérer les points de collectes
              </Link>
              <Link
                className="btn btn-block btn-reverse "
                to={"/private/collects-assign"}
              >
                <MdPersonAdd/>
                Assigner les collectes
              </Link>
              <Link
                className="btn btn-block btn-reverse"
                to={"/private/users-admin"}
              >
                <FiUsers/>
                Gestion des utilisateurs
              </Link>
              <Link
                className="btn btn-block btn-reverse"
                to={"/private/collect-historic"}
              >
                <FaHistory/>
               Historique des collectes
              </Link>
              <Link
                className="btn btn-block btn-reverse"
                to={"/private/messages"}
              >
                <AiOutlineMessage/>
                Gérer les messages
              </Link>
            </>
          ) : (
            ""
          )}
        </section>
      </>
    );
  }
}

export default PrivateHome;
