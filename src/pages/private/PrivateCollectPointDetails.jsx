import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCollectPoint,
  reset,
} from "../../features/collectPoint/collectPointSlice";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { BackButton } from "../../components/BackButton";
import CollectItem from "../../components/CollectItem";

function PrivateCollectPointDetails() {
  const { collectPoint, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.collectPoint
  );
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getCollectPoint(params.id));
    // eslint-disable-next-line
  }, [isError, message, params.id]);

  if (!collectPoint.data || isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>Une erreur est survenue merci de réesayer.</h3>;
  }
  return (
    <>
    {collectPoint.data.collects
            .filter((collect) => collect.status === "todo")
            .map((collect) => (
              <>
              <h4>Une collecte en cours ...</h4>
              <CollectItem key={collect.id} collect={collect} />
         </>
            ))}
      <section className="heading">
        <BackButton url={"/private/collects-todo"} />
        <h3>Détail point de collecte</h3>
        <p> identifiant : {collectPoint.data.id}</p>
        {collectPoint.data.collects.length === 0 ? (
          <p>Aucune collecte effectuée pour le moment</p>
        ) : (
          <p>
            Nombre de collectes effectuée : {collectPoint.data.collects.length}
          </p>
        )}
      </section>
      <div className="ticket-page">
        <header className="ticket-header">
          <h2>
            Client : {collectPoint.data.partnerName} <br />
            Date de création :{" "}
            {new Date(collectPoint.data.createdAt).toLocaleDateString()}
            <span>
              <div>
                <QRCode
                  value={[collectPoint?.data?.waste, collectPoint?.data?.id]}
                />
              </div>
            </span>
          </h2>
          <hr />

          {/* <h2>
         status :
          <span className={`status collect-${collect.data.status}`}>
            {collect.data.status}
          </span>
        </h2> */}

          <hr />
          <div className="ticket-desc">
            <h3>Remarque: </h3>
            <p>{collectPoint.data.description}</p>
          </div>
          <div className="ticket-desc">
            <h3>Adresse: </h3>
            <p>{collectPoint.data.location.formattedAddress}</p>
          </div>
        </header>
        <section>
          <h3>Historique des collectes</h3>
          <div className="ticket-headings">
            <div>date demande</div>
            <div>quantité collecté</div>
            <div >status</div>
            <div >voir</div>
        </div>
          {collectPoint.data.collects
            .filter((collect) => collect.status === "done")
            .map((collect) => (
              <CollectItem key={collect.id} collect={collect} />
            ))}
        </section>
      </div>
    </>
  );
}

export default PrivateCollectPointDetails;
