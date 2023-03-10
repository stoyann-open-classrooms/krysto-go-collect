import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CertificatItem from "../../components/CertificatItem"
import Spinner from "../../components/shared/spinner/Spinner"
import {  getCertificats } from "../../features/certificat/certificatSlice"

function PrivateCertificats() {

   const {certificats, isLoading, isSuccess, isError} = useSelector((state) => state.certificat)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCertificats())
    }, [dispatch])

   
  console.log(certificats);
   
  
  if(isLoading || !certificats.data) {
        return <Spinner/>
    }



  return (
    <>
    <section className='heading'>
        <h2>Liste des certificats de déstruction</h2>
    </section>
    <section>
    <div className="tickets">
            <div className="ticket-headings">
                <div>Recyleur</div>
                <div >Collecte</div>
                <div >Destruction</div>
                <div >Quantité</div>
            </div>
         {certificats.data.map((certificat) =>(
             <CertificatItem key={certificat._id} certificat={certificat} />
             ) )}
             </div>
    </section>
             </>
  )
}

export default PrivateCertificats