import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil, reset } from "../../features/user/userSlice";
import Spinner from "../../components/spinner/Spinner";

function PrivateHome() {
  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess, isError]);

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  console.log(profil.data);

  if (!profil.data || isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <section className="heading">
          <h4>Bienvenue</h4>
          <p>Merci de choisir une option ci-dessous</p>
        </section>

        <section className="container">
            
          <h4>Staff</h4>
          <Link className="btn btn-block" to={"/private/collects-todo"}>
            Commencer les collectes
          </Link>

          {profil.data.role === 'admin' ? (
            <>
            <h4>administration</h4>
          <Link
            className="btn btn-block btn-reverse "
            to={"/private/collects-assign"}
          >
            Assigner les collectes
          </Link>
          <Link
            className="btn btn-block btn-reverse"
            to={"/private/users-admin"}
          >
            Gestion des uttilisateurs
          </Link>
          <Link
            className="btn btn-block btn-reverse"
            to={"/private/collect-historic"}
          >
            Historiques des collectes
          </Link>
          <Link
            className="btn btn-block btn-reverse"
            to={"/private/messages"}
          >
            gerer les messages
          </Link>
            </>
          ): ("")}
          
        </section>
      </>
    );
  }
}

export default PrivateHome;
