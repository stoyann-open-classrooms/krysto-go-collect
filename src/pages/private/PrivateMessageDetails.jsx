import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams , useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { BackButton } from "../../components/shared/BackButton";
import Spinner from "../../components/shared/spinner/Spinner";

import { getMessage, reset , closeMessage } from "../../features/message/messageSlice";

function PrivateMessageDetails() {
  const { messageData, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.message
  );
  console.log(messageData.data);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getMessage(params.id));
    // eslint-disable-next-line
  }, [isError, message, params.id]);

const onTicketClose = () => {
    dispatch(closeMessage(messageData.data._id))
    toast.success('message archivé')
    navigate('/private/messages')
}

  if (!messageData.data || isLoading) {
    return <Spinner/>;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url={"/private/messages"} />

        <h2>
          objet : {messageData.data.object} <br />
          Date de la demande :{" "}
          {new Date(messageData.data.createdAt).toLocaleDateString()}
          <span></span>
        </h2>
        <hr />

        <h2>
          status :
          <span className={`status message-${messageData.data.status}`}>
            {messageData.data.status}
          </span>
        </h2>

        <hr />
        <div className="ticket-desc">
          <h3>Message: </h3>
          <p>{messageData.data.message}</p>
        </div>
      </header>
      {messageData.data.status !== "Archived" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">Archiver le message </button>
      )}
      <section></section>
    </div>
  );
}

export default PrivateMessageDetails;
