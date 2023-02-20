import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";

function PrivateUsersAdmin() {
  return (
    <>
      <section className="heading">
        <BackButton url={'/private/home'}/>
        <h4>Gestion des utilisateurs</h4>
        <p>
          Vous devez avoir le status admin pour acceder a ces fonctionalités
        </p>
      </section>

      <Link className="btn btn-block btn-reverse" to={"/private/add-new-user"}>
        Ajouter un utilisateur
      </Link>
      <Link className="btn btn-block btn-block" to={"/private/user-list"}>
        Liste des utilisateurs
      </Link>
     
    </>
  );
}

export default PrivateUsersAdmin;
