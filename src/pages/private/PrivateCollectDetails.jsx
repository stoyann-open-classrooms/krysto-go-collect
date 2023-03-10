import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCollect, reset } from "../../features/collect/collectSlice";
import { Form, Link, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { ImStop } from "react-icons/im";
import { GiNotebook, GiPerson } from "react-icons/gi";
import { IoCloudDoneOutline } from "react-icons/io5";
import Modal from "react-modal";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Spinner from "../../components/shared/spinner/Spinner";
import { BackButton } from "../../components/shared/BackButton";
import { getUser } from "../../features/user/userSlice";

const customStyles = {
  content: {
    width: "320px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    backgroundColor: "#333",
  },
};

Modal.setAppElement("#root");
function PrivateCollectDetails() {
  const [modalNoteIsOpen, setModalNoteIsOpen] = useState(false);
  const { collect, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.collect
  );

  const params = useParams();
  const dispatch = useDispatch();

  const {  user } = useSelector((state) => state.user);
  

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    
    dispatch(getCollect(params.id));

    // if (collect.data && collect.data.assigned === true) {
    //   dispatch(getUser(collect.data.assignedTo));
    // }

    // eslint-disable-next-line
  }, [isError, message, params.id]);


  useEffect(() => {
    if(collect.data ) {
        console.log(collect.data.assignedTo);
      dispatch(getUser(collect.data.assignedTo))
    }
  
        
   
  },[])
  
  console.log(user);
  console.log(collect);
  const qrData = [
    collect?.data?.collectPoint.waste,
    collect?.data?.collectPoint._id,
  ];

 
  

 
  const onChangeNote = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // open close modal

  const openModalNote = () => setModalNoteIsOpen(true);
  const closeModalNote = () => setModalNoteIsOpen(false);

  if (!collect.data || isLoading ) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
    <>
      <BackButton url={"/private/all-collects-todo"} />
      <h1>Détail de la collecte</h1>
      <div className="ticket-page">
        <header className="ticket-header">
          <span className={`status collect-${collect.data.status}`}>
            {collect.data.status}
          </span>
          <h2>type de déchets: {collect.data.collectPoint.waste}</h2>
          <h2>
            Client : {collect.data.collectPoint.partnerName} <br />
            Date de la demande :{" "}
            {new Date(collect.data.collectDemandeDate).toLocaleDateString()}
            <span>
              <div>
                <QRCode value={qrData} />
              </div>
            </span>
          </h2>
          {collect.data.status != "done" ? (
            <div className="button-container">
              <button className="btn btn-sm">
                <IoCloudDoneOutline />
                Collecte effectuer
              </button>
              <button onClick={openModalNote} className="btn btn-sm">
                <GiNotebook />
                Ajouter une remarque
              </button>
              <button className="btn btn-sm btn-danger">
                <ImStop />
                Fail
              </button>
            </div>
          ) : (
            ""
          )}

          <hr />

          {collect.data.assigned === true ? (
            // <h2>
            //   cette collecte est assigné à{" "}
            //   <span>
            //     {user.data.contact.firstname +
            //       "  " +
            //       user.data.contact.lastname}{" "}
            //   </span>{" "}
            // </h2>
               <h2>Collecte assignée</h2>
          ) : (
           <h2 className="title">Cette collecte n'est pas assigné a un agent. <span><Link className="btn btn-block btn-danger" to={'/private/collects-assign'}>Assigner les collectes</Link></span></h2>
          )}

          <Modal
            isOpen={modalNoteIsOpen}
            onRequestClose={closeModalNote}
            style={customStyles}
            contentLabel="add note"
          >
            <button onClick={closeModalNote} className="btn btn-close">
              X
            </button>

            <h5 className="modal-title">Ajouter une remarque</h5>
            <form>
              <div className="form-group">
                <textarea
                  onChange={onChangeNote}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-block">
                Soumettre
              </button>
            </form>
          </Modal>

         
          <hr />
          <div className="ticket-desc">
            <h3>Description: </h3>
            <p>{collect.data.collectPoint.description}</p>
          </div>
          <div className="ticket-desc">
            <h3>Adresse: </h3>
            <p>{collect.data.collectPoint.location.formattedAddress}</p>
          </div>
          <div className="ticket-desc">
            <h3>Remarque </h3>
            <p>{collect.data.remarque}</p>
          </div>
        </header>

        <h3 className="title">Geolocalisation</h3>
        <div className="leaflet-container">
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[
              collect.data.collectPoint.location.coordinates[1],
              collect.data.collectPoint.location.coordinates[0],
            ]}
            zoom={17}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                collect.data.collectPoint.location.coordinates[1],
                collect.data.collectPoint.location.coordinates[0],
              ]}
            >
              <Popup>
                {collect.data.collectPoint.location.formattedAddress} <br />
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {collect.data.certificat ? (
          <section className="certificat-container">
            <h2 className="title-certificat-container">
              {" "}
              Le certificat de destruction est diponible
            </h2>
            <h2>
              {" "}
              identifiant du certificat:{" "}
              <span>{collect.data.certificat.id}</span>{" "}
            </h2>
            <h2>
              {" "}
              date de destruction:{" "}
              <span>
                {new Date(
                  collect.data.certificat.destructionDate
                ).toLocaleDateString()}
              </span>{" "}
            </h2>
            <button className="btn btn-block">Voir le certificat</button>
          </section>
        ) : (
          ""
        )}
        <section></section>
      </div>
    </>
  );
}

export default PrivateCollectDetails;
