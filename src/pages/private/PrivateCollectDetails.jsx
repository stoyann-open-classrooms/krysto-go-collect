import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCollect, reset } from "../../features/collect/collectSlice";
import { Form, useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { BackButton } from "../../components/BackButton";
import {ImStop} from 'react-icons/im'
import {GiNotebook, GiPerson} from 'react-icons/gi'
import {IoCloudDoneOutline} from 'react-icons/io5'
import Modal from "react-modal";
import { getProfil, getUsers } from "../../features/user/userSlice";
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
    backgroundColor: "#333"
  },
};

Modal.setAppElement("#root");
function PrivateCollectDetails() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalNoteIsOpen, setModalNoteIsOpen] = useState(false);
  const { collect, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.collect
  );

  const params = useParams();
  const dispatch = useDispatch();




  const {users} = useSelector((state) => state.user)

 


  useEffect(() => {
      dispatch(getUsers())
  }, [dispatch])

  console.log(users.data);










  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getCollect(params.id));
    // eslint-disable-next-line
  }, [isError, message, params.id]);

  console.log(collect);
  const qrData = [
    collect?.data?.collectPoint.waste,
    collect?.data?.collectPoint._id,
  ];

  const onAssignSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  };




  // open close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openModalNote = () => setModalNoteIsOpen(true);
  const closeModalNote = () => setModalNoteIsOpen(false);

  if (!collect.data || isLoading || !users.data) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url={"/private/collects-todo"} />
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
    <IoCloudDoneOutline/>
    Collecte effectuer</button>
  <button onClick={openModalNote} className='btn btn-sm'>
    <GiNotebook/>
    Ajouter une remarque</button>
  <button className="btn btn-sm btn-danger">
    <ImStop/>
    Fail</button>
  </div>
        ) : ("")}
      
        <hr />

        <h2 className="modal-title">
         
        </h2>

{collect.data.assigned ? (
          <p>cette collecte est assigné à {collect.data.assignedTo}</p>
        ) : (
          <button onClick={openModal} className="btn btn-sm">
            <GiPerson/> Assignée cette collecte
          </button>
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
              <textarea name="" id="" cols="30" rows="10">

              </textarea>
            </div>
            <button type="submit" className="btn btn-block">Soumettre</button>
          </form>

        </Modal>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="assign collect"
        >
          <h5 className="modal-title">Assigner cette collecte a un agent</h5>
          <button onClick={closeModal} className="btn btn-close">
            X
          </button>
          <form onSubmit={onAssignSubmit}>
            <div className="form-group">
              <select>
                <option value="">selectioner un agent</option>
              
                {users.data.filter(user => user.role === "staff" || user.role === "admin").map((user) =>(
                  <option value="">{user.username}</option>
               
            ) )}
              
                
              </select>
            </div>
            <button className="btn btn-block">Soumettre</button>
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
      
    </div>
  );
}

export default PrivateCollectDetails;
