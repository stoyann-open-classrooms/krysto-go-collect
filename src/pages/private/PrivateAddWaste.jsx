import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createWaste } from "../../features/waste/wasteSlice";

function PrivateAddWaste() {
  const [waste, setWaste] = useState({});
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.waste
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createWaste(waste));
    if (isSuccess) {
      toast.success("Nouveau déchets ajoutée avec succées.");
      navigate("/private/wastes");
    }
  };

  const handleInput = (e) => {
    setWaste((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="heading">Ajouter un nouveaux type de déchets</section>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label htmlFor="wasteCategory">Categorie du déchet *</label>
          <select
            onChange={handleInput}
            name="wasteCategory"
            id="wasteCategory"
          >
            <option selected="selected" value="">
              Selectioner une catégorie de déchet
            </option>
            <option value="Aluminium">Aluminium</option>
            <option value="Plastique">Plastique</option>
            <option value="Huile">Huile</option>
            <option value="Papier">Papier</option>
            <option value="Carton">Carton</option>
            <option value="Déchets alimentaire">Déchets alimentaire</option>
            <option value="Papier confidentiel">Papier confidentiel</option>
            <option value="Verre">Verre</option>
            <option value="Bois">Bois</option>
            <option value="Capsule">Capsule</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="PlasticType">
            type de plastique (uniquement si la categorie de déchet est
            plastique)
          </label>
          <select onChange={handleInput} name="plasticType" id="plasticType">
            <option selected="selected" value="">
              Choisir un type de plastique
            </option>
            <option value="PET">PET</option>
            <option value="PP">PP</option>
            <option value="HDPE">HDPE</option>
            <option value="PEHD">PEHD</option>
            <option value="PS">PS</option>
            <option value="PVC">PVC</option>
            <option value="PLA">PLA</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="détails">
            type de déchet (exemple bouchons de bouteille)
          </label>
          <input
            onChange={handleInput}
            id="wasteType"
            name="wasteType"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="détails">
            Détails du déchet (exemple bouchons de bouteille)
          </label>
          <input
            onChange={handleInput}
            id="détails"
            name="détails"
            type="text"
          />
        </div>
        <button className="btn btn-block btn-danger">Soumettre</button>
      </form>
    </>
  );
}

export default PrivateAddWaste;
